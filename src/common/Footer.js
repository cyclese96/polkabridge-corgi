import { Divider } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import SocialLinks from '../pages/Home/SocialLinks';

const useStyles = makeStyles((theme) => ({
  background: {
    padding: '50px 50px 10px 50px',
    height: '100%',
    backgroundColor: theme.palette.pbr.primary,
  },

  para: {
    fontWeight: 500,
    verticalAlign: 'baseline',
    letterSpacing: '-0.8px',
    margin: 0,
    paddingTop: 10,
    paddingBottom: 10,
    textAlign: 'left',
    width: 500,
  },

  highlight: {
    color: 'white',
  },

  icon: {
    fontSize: 16,
    marginRight: 7,
    color: '#ffffff',
  },
}));
export default function Footer() {
  const classes = useStyles();

  return (
    <div className={classes.background}>
      <div className="container ">
        <div>
          <h3 style={{ textAlign: 'left', color: 'white' }}>
            <img src="corgi.png" alt="logo" height="40px" /> CORGI
          </h3>
          <p className={classes.para}>
            Sanshu Inu Finance is a fully decentralized, transactions network where all decisions are made by the
            community.
          </p>
        </div>
      </div>
      <SocialLinks /> <hr style={{ color: '#000000', height: 1 }} />
      <div className="text-center">
        <p>
          Copyright 2021 <span className={classes.highlight}>Corgi Finance</span>. All Rights Reserved.
        </p>
      </div>
    </div>
  );
}
