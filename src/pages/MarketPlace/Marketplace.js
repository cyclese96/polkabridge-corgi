import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  card: {
    borderRadius: 7,
    borderBottom: '1px solid #bdbdbd',
    width: 600,
    margin: 10,
    padding: 10,
    height: '100%',
    border: '1px solid #ffffff',
    borderRadius: 7,
  },
}));

function Marketplace() {
  const classes = useStyles();

  return <div>MarketPlace</div>;
}
export default Marketplace;
