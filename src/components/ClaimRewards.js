import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useEffect, useState } from 'react';
import { getMatchInfo } from './../actions/SmartActions';

const useStyles = makeStyles((theme) => ({
  button: {
    paddingRight: '10px',
    borderRadius: '10px',
    background: `linear-gradient(to bottom,#D9047C, #BF1088)`,
    lineHeight: '24px',
    verticalAlign: 'baseline',
    letterSpacing: '-1px',
    margin: 0,
    marginTop: 5,
    color: '#ffffff',
    padding: '12px 16px 12px 16px',
    fontWeight: 600,
    fontSize: '1.1vw',
    textTransform: 'none',
    [theme.breakpoints.down('sm')]: {
      fontSize: 18,
    },
  },
}));

export default function ClaimRewards({ mid }) {
  const classes = useStyles();
  const [matchInfo, setMatchInfo] = useState({});

  useEffect(() => {
    async function callMatchInfo() {
      console.log('Use effect');
      let matchInfo = 10;
      //let matchInfo = await getMatchInfo(mid);

      console.log(matchInfo);
    }
    callMatchInfo();
  }, []);
  const claimFn = async () => {
    console.log('Claim here');
  };
  return (
    <div className="text-center">
      <Button variant="contained" color="primary" className={classes.button} onClick={claimFn}>
        Claim Rewards
      </Button>
    </div>
  );
}
