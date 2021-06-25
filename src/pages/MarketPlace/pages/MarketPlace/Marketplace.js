import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MarketAppbar from '../../Common/Appbar';
import TopCard from '../../Components/TopCard';
import FeaturedItems from '../../Components/FeaturedItems';
import TopArtist from '../../Components/TopArtist';

const useStyles = makeStyles((theme) => ({
  background: {
    backgroundColor: theme.palette.market.primary,
    color: theme.palette.market.textPrimary,
    minHeight: '100vh',
  },
}));

function Marketplace() {
  const classes = useStyles();

  return (
    <div className={classes.background}>
      <MarketAppbar />
      <section>
        <TopCard />
        <FeaturedItems />
        <TopArtist />
      </section>
    </div>
  );
}
export default Marketplace;
