import { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  AccountBalance,
  ChevronLeft,
  ChevronRight,
  CloudQueue,
  Description,
  GroupWork,
  LocalFlorist,
  SettingsEthernet,
  SwapHoriz,
  Timer,
} from '@material-ui/icons';
import { Fade } from 'react-reveal';

const useStyles = makeStyles((theme) => ({
  background: {
    padding: 80,
    // backgroundColor: '#F7F8FB',
    height: '100%',
    [theme.breakpoints.down('sm')]: {
      height: '100%',
      padding: 0,
      paddingBottom: 50,
      paddingTop: 50,
    },
  },
  heading: {
    color: theme.palette.pbr.textSecondary,
    textAlign: 'center',
    fontSize: 36,
    fontWeight: 600,
    verticalAlign: 'middle',
    wordSpacing: '0px',
    [theme.breakpoints.down('sm')]: {
      fontSize: 28,
    },
  },
  subheading: {
    fontWeight: 400,
    verticalAlign: 'baseline',
    letterSpacing: '-0.8px',
    margin: 0,
    paddingTop: 10,
    paddingBottom: 10,
    textAlign: 'center',
    [theme.breakpoints.down('sm')]: {
      fontSize: 16,
    },
  },
  para: {
    fontWeight: 400,
    verticalAlign: 'baseline',
    letterSpacing: '-0.8px',
    margin: 0,
    paddingTop: 10,
    paddingBottom: 10,
    textAlign: 'left',
    [theme.breakpoints.down('sm')]: {
      fontSize: 16,
    },
  },

  highlight: {
    color: theme.palette.pbr.primary,
  },
  title: {
    fontWeight: 700,
    verticalAlign: 'baseline',
    letterSpacing: '-0.8px',
    margin: 0,
    textAlign: 'left',
    fontSize: 20,
    color: theme.palette.pbr.primary,
  },
  icon: {
    fontSize: 16,
    marginRight: 7,
    color: '#ffffff',
  },
  focusContainer: {
    border: '1px solid #888888',
    padding: 10,
    borderRadius: '7px',
    marginBottom: 10,
  },
  imageContainer: {
    width: '100%',
    [theme.breakpoints.down('sm')]: {
      marginTop: 30,
      width: '100%',
    },
  },
  roadmapWrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    [theme.breakpoints.down('sm')]: {
      padding: 30,
      width: '100%',
    },
  },
  roadmapContainer: {
    padding: 30,
    marginTop: -80,
    backgroundColor: '#f4f4f4',
    borderRadius: 10,
    width: 700,
    [theme.breakpoints.down('sm')]: {
      padding: 30,
      width: '100%',
    },
  },
  cardHeader: {
    background: `linear-gradient(to bottom,#D9047C, #BF1088)`,

    borderRadius: 10,
    width: 850,
    height: 200,
  },
}));
export default function Roadmap(props) {
  const classes = useStyles();

  return (
    <div className={classes.background}>
      <div>
        <h6 className={classes.heading}>
          Corbig <strong className={classes.highlight}>RoadMap</strong>
        </h6>

        <p className={classes.subheading}>Our Corbig Walk (Q2/2021).</p>
      </div>
      <Fade top>
        <div className="d-flex flex-column align-items-center">
          <div className={classes.cardHeader}></div>
          <div className={classes.roadmapContainer}>
            <h5>
              <strong>Updates</strong>
            </h5>
            <hr style={{ width: 100, height: 2 }} />
            <div className={classes.roadmapWrapper}>
              <div className={classes.focusContainer} style={{ backgroundColor: '#fcfcfc' }}>
                <h6 className={classes.title}>Token Fair Launch</h6>
                <p className={classes.para}>
                  CORBIG bep20 token available at PANCAKESWAP DEX Initial Liquidity provided.
                </p>
              </div>
              <div className={classes.focusContainer} style={{ backgroundColor: '#fcfcfc' }}>
                <h6 className={classes.title}>Token Fair Launch</h6>
                <p className={classes.para}>
                  CORBIG bep20 token available at PANCAKESWAP DEX Initial Liquidity provided.
                </p>
              </div>
              <div className={classes.focusContainer} style={{ backgroundColor: '#fcfcfc' }}>
                <h6 className={classes.title}>Token Fair Launch</h6>
                <p className={classes.para}>
                  CORBIG bep20 token available at PANCAKESWAP DEX Initial Liquidity provided.
                </p>
              </div>
              <div className={classes.focusContainer} style={{ backgroundColor: '#fcfcfc' }}>
                <h6 className={classes.title}>Token Fair Launch</h6>
                <p className={classes.para}>
                  CORBIG bep20 token available at PANCAKESWAP DEX Initial Liquidity provided.
                </p>
              </div>
              <div className={classes.focusContainer} style={{ backgroundColor: '#fcfcfc' }}>
                <h6 className={classes.title}>Token Fair Launch</h6>
                <p className={classes.para}>
                  CORBIG bep20 token available at PANCAKESWAP DEX Initial Liquidity provided.
                </p>
              </div>
              <div className={classes.focusContainer} style={{ backgroundColor: '#fcfcfc' }}>
                <h6 className={classes.title}>Token Fair Launch</h6>
                <p className={classes.para}>
                  CORBIG bep20 token available at PANCAKESWAP DEX Initial Liquidity provided.
                </p>
              </div>
              <div className={classes.focusContainer} style={{ backgroundColor: '#fcfcfc' }}>
                <h6 className={classes.title}>Token Fair Launch</h6>
                <p className={classes.para}>
                  CORBIG bep20 token available at PANCAKESWAP DEX Initial Liquidity provided.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Fade>
    </div>
  );
}
