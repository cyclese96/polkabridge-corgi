import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  background: {
    color: theme.palette.market.textPrimary,
    padding: 30,
    width: '100%',
  },

  heading: {
    color: theme.palette.pbr.textPrimary,
    fontSize: 20,
    fontWeight: 600,
    letterSpacing: '-0.1px',
    verticalAlign: 'middle',
    wordSpacing: '0px',
    paddingBottom: 5,
    [theme.breakpoints.down('md')]: {
      fontSize: 16,
      width: 200,
    },
  },
  para: {
    color: theme.palette.market.textPrimary,
    fontWeight: 400,
    verticalAlign: 'baseline',
    letterSpacing: '-0.8px',
    width: 400,
    paddingBottom: 20,
    fontSize: 16,
    [theme.breakpoints.down('md')]: {
      fontSize: 14,
    },
  },
  textContainer: {
    padding: 20,
  },

  mainCard: {
    backgroundColor: 'white',
    height: '100%',
    padding: 15,
    borderRadius: 10,
    width: '100%',
    background: `linear-gradient(to right,#1C1656, #1C1656)`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',

    [theme.breakpoints.down('md')]: {
      flexDirection: 'column',
      justifyContent: 'start',
      height: '100%',
    },
  },
  nftCard: {
    backgroundColor: '#15134A',
    height: '100%',
    width: 340,
    padding: 10,
    marginRight: 10,
    marginLeft: 10,
    borderRadius: 10,

    filter: `drop-shadow(0 0 0.1rem #4a148c)`,
    [theme.breakpoints.down('md')]: {
      width: 240,
      height: 240,
      marginBottom: 10,
    },
  },
  bgImage: {
    backgroundImage: `url('https://i.redd.it/kv9ox6utnzs61.jpg')`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    padding: 10,
    height: 250,
    borderRadius: 10,
  },

  textBox: {
    paddingTop: 10,
    paddingLeft: 5,
  },
  cardText: {
    color: theme.palette.market.textPrimary,
    fontWeight: 400,
    verticalAlign: 'baseline',
    letterSpacing: '-0.8px',
    paddingBottom: 0,
    fontSize: 16,
    textAlign: 'left',
    [theme.breakpoints.down('md')]: {
      fontSize: 14,
    },
  },
}));

function ItemsList() {
  const classes = useStyles();

  return (
    <div className={classes.background}>
      <div className={classes.mainCard}>
        <div className="row">
          <div className="col-md-4">
            <div className="mb-3">
              <div className={classes.nftCard}>
                <div className={classes.bgImage}></div>
                <div className={classes.textBox}>
                  <h6 className={classes.cardText}>Tommy Kill Hell</h6>
                  <h6>
                    <strong>Carry Minati</strong>
                  </h6>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="mb-3">
              <div className={classes.nftCard}>
                <div className={classes.bgImage}></div>
                <div className={classes.textBox}>
                  <h6 className={classes.cardText}>Tommy Kill Hell</h6>
                  <h6>
                    <strong>Carry Minati</strong>
                  </h6>
                </div>
              </div>
            </div>
          </div>{' '}
          <div className="col-md-4">
            <div className="mb-3">
              <div className={classes.nftCard}>
                <div className={classes.bgImage}></div>
                <div className={classes.textBox}>
                  <h6 className={classes.cardText}>Tommy Kill Hell</h6>
                  <h6>
                    <strong>Carry Minati</strong>
                  </h6>
                </div>
              </div>
            </div>
          </div>{' '}
          <div className="col-md-4">
            <div className="mb-3">
              <div className={classes.nftCard}>
                <div className={classes.bgImage}></div>
                <div className={classes.textBox}>
                  <h6 className={classes.cardText}>Tommy Kill Hell</h6>
                  <h6>
                    <strong>Carry Minati</strong>
                  </h6>
                </div>
              </div>
            </div>
          </div>{' '}
          <div className="col-md-4">
            <div className="mb-3">
              <div className={classes.nftCard}>
                <div className={classes.bgImage}></div>
                <div className={classes.textBox}>
                  <h6 className={classes.cardText}>Tommy Kill Hell</h6>
                  <h6>
                    <strong>Carry Minati</strong>
                  </h6>
                </div>
              </div>
            </div>
          </div>{' '}
          <div className="col-md-4">
            <div className="mb-3">
              <div className={classes.nftCard}>
                <div className={classes.bgImage}></div>
                <div className={classes.textBox}>
                  <h6 className={classes.cardText}>Tommy Kill Hell</h6>
                  <h6>
                    <strong>Carry Minati</strong>
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ItemsList;
