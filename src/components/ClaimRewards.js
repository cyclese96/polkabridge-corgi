import React from 'react';
import { Button, Slide, Dialog, Backdrop } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useEffect, useState } from 'react';
import { getMatchInfo, getPlayers } from './../actions/SmartActions';
import contractConnection from './../utils/connection';
import web3 from './../web';
import { getPendingReward } from './../actions/SmartActions';
import Loader from './Loader';
import { Replay } from '@material-ui/icons';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const useStyles = makeStyles((theme) => ({
  card: {
    width: 500,
    border: '1px solid #e5e5e5',
    borderRadius: 14,
    padding: '25px 10px 25px 10px',
    backgroundColor: 'white',
    [theme.breakpoints.down('md')]: {
      width: 350,
      padding: '10px 2px 20px 2px',
    },
  },
  buttonReload: {
    color: 'white',
    marginTop: 20,
    backgroundColor: 'green',
    textTransform: 'none',
    borderRadius: '100px',
    padding: '12px 16px 12px 16px',
    fontWeight: 500,
    //background: `linear-gradient(to bottom,#D9047C, #BF1088)`,
    fontSize: 16,
  },
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
    fontSize: 30,
    fontWeight: 600,
    verticalAlign: 'middle',
    wordSpacing: '0px',
    [theme.breakpoints.down('md')]: {
      fontSize: '20px',
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
  const [stopPopupClick, setStopPopupClick] = useState(false);
  const [popup, setPopup] = useState(false);
  const [popupActualCase, setPopupActualCase] = useState(0);

  const togglePopup = (value) => {
    setPopup(value);
  };

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
    setPopupActualCase(0);

    togglePopup(true);
    setLoading(true);
    setStopPopupClick(true);
    let matchId = mid;

    const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
    let userAddress = accounts[0];

    const response = await new Promise((resolve, reject) => {
      contractConnection.methods
        .claimReward(matchId)
        .send({ from: userAddress }, function (error, transactionHash) {
          if (transactionHash) {
            console.log(error);

            setPopupActualCase(2);
            resolve(transactionHash);
          } else {
            console.log(error);

            //console.log('Rejected by user!');
            setStopPopupClick(false);
            setPopupActualCase(1);
            setLoading(false);
            reject();
          }
        })
        .on('receipt', async function (receipt) {
          //console.log('Successfully Claimed');
          setLoading(false);
          setPopupActualCase(3);
          setStopPopupClick(false);
          window.location.reload();
        })
        .on('error', function (error) {
          //console.log('2. Transaction failed');
          console.log(error);

          setPopupActualCase(4);
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
      <Dialog
        className={classes.modal}
        open={popup}
        TransitionComponent={Transition}
        keepMounted
        onClose={() => togglePopup(false)}
        closeAfterTransition
        BackdropComponent={Backdrop}
        disableBackdropClick={stopPopupClick}
        BackdropProps={{
          timeout: 500,
        }}>
        <div style={{ backgroundColor: 'black' }}>
          {popupActualCase}
          <div className={classes.card}>
            {popupActualCase === 0 && (
              <div className="text-center">
                <h4 className="text-center">Confirm in Metamask</h4>
              </div>
            )}
            {popupActualCase === 1 && (
              <div>
                <div className="text-center my-5">
                  <img src="https://icon-library.com/images/17c52fbb9e.svg.svg" height="100px" />
                </div>
                <h4 className="text-center">Transaction Rejected</h4>
                <h6 className="text-center">Please Reload</h6>
                <div className="text-center">
                  {' '}
                  <Button variant="contained" className={classes.buttonReload} onClick={() => window.location.reload()}>
                    <Replay />
                    Reload
                  </Button>
                </div>
              </div>
            )}
            {popupActualCase === 2 && (
              <div>
                <div className="text-center my-5">
                  <Loader />
                </div>
                <h4 className="text-center">Transaction submitted. Please wait....</h4>
              </div>
            )}
            {popupActualCase === 3 && (
              <div>
                <div className="text-center my-5">
                  <img src="https://www.freeiconspng.com/thumbs/success-icon/success-icon-10.png" height="100px" />
                </div>
                <h4 className="text-center">Transaction Confirmed!</h4>
                <h6 className="text-center">Please Reload</h6>

                <div className="text-center">
                  <Button variant="contained" className={classes.buttonReload} onClick={() => window.location.reload()}>
                    <Replay />
                    Reload
                  </Button>
                </div>
              </div>
            )}
            {popupActualCase === 4 && (
              <div>
                <div className="text-center my-5">
                  <img src="images/report.png" height="100px" />
                </div>
                <h4 className="text-center">Transaction Failed!</h4>
                <h6 className="text-center">Please Reload</h6>
                <div className="text-center">
                  <Button variant="contained" className={classes.buttonReload} onClick={() => window.location.reload()}>
                    <Replay />
                    Reload
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>
      </Dialog>{' '}
    </div>
  );
}
