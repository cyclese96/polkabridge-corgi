import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Slide, Dialog, Backdrop } from '@material-ui/core';
import {
  getTotalBetAmount,
  getTotalBetAmountByResult,
  getTotalParticipants,
  isBet,
  checkApproved,
  approveAmount,
} from './../actions/SmartActions';
import tokenConnection from './../utils/tokenConnection';
import contractConnection from './../utils/connection';
import constants from './../utils/constants';
import BetPopup from './BetPopup';
import Loader from './Loader';
import web3 from './../web';
import ClaimRewards from './ClaimRewards';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

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

  const [teamBetAmounts, setTeamBetAmounts] = useState({ team1: 0, draw: 0, team2: 0 });
  const [actualCase, setActualCase] = useState(0);
  const [loading, setLoading] = useState(false);
  const [popup, setPopup] = useState(false);
  const [choice, setChoice] = useState(0);

  const togglePopup = (value, choice) => {
    console.log(value, choice);
    setPopup(value);
    setChoice(choice);
  };

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
      //Get accounts
      const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
      let userAddress = accounts[0];
      let totalBetAmount = await getTotalBetAmount(mid);
      let betAmount1 = await getTotalBetAmountByResult(mid, 1);
      let betAmount2 = await getTotalBetAmountByResult(mid, 2);
      let betAmount3 = await getTotalBetAmountByResult(mid, 3);
      let betAmountTemp1 = web3.utils.fromWei(betAmount1.toString(), 'ether');
      let betAmountTemp2 = web3.utils.fromWei(betAmount2.toString(), 'ether');
      let betAmountTemp3 = web3.utils.fromWei(betAmount3.toString(), 'ether');

      let teamAmount = {
        team1: betAmountTemp1 / 1000000000,
        draw: betAmountTemp2 / 1000000000,
        team2: betAmountTemp3 / 1000000000,
      };
      setTeamBetAmounts(teamAmount);
      console.log(teamAmount);
      let totalParticipants = await getTotalParticipants(mid);
      let betObject = await isBet(mid, userAddress);

      setBetAmount(parseInt(totalBetAmount));
      setParticipants(totalParticipants);
      if (parseInt(betObject.amountBet) > 0) {
        console.log('Already Bet');
        setActualCase(1);
      } else {
        // Check approve
        let approved = await checkApproved(userAddress);

        if (approved) {
          console.log('Approved');
          setActualCase(3);
        } else {
          console.log('Not Approved');
          setActualCase(2);
        }
      }
    }
    asyncFn();
  }, [localStorage.getItem('userAddress')]);

  const approveFn = async () => {
    setLoading(true);
    const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
    let userAddress = accounts[0];
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
            setActualCase(3);
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

  return (
    <section>
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
              <Loader />
            </div>
          )}
          {actualCase === 1 && (
            <div className="d-flex justify-content-center">
              <ClaimRewards mid={index} />
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
          {actualCase === 3 && (
            <div className="d-flex justify-content-center">
              <div className={classes.buttonWrapper}>
                <Button variant="contained" className={classes.button} onClick={() => togglePopup(true, 1)}>
                  Win
                </Button>
              </div>
              <div className={classes.buttonWrapper}>
                <Button variant="contained" className={classes.button} onClick={() => togglePopup(true, 2)}>
                  Draw
                </Button>
              </div>
              <div className={classes.buttonWrapper}>
                <Button variant="contained" className={classes.button} onClick={() => togglePopup(true, 3)}>
                  Win
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
                {item.team1.name}: <strong>{teamBetAmounts.team1}B</strong>
              </p>
              <p className={classes.countryName}>
                Draw: <strong>{teamBetAmounts.draw}B</strong>
              </p>
              <p className={classes.countryName}>
                {item.team2.name}: <strong>{teamBetAmounts.team2}B </strong>
              </p>
            </div>
          </div>
        </div>
      </div>
      <Dialog
        className={classes.modal}
        open={popup}
        TransitionComponent={Transition}
        keepMounted
        onClose={() => togglePopup(false)}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}>
        <div style={{ backgroundColor: 'black' }}>
          <BetPopup index={index} choice={choice} />
        </div>
      </Dialog>{' '}
    </section>
  );
}
