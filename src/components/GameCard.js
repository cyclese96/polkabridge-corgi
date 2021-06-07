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
  buttonWin: {
    borderRadius: '30px',
    background: `linear-gradient(to bottom,#81c784, #2e7d32)`,
    lineHeight: '24px',
    verticalAlign: 'baseline',
    letterSpacing: '-1px',

    marginTop: 15,
    color: '#ffffff',
    padding: '12px 16px 12px 16px',
    fontWeight: 600,
    fontSize: 20,
    textTransform: 'none',
    [theme.breakpoints.down('sm')]: {
      fontSize: 16,
    },
  },
  buttonLose: {
    borderRadius: '30px',
    background: `linear-gradient(to bottom,#ef5350, #d32f2f)`,
    lineHeight: '24px',
    verticalAlign: 'baseline',
    letterSpacing: '-1px',

    marginTop: 15,
    color: '#ffffff',
    padding: '12px 16px 12px 16px',
    fontWeight: 600,
    fontSize: 20,
    textTransform: 'none',
    [theme.breakpoints.down('sm')]: {
      fontSize: 16,
    },
  },
  buttonDraw: {
    borderRadius: '30px',
    background: `linear-gradient(to bottom,#ffb74d, #f57c00)`,
    lineHeight: '24px',
    verticalAlign: 'baseline',
    letterSpacing: '-1px',

    marginTop: 15,
    color: '#ffffff',
    padding: '12px 16px 12px 16px',
    fontWeight: 600,
    fontSize: 20,
    textTransform: 'none',
    [theme.breakpoints.down('sm')]: {
      fontSize: 16,
    },
  },
  buttonWrapper: {
    textAlign: 'center',
    width: 140,
  },
}));

export default function GameCard({ item }) {
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
