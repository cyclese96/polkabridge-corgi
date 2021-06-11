import { useState, useEffect } from 'react';
import { Button, Divider, TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import contractConnection from './../utils/connection';
import web3 from './../web';
import Loader from './Loader';
import { connect } from 'react-redux';
import { transactionHit } from './../actions/authActions';
import { Replay } from '@material-ui/icons';

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
  PriceButton: {
    borderRadius: 10,
    border: '1px solid #1565c0',
    padding: 0,
    paddingTop: 2,
    paddingBottom: 2,
    marginLeft: 5,
    marginRight: 5,
    fontSize: 12,
    width: 60,
    [theme.breakpoints.down('md')]: {
      padding: 0,
      paddingTop: 2,
      paddingBottom: 2,
      marginLeft: 5,
      marginRight: 5,
      paddingLeft: 10,
      paddingRight: 10,
      width: 44,
    },
  },
  title: {
    verticalAlign: 'baseline',
    textAlign: 'left',
    color: 'black',
    fontWeight: 600,
    letterSpacing: 0.9,
    fontSize: 22,
    lineHeight: '40px',
  },
  label: {
    verticalAlign: 'baseline',
    textAlign: 'left',
    color: theme.palette.pbr.primary,
    fontWeight: 500,
    letterSpacing: 0.5,
    fontSize: 18,
  },
  menuItem: {
    verticalAlign: 'baseline',
    textAlign: 'left',
    color: 'black',
    fontFamily: 'Poppins',
    fontWeight: 400,
    fontSize: 14,
  },
  icon: {
    color: 'black',
  },
  iconWrapper: {
    border: '1px solid #e5e5e5',
    borderRadius: '50%',
  },
  buttonProceed: {
    color: 'white',
    marginTop: 20,
    backgroundColor: 'white',
    textTransform: 'none',
    borderRadius: '100px',
    padding: '12px 16px 12px 16px',
    fontWeight: 500,
    background: `linear-gradient(to bottom,#D9047C, #BF1088)`,
    fontSize: 16,
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

  icon: {
    fontSize: 16,
    marginRight: 7,
    color: '#ffffff',
  },
  textField: {
    color: 'white',
    border: '1px solid #ffffff',
    textAlign: 'left',
    paddingTop: 5,
    paddingBottom: 5,
    fontSize: 14,
    fontWeight: 400,
  },
}));

function BetForm({ index, choice, transactionHit, stopPopupClicking }) {
  const classes = useStyles();
  const [actualCase, setActualCase] = useState(0);
  const [amount, setAmount] = useState(0);
  const [error, setError] = useState('Enter CORGIB amount in billions Min: 2B and Max: 100B');
  const [errorFlag, setErrorFlag] = useState(false);

  const changeAmount = (value) => {
    if (value > 100 || value < 2) {
      setAmount(value);

      setError('Incorrect amount - Amount range 2B to 100B');
      setErrorFlag(true);
    } else {
      setError('Enter CORGIB amount in billions Min: 1B and Max: 100B');
      setErrorFlag(false);

      setAmount(value);
    }
  };
  const submitForm = async () => {
    //Calling smart contract function.
    //console.log('Bet here');
    stopPopupClicking(true);
    const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
    let userAddress = accounts[0];
    let mid = index;
    let betChoice = choice;
    let betAmount = web3.utils.toWei((parseInt(amount) * 1000000000).toString(), 'ether');
    //console.log(mid, betChoice, betAmount);
    const response = await new Promise((resolve, reject) => {
      contractConnection.methods
        .bet(mid, betChoice, betAmount)
        .send({ from: userAddress }, function (error, transactionHash) {
          if (transactionHash) {
            //console.log('1. Submitted by user!');
            setActualCase(2);
            resolve(transactionHash);
          } else {
            //console.log('1. Rejected by user!');
            stopPopupClicking(false);
            setActualCase(1);
            reject();
          }
        })
        .on('receipt', async function (receipt) {
          //console.log('2. Transaction successful');
          setActualCase(3);
          window.location.reload();
        })
        .on('error', function (error) {
          //console.log('2. Transaction failed');
          setActualCase(4);
        });
    });
    //console.log(response);
    return response;
  };

  return (
    <div className={classes.card}>
      <div className="container text-center">
        <div className="d-flex justify-content-start align-items-center">
          <h5 className={classes.title}>Predict and Win</h5>
          <div style={{ paddingLeft: 10, marginTop: -10 }}>
            {' '}
            <img src="images/soccer-ball.png" height="25px" />
          </div>
        </div>{' '}
        <Divider style={{ backgroundColor: 'black' }} />
        {actualCase === 0 && (
          <div>
            <div className="p-2 mt-3 float-left">
              <TextField
                label={<p className={classes.label}>Amount</p>}
                value={amount}
                type="number"
                //   InputProps={{ inputProps: { min: 1, max: 100 } }}
                placeholder="Enter Amount in Billions"
                className={classes.textField}
                onChange={(e) => changeAmount(e.target.value)}
                fullWidth
                error={errorFlag}
                helperText={error}
              />
              <div className="d-flex justify-content-between align-items-center">
                <div className="text-center">
                  <button className={classes.PriceButton} onClick={() => setAmount(2)}>
                    2B
                  </button>
                </div>
                <div className="text-center">
                  <button className={classes.PriceButton} onClick={() => setAmount(5)}>
                    5B
                  </button>
                </div>
                <div className="text-center">
                  <button className={classes.PriceButton} onClick={() => setAmount(10)}>
                    10B
                  </button>
                </div>
                <div className="text-center">
                  <button className={classes.PriceButton} onClick={() => setAmount(20)}>
                    20B
                  </button>
                </div>
                <div className="text-center">
                  <button className={classes.PriceButton} onClick={() => setAmount(50)}>
                    50B
                  </button>
                </div>
                <div className="text-center">
                  <button className={classes.PriceButton} onClick={() => setAmount(100)}>
                    100B
                  </button>
                </div>
              </div>
              <p></p>
            </div>
            <div>
              <Button variant="contained" className={classes.buttonProceed} onClick={submitForm}>
                Submit Bet
              </Button>
            </div>
          </div>
        )}
        {actualCase === 1 && (
          <div>
            <div className="text-center my-5">
              <img src="https://icon-library.com/images/17c52fbb9e.svg.svg" height="100px" />
            </div>
            <h4 className="text-center">Transaction Rejected</h4>
            <h6 className="text-center">Please Reload</h6>
            <Button variant="contained" className={classes.buttonReload} onClick={() => window.location.reload()}>
              <Replay />
              Reload
            </Button>
          </div>
        )}
        {actualCase === 2 && (
          <div>
            <div className="text-center my-5">
              <img src="https://www.freeiconspng.com/thumbs/success-icon/success-icon-10.png" height="100px" />
            </div>
            <h4 className="text-center">Transaction Submitted!</h4>
          </div>
        )}
        {actualCase === 3 && (
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
        {actualCase === 4 && (
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
  );
}

const mapStateToProps = (state) => ({
  transaction: state.auth.transaction,
  user: state.auth.user,
  authenticated: state.auth.authenticated,
});

const mapDispatchToProps = { transactionHit };

export default connect(mapStateToProps, mapDispatchToProps)(BetForm);
