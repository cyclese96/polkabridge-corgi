import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useEffect, useState } from 'react';
import { getMatchInfo, getPlayers } from './../actions/SmartActions';
import contractConnection from './../utils/connection';

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
    color: 'white',
    width: 'auto',
    textAlign: 'center',
    fontSize: 36,
    fontWeight: 600,
    verticalAlign: 'middle',
    wordSpacing: '0px',
    [theme.breakpoints.down('md')]: {
      fontSize: '26px',
      textAlign: 'center',
    },
  },
}));

export default function ClaimRewards({ mid }) {
  const classes = useStyles();
  const [matchInfo, setMatchInfo] = useState({});
  const [enableClaim, setEnableClaim] = useState(false);
  const [players, setPlayers] = useState({});
  const [claimed, setClaimed] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function callMatchInfo() {
      console.log('Use effect');
      // let matchInfo = 10;
      let matchInfo = await getMatchInfo(mid);
      let resultDeclared = parseInt(matchInfo[5]);
      setMatchInfo(matchInfo);
      if (resultDeclared > 0) {
        console.log('Result declared');
        setEnableClaim(true);
      } else {
        console.log('Result not declared');
        setEnableClaim(false);
      }
      console.log(matchInfo);
    }
    callMatchInfo();
  }, []);
  useEffect(() => {
    async function callPlayers() {
      console.log('checking isClaimed');

      const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
      let userAddress = accounts[0];
      let playersData = await getPlayers(mid, userAddress);
      setPlayers(playersData);
      console.log(playersData);
      if (playersData.isClaim) {
        setClaimed(true);
        console.log('Already Claimed');
      } else {
        console.log('Not yet Claimed');

        setClaimed(false);
      }
    }
    callPlayers();
  }, []);
  const claimFn = async () => {
    console.log('Claim here');
    setLoading(true);

    const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
    let userAddress = accounts[0];
    const response = await new Promise((resolve, reject) => {
      contractConnection.methods
        .claimReward()
        .send({ from: userAddress }, function (error, transactionHash) {
          if (transactionHash) {
            resolve(transactionHash);
          } else {
            console.log('Rejected by user!');
            setLoading(false);
            reject();
          }
        })
        .on('receipt', async function (receipt) {
          console.log('Successfully Claimed');
          setLoading(false);
        });
    });
    console.log(response);
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
              <Button variant="contained" color="primary" className={classes.button} onClick={claimFn}>
                Claim Rewards
              </Button>
            </div>
          )}
        </div>
      ) : (
        <div>
          <Button variant="contained" color="primary" className={classes.button}>
            Result TBA
          </Button>
        </div>
      )}
    </div>
  );
}
