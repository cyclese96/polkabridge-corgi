import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import { ArrowBack, Edit } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  background: {
    backgroundColor: theme.palette.market.primary,
    color: theme.palette.market.textPrimary,
    minHeight: '100vh',

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
      fontSize: 18,
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
  actionButton: {
    color: 'white',
    textTransform: 'none',
    borderRadius: '12px',
    padding: '8px 16px 8px 16px',
    fontWeight: 500,
    marginRight: 12,
    background: `linear-gradient(to right,#7b1fa2, #4a148c)`,
    fontSize: 14,
    filter: `drop-shadow(0 0 0.1rem #4a148c)`,
  },
  normalButton: {
    color: 'white',
    textTransform: 'none',
    borderRadius: '12px',
    padding: '8px 16px 8px 16px',
    fontWeight: 500,
    background: `linear-gradient(to right,#3f51b5, #1a237e)`,
    fontSize: 14,
    filter: `drop-shadow(0 0 0.1rem #1a237e)`,
  },
  viewAll: {
    color: theme.palette.market.textPrimary,
    fontWeight: 400,
    verticalAlign: 'baseline',
    letterSpacing: '-0.8px',
    width: 400,
    paddingBottom: 20,
    fontSize: 16,
    textAlign: 'right',
    [theme.breakpoints.down('md')]: {
      fontSize: 14,
    },
  },
  mainCard: {
    backgroundColor: 'white',
    height: 500,
    padding: 15,
    borderRadius: 30,
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
    width: 600,
    padding: 10,
    marginRight: 10,
    marginLeft: 10,
    marginBottom: 20,
    borderRadius: 10,
  },
  bgImage: {
    backgroundImage: `url('https://hiseye.org/wp-content/uploads/2021/03/CryptoKitty.jpg')`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    padding: 10,
    height: 120,
    width: 120,
    borderRadius: '45%',
    marginBottom: 20,
  },

  textBox: {
    textAlign: 'center',
  },
  cardText: {
    color: theme.palette.market.textPrimary,
    fontWeight: 500,
    verticalAlign: 'baseline',
    letterSpacing: '-0.8px',
    paddingBottom: 0,
    fontSize: 16,
    textAlign: 'center',

    [theme.breakpoints.down('md')]: {
      fontSize: 14,
    },
  },
}));

function Profile() {
  const classes = useStyles();

  return (
    <div className={classes.background}>
      <div className="row">
        <div className="col-md-12">
          <h2 className={classes.heading}>
            <ArrowBack />
            My Profile
          </h2>
          <div className={classes.mainCard}>
            <div>
              <div className={classes.nftCard}>
                <div className="d-flex flex-column justify-content-center">
                  <div className="text-center">
                    <img
                      className={classes.bgImage}
                      alt="profile"
                      src="https://hiseye.org/wp-content/uploads/2021/03/CryptoKitty.jpg"
                    />
                    <div className={classes.textBox}>
                      <h6 className={classes.cardText}>
                        <strong>Carry Minati</strong>
                      </h6>
                      <h6 className={classes.cardText}>0x9D7117a07fca9F22911d379A9fd5118A5FA4F448</h6>
                    </div>
                  </div>
                </div>
                <div className="text-center mt-3">
                  <Button className={classes.normalButton}>
                    <Edit style={{ fontSize: 16 }} />
                    Edit Profile
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Profile;
