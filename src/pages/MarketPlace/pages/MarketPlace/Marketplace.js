import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TopCard from './Components/TopCard';
import ItemsSection from './Components/ItemsSection';
import TopArtist from './Components/TopArtist';

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
      <section>
        <TopCard />
        <ItemsSection />
        <TopArtist />
      </section>
    </div>
  );
}
export default Marketplace;
