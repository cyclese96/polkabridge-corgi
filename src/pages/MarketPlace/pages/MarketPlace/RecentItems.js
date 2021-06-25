import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { ArrowBack } from '@material-ui/icons';
import ItemsList from '../../Components/ItemsList';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  background: {
    color: theme.palette.market.textPrimary,
    backgroundColor: theme.palette.market.primary,
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
  link: {
    color: theme.palette.market.textPrimary,
    '&:hover': {
      color: theme.palette.market.highlight,
    },
  },
  mainCard: {
    backgroundColor: 'white',
    height: 280,
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

    height: 240,
    width: 240,
    padding: 10,
    marginRight: 10,
    marginLeft: 10,
    borderRadius: 10,
  },
  bgImage: {
    backgroundImage: `url('https://hiseye.org/wp-content/uploads/2021/03/CryptoKitty.jpg')`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    padding: 10,
    height: 160,
    borderRadius: 10,
  },
  bgImage2: {
    backgroundImage: `url('https://miro.medium.com/max/2000/1*p44Lhxvf69Tz2ONl3Vfncw.png')`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    padding: 10,
    height: 160,
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

function RecentItems() {
  const classes = useStyles();

  return (
    <div className={classes.background}>
      <Link to="/market">
        {' '}
        <h2 className={classes.heading}>
          <ArrowBack style={{ marginRight: 10 }} />
          Recent Items
        </h2>
      </Link>
      <div>
        <ItemsList />
      </div>
    </div>
  );
}
export default RecentItems;
