import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import {
  getTotalBetAmount,
  getTotalBetAmountByResult,
  getTotalParticipants,
  isBet,
  checkApproved,
  approveAmount,
} from './../actions/SmartActions';
import tokenConnection from './../utils/tokenConnection';
import constants from './../utils/constants';

const useStyles = makeStyles((theme) => ({
  card: {
    borderRadius: 7,
    borderBottom: '1px solid #bdbdbd',
    width: 600,
    margin: 10,
    padding: 10,
    height: '100%',
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
  backButton: {
    paddingTop: 20,
    color: 'white',
    width: 'auto',
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 500,
    verticalAlign: 'middle',
    wordSpacing: '0px',
    [theme.breakpoints.down('md')]: {
      fontSize: '16px',
      textAlign: 'center',
    },
  },
  highlight: {
    color: theme.palette.pbr.primary,
  },
  flag: {
    height: 80,
  },
  flagWrapper: {
    height: 80,
  },
  countryName: {
    color: 'white',
    textAlign: 'center',
    fontSize: 18,
  },
  vs: {
    fontSize: 32,
    fontWeight: 700,
    fontStyle: 'italic',
    color: 'white',
    textAlign: 'center',
    width: 150,
  },
  date: {
    color: 'white',
    fontSize: 18,
    fontWeight: 700,
    textAlign: 'center',
  },
  button: {
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
    fontSize: 18,
    textTransform: 'none',
    [theme.breakpoints.down('sm')]: {
      fontSize: 16,
    },
  },

  buttonWrapper: {
    textAlign: 'center',
    width: 180,
  },
}));

export default function GameCard({ item, index }) {
  const classes = useStyles();
  const [betAmount, setBetAmount] = useState(0);
  const [userAddress, setUserAddress] = useState('');
  const [participants, setParticipants] = useState(0);
  const [actualCase, setActualCase] = useState(0);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    let userAddress = localStorage.getItem('userAddress');
    if (userAddress) {
      setUserAddress(userAddress);
    } else {
      setActualCase(3);
    }
  }, []);

  useEffect(() => {
    async function asyncFn() {
      const mid = index;
      const userAddress = '0x9D7117a07fca9F22911d379A9fd5118A5FA4F448';
      let totalBetAmount = await getTotalBetAmount(mid);
      let totalParticipants = await getTotalParticipants(mid);
      let betObject = await isBet(mid, userAddress);

      setBetAmount(parseInt(totalBetAmount));
      setParticipants(totalParticipants);

      if (parseInt(betObject.amountBet) > 0) {
        console.log('Already Bet');

        setActualCase(0);
      } else {
        // Check approve
        let approved = await checkApproved(userAddress);

        if (approved) {
          console.log('Approved');

          setActualCase(1);
        } else {
          console.log('Not Approved');

          setActualCase(2);
        }
      }
    }
    asyncFn();
  }, []);

  const approveFn = async () => {
    setLoading(true);
    const userAddress = '0x9D7117a07fca9F22911d379A9fd5118A5FA4F448';

    const response = await new Promise((resolve, reject) => {
      tokenConnection.methods
        .approve(constants.contractAddress, '999999999999999999999999999999999999')
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
          let approved = await checkApproved(userAddress);

          if (approved) {
            console.log('Approved');

            setActualCase(1);
          } else {
            console.log('Not Approved');

            setActualCase(2);
          }
          setLoading(false);
        });
    });
    console.log(response);
    return response;

    //let res = await approveAmount(userAddress).then((res) => {});
  };

  const betFn = async () => {
    console.log('Bet here');
  };

  const claimFn = async () => {
    console.log('Claim here');
  };
  return (
    <section>
      {actualCase === 3 ? (
        <div>Connect Wallet</div>
      ) : (
        <div className="d-flex justify-content-center">
          <div className={classes.card}>
            <div className="mt-3 mb-5">
              <p className={classes.date}>{item.date}</p>
              <div className="d-flex justify-content-center align-items-center">
                {' '}
                <div className={classes.flagWrapper}>
                  <img src={item.team1.image} className={classes.flag} />
                  <p className={classes.countryName}>1. {item.team1.name}</p>
                </div>{' '}
                <div>
                  <h6 className={classes.vs}>Vs</h6>
                </div>
                <div className={classes.flagWrapper}>
                  <img src={item.team2.image} className={classes.flag} />
                  <p className={classes.countryName}>2. {item.team2.name}</p>
                </div>{' '}
              </div>
            </div>{' '}
            <div className="d-flex flex-column justify-content-center align-items-center">
              {' '}
              <h4 className={classes.countryName}>Predict and Win</h4>
              <hr style={{ width: 100, backgroundColor: 'white', height: 1, marginTop: 0 }} />
            </div>
            {actualCase === 0 && (
              <div className="d-flex justify-content-center">
                <div className={classes.buttonWrapper}>
                  <Button variant="contained" color="primary" className={classes.button} onClick={claimFn}>
                    Claim Reward
                  </Button>
                </div>
              </div>
            )}
            {actualCase === 1 && (
              <div className="d-flex justify-content-center">
                <div className={classes.buttonWrapper}>
                  <Button variant="contained" className={classes.button} onClick={() => betFn(0)}>
                    Win
                  </Button>
                </div>
                <div className={classes.buttonWrapper}>
                  <Button variant="contained" className={classes.button} onClick={() => betFn(1)}>
                    Draw
                  </Button>
                </div>
                <div className={classes.buttonWrapper}>
                  <Button variant="contained" className={classes.button} onClick={() => betFn(2)}>
                    Win
                  </Button>
                </div>
              </div>
            )}
            {actualCase === 2 && (
              <div className="d-flex justify-content-center">
                <div className={classes.buttonWrapper}>
                  <Button variant="contained" className={classes.button} onClick={approveFn}>
                    Approve
                  </Button>
                </div>
              </div>
            )}
            <div className="mt-3">
              <p className={classes.countryName}>
                Total Participants: <strong>{participants}</strong>
              </p>
            </div>
            <div className="mt-3">
              <div className="d-flex justify-content-evenly align-items-center">
                <p className={classes.countryName}>
                  {item.team1.name}: <strong>{betAmount}</strong>
                </p>
                <p className={classes.countryName}>
                  Draw: <strong>{betAmount}</strong>
                </p>
                <p className={classes.countryName}>
                  {item.team2.name}: <strong>{betAmount} </strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
