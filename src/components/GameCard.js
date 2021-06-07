import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import TrendingUp from '@material-ui/icons/TrendingUp';
import EventNote from '@material-ui/icons/EventNote';
import { Button } from '@material-ui/core';

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
  buttonWin: {
    borderRadius: '10px',
    background: `linear-gradient(to bottom,#81c784, #2e7d32)`,
    lineHeight: '24px',
    verticalAlign: 'baseline',
    letterSpacing: '-1px',

    marginTop: 15,
    color: '#ffffff',
    padding: '12px 16px 12px 16px',
    fontWeight: 600,
    fontSize: 24,
    textTransform: 'none',
    [theme.breakpoints.down('sm')]: {
      fontSize: 18,
    },
  },
  buttonLose: {
    borderRadius: '10px',
    background: `linear-gradient(to bottom,#ef5350, #d32f2f)`,
    lineHeight: '24px',
    verticalAlign: 'baseline',
    letterSpacing: '-1px',

    marginTop: 15,
    color: '#ffffff',
    padding: '12px 16px 12px 16px',
    fontWeight: 600,
    fontSize: 24,
    textTransform: 'none',
    [theme.breakpoints.down('sm')]: {
      fontSize: 18,
    },
  },
  buttonDraw: {
    borderRadius: '10px',
    background: `linear-gradient(to bottom,#ffb74d, #f57c00)`,
    lineHeight: '24px',
    verticalAlign: 'baseline',
    letterSpacing: '-1px',

    marginTop: 15,
    color: '#ffffff',
    padding: '12px 16px 12px 16px',
    fontWeight: 600,
    fontSize: 24,
    textTransform: 'none',
    [theme.breakpoints.down('sm')]: {
      fontSize: 18,
    },
  },
  buttonWrapper: {
    textAlign: 'center',
    width: 140,
  },
}));

export default function GameCard() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <section>
      <div className="d-flex justify-content-center">
        <div className={classes.card}>
          <div className="mt-3 mb-5">
            <p className={classes.date}>12th June,2021</p>

            <div className="d-flex justify-content-center align-items-center">
              {' '}
              <div className={classes.flagWrapper}>
                <img src="https://www.countryflags.io/tr/shiny/64.png" className={classes.flag} />
                <p className={classes.countryName}>1. Italy</p>
              </div>{' '}
              <div>
                <h6 className={classes.vs}>Vs</h6>
              </div>
              <div className={classes.flagWrapper}>
                <img src="https://www.countryflags.io/it/shiny/64.png" className={classes.flag} />
                <p className={classes.countryName}>2. England</p>
              </div>{' '}
            </div>
          </div>{' '}
          <div>
            {' '}
            <p className={classes.countryName}>Predict and Win</p>
          </div>
          <div className="d-flex justify-content-center">
            <div className={classes.buttonWrapper}>
              <Button variant="contained" className={classes.buttonWin}>
                Win
              </Button>
            </div>
            <div className={classes.buttonWrapper}>
              <Button variant="contained" className={classes.buttonDraw}>
                Draw
              </Button>
            </div>
            <div className={classes.buttonWrapper}>
              <Button variant="contained" className={classes.buttonLose}>
                Win
              </Button>
            </div>
          </div>
          <div className="mt-3">
            <p className={classes.countryName}>
              Total Participants: <strong>5480</strong>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
