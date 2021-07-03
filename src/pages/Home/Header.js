import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Pulse from 'react-reveal/Pulse';
import CustomButton from '../../common/CustomButton';
import { Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  header: {
    height: '100%',
    width: 'auto',
    background: `linear-gradient(0deg, rgba(255, 255, 255, 0.8), rgba(233, 233, 233, 1) ),url("https://img.freepik.com/free-vector/variety-cute-shapes-abstract-background_23-2148544989.jpg?size=626&ext=jpg&ga=GA1.2.1991903213.1616889600")`,
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
  },
  notice: {
    fontWeight: 400,
    verticalAlign: 'baseline',
    margin: 0,
    paddingBottom: 15,
    color: theme.palette.pbr.primary,
  },
  heading: {
    color: theme.palette.pbr.textSecondary,
    width: 'auto',
    textAlign: 'left',
    fontSize: 52,

    fontWeight: 600,
    verticalAlign: 'middle',
    wordSpacing: '0px',

    [theme.breakpoints.down('md')]: {
      fontSize: '32px',
      textAlign: 'center',
    },
  },
  headerContainer: {
    height: '100%',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    // flexWrap: "wrap",
    paddingTop: 100,
    paddingLeft: 100,
    paddingRight: 100,
    [theme.breakpoints.down('md')]: {
      paddingTop: 100,
      paddingLeft: 10,
      paddingRight: 10,
      flexDirection: 'column',
    },
    [theme.breakpoints.down('xs')]: {
      paddingTop: 100,
      paddingLeft: 10,
      paddingRight: 10,
      flexDirection: 'column',
    },
  },
  imageContainer: {
    width: 550,
    height: 'auto',

    [theme.breakpoints.down('xs')]: {
      width: 300,
      height: 'auto',
    },
  },
  textContainer: {
    maxWidth: 600,
    display: 'flex',
    flexDirection: 'column',
    marginLeft: 10,
    marginRight: 10,
    [theme.breakpoints.down('md')]: {
      alignItems: 'center',
    },
  },
  subheading: {
    paddingTop: 15,
    paddingBottom: 15,
    fontSize: 18,
    fontWeight: 400,
    fontColor: theme.palette.pbr.textLight,
    [theme.breakpoints.down('md')]: {
      textAlign: 'center',
    },
  },
  highlight: {
    color: theme.palette.pbr.primary,
  },
}));

export default function Header() {
  const classes = useStyles();
  return (
    <section>
      <div className={classes.header}>
        <div className={classes.headerContainer}>
          <Pulse>
            <img src="images/corgiparty.png" alt="" className={classes.imageContainer} />
          </Pulse>
          <div className={classes.textContainer}>
            <h5 className={classes.notice}>CORGIB Finance</h5>
            <h2 className={classes.heading}>The NFT MarketPlace for Meme coins</h2>
            <p className={classes.subheading}>
              CORGIB Finance is a fully decentralized, the first NFT MarketPlace for Meme tokens, powered by{' '}
              <strong className={classes.highlight}>PolkaBridge</strong>.
            </p>
            <div>
              <CustomButton
                title={'PancakeSwap'}
                link={
                  'https://exchange.pancakeswap.finance/#/swap?outputCurrency=0x1cfd6813a59d7b90c41dd5990ed99c3bf2eb8f55'
                }></CustomButton>
            </div>
            <div>
              <CustomButton
                title={'Join Staking'}
                link={
                  'https://stake.polkabridge.org/'
                }></CustomButton>
            </div>

          </div>
        </div>
      </div>
    </section >
  );
}
