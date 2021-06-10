import { Divider } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import SocialLinks from '../pages/Home/SocialLinks';

const useStyles = makeStyles((theme) => ({
  background: {
    padding: '20px 50px 10px 10px',
    height: '100%',
    backgroundColor: theme.palette.pbr.primary,
    [theme.breakpoints.down('sm')]: {
      padding: '20px 20px 20px 20px',
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
    width: 500,
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      fontWeight: 500,

      paddingTop: 5,
      paddingBottom: 5,
    },
  },

  highlight: {
    color: 'white',
  },

  icon: {
    fontSize: 16,
    marginRight: 7,
    color: '#ffffff',
  },
  copyright: {
    fontSize: 14,
    [theme.breakpoints.down('sm')]: {
      fontSize: 13,
    },
  },
}));
export default function BetFooter() {
  const classes = useStyles();

  return (
    <div className={classes.background}>
      <div className="text-center">
        <p className={classes.copyright}>
          Copyright 2021 <span className={classes.highlight}>CORGIB Of PolkaBridge</span>. All Rights Reserved.
        </p>
      </div>
    </div>
  );
}
