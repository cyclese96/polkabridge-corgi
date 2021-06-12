import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useEffect, useState } from 'react';
import { getMatchInfo, getPlayers } from './../actions/SmartActions';
import contractConnection from './../utils/connection';
import web3 from './../web';
import { getPendingReward } from './../actions/SmartActions';

const useStyles = makeStyles((theme) => ({
  button: {
    paddingRight: '10px',
    borderRadius: '10px',
    background: `linear-gradient(to bottom,#D9047C, #BF1088)`,
    lineHeight: '24px',
    verticalAlign: 'baseline',
    letterSpacing: '-1px',
    margin: 0,
    marginTop: 5,
    color: '#ffffff',
    padding: '12px 16px 12px 16px',
    fontWeight: 600,
    fontSize: '1.1vw',
    textTransform: 'none',
    [theme.breakpoints.down('sm')]: {
      fontSize: 18,
    },
  },
  heading: {
    color: 'yellow',
    width: 'auto',
    textAlign: 'center',
    fontSize: 32,
    fontWeight: 600,
    verticalAlign: 'middle',
    wordSpacing: '0px',
    [theme.breakpoints.down('md')]: {
      fontSize: '22px',
      textAlign: 'center',
    },
  },
  para: {
    color: 'white',
    width: 'auto',
    textAlign: 'center',
    fontSize: 14,
    fontWeight: 600,
    verticalAlign: 'middle',
    wordSpacing: '0px',
    [theme.breakpoints.down('md')]: {
      fontSize: 12,
      textAlign: 'center',
    },
  },
  rewards: {
    color: 'white',
    textAlign: 'center',
    fontSize: 18,
    paddingRight: 20,
    paddingLeft: 20,
  },
}));

export default function ClaimRewards({ mid, item, userAddress }) {
  const classes = useStyles();
  const [matchInfo, setMatchInfo] = useState(null);
  const [enableClaim, setEnableClaim] = useState(false);
  const [players, setPlayers] = useState(null);
  const [claimed, setClaimed] = useState(false);
  const [winner, setWinner] = useState('Winner');
  const [pendingReward, setPendingReward] = useState(0);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function callMatchInfo() {
      let matchInfo = await getMatchInfo(mid);
      let resultDeclared = parseInt(matchInfo[5]);

      //Calculate pending reward
      let pendingReward = await getPendingReward(mid, userAddress);
      let pendingRewardTemp = web3.utils.fromWei(pendingReward.toString(), 'ether');
      setPendingReward(Math.ceil(pendingRewardTemp));
      console.log('pendingRewards: ' + mid + ' : ' + Math.ceil(pendingRewardTemp));

      setMatchInfo(matchInfo);
      if (resultDeclared > 0) {
        console.log(matchInfo);
        let winnerNo = parseInt(matchInfo[5]);
        if (winnerNo === 1) {
          setWinner(`${item.team1.name} wins`);
        }
        if (winnerNo === 2) {
          setWinner('Match is Draw');
        }
        if (winnerNo === 3) {
          setWinner(`${item.team2.name} wins`);
        }
        setEnableClaim(true);
      } else {
        //console.log('Result not declared');
        setEnableClaim(false);
      }
      //console.log(matchInfo);
    }
    callMatchInfo();
  }, []);
  useEffect(() => {
    async function callPlayers() {
      //console.log('checking isClaimed');

      const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
      let userAddress = accounts[0];
      let playersData = await getPlayers(mid, userAddress);
      setPlayers(playersData);
      //console.log(playersData);
      if (playersData.isClaim) {
        setClaimed(true);
        //console.log('Already Claimed');
      } else {
        //console.log('Not yet Claimed');

        setClaimed(false);
      }
    }
    callPlayers();
  }, []);

  const userBet = () => {
    console.log(players);

    let choice = parseInt(players.whichBet);

    if (choice === 1) {
      return `${item.team1.name} `;
    }
    if (choice === 2) {
      return 'Draw';
    }
    if (choice === 3) {
      return `${item.team2.name}`;
    }
  };
  const userBetAmount = () => {
    console.log(players.amountBet);
    let amount = web3.utils.fromWei(players.amountBet, 'ether');

    return amount;
  };
  const claimFn = async () => {
    //console.log('Claim here');
    setLoading(true);
    let matchId = mid;
    const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
    let userAddress = accounts[0];
    const response = await new Promise((resolve, reject) => {
      contractConnection.methods
        .claimReward(matchId)
        .send({ from: userAddress }, function (error, transactionHash) {
          if (transactionHash) {
            resolve(transactionHash);
          } else {
            //console.log('Rejected by user!');
            setLoading(false);
            reject();
          }
        })
        .on('receipt', async function (receipt) {
          //console.log('Successfully Claimed');
          setLoading(false);
        });
    });
    //console.log(response);
    return response;
  };
  return (
    <div className="text-center">
      {enableClaim ? (
        <div>
          {claimed ? (
            <div>
              <h6 className={classes.heading}>You have claimed your rewards.</h6>
            </div>
          ) : (
            <div>
              <div className="mb-2">
                {matchInfo !== null &&
                  players !== null &&
                  (parseInt(matchInfo[5]) !== parseInt(players.whichBet) ? (
                    <div>
                      <div className={classes.heading}>
                        <span style={{ color: 'red' }}> You Loose!</span>
                      </div>
                      <div className={classes.para}>{winner}</div>
                      {players !== null && (
                        <div className="d-flex justify-content-between mt-3 mb-2">
                          <div className={classes.rewards}>
                            Your Bet: <strong style={{ color: '#a5d6a7' }}>{userBet()}</strong>
                          </div>
                        </div>
                      )}
                    </div>
                  ) : (
                    <div>
                      <div className={classes.heading}>
                        <span style={{ color: '#66bb6a' }}>You Win!</span>
                      </div>
                      <div className={classes.para}>
                        <span>{winner}</span>
                      </div>
                      {players !== null && (
                        <div className="d-flex justify-content-between mt-3 mb-2">
                          <div className={classes.rewards}>
                            Your Bet: <strong style={{ color: '#a5d6a7' }}>{userBet()}</strong>
                          </div>
                        </div>
                      )}
                      <Button variant="contained" color="primary" className={classes.button} onClick={claimFn}>
                        Claim Rewards
                      </Button>
                    </div>
                  ))}
              </div>
            </div>
          )}
        </div>
      ) : (
        <div>
          <Button variant="contained" color="primary" className={classes.button}>
            Result TBA
          </Button>
          {players !== null && (
            <div className="d-flex justify-content-between mt-3">
              <div className={classes.rewards}>
                Your Bet:{' '}
                <strong style={{ color: '#a5d6a7' }}>
                  {userBet()} <span style={{ color: 'yellow' }}>({userBetAmount() / 1000000000}B)</span>
                </strong>
              </div>
              <div className={classes.rewards}>
                Expected Reward: <strong>{pendingReward / 1000000000}B</strong>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
