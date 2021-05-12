import { makeStyles } from '@material-ui/core/styles';
import { Fade } from 'react-reveal';

const useStyles = makeStyles((theme) => ({
  background: {
    padding: 80,
    // backgroundColor: '#F7F8FB',
    height: '100%',
    [theme.breakpoints.down('sm')]: {
      height: '100%',
      padding: 0,
      paddingBottom: 50,
      paddingTop: 50,
    },
  },
  heading: {
    color: theme.palette.pbr.textSecondary,
    textAlign: 'left',
    fontSize: 36,
    fontWeight: 600,
    verticalAlign: 'middle',
    wordSpacing: '0px',
    [theme.breakpoints.down('sm')]: {
      fontSize: 28,
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
    [theme.breakpoints.down('sm')]: {
      fontSize: 16,
    },
  },

  highlight: {
    color: theme.palette.pbr.primary,
  },
  title: {
    fontWeight: 700,
    verticalAlign: 'baseline',
    letterSpacing: '-0.8px',
    margin: 0,
    textAlign: 'left',
    fontSize: 20,
    color: theme.palette.pbr.primary,
  },
  icon: {
    fontSize: 16,
    marginRight: 7,
    color: '#ffffff',
  },
  focusContainer: {
    border: '1px solid #888888',
    padding: 10,
    borderRadius: '7px',
    marginBottom: 10,
  },
  imageContainer: {
    width: '100%',
    [theme.breakpoints.down('sm')]: {
      marginTop: 30,
      width: '100%',
    },
  },
}));
export default function Tokenomics() {
  const classes = useStyles();

  return (
    <div className={classes.background}>
      <div className="container-fluid">
        <div className="row flex-column-reverse flex-md-row">
          <div className="col-md-6">
            <Fade left>
              <div className="mt-1">
                <img src="images/tokenomics.png" alt="tokenomics" className={classes.imageContainer} />
              </div>
            </Fade>
          </div>
          <div className="col-md-6">
            <Fade right>
              <div className="mb-5">
                <h4 className={classes.heading}>
                  <img src="corgi.png" height="40px" /> <strong className={classes.highlight}>Tokenomics</strong> &
                  Locking
                </h4>
              </div>
              <div className={classes.focusContainer}>
                <h6 className={classes.title}>30% - Airdrop</h6>
                <p className={classes.para}>
                  30% of the total token will be distrubuted through airdrop campaign, scheduled from 13-18 May.
                </p>
              </div>
              <div className={classes.focusContainer}>
                <h6 className={classes.title}>20% - Pancakeswap Liquidity</h6>
                <p className={classes.para}>20% of the total token will be used to provide liquidity at Pancakeswap.</p>
              </div>
              <div className={classes.focusContainer}>
                <h6 className={classes.title}>45% - Reserve Burning</h6>
                <p className={classes.para}>
                  45% of the total token will be reserved for burning event with schedule of 1% per day.
                </p>
              </div>
              <div className={classes.focusContainer}>
                <h6 className={classes.title}>5% - Team</h6>
                <p className={classes.para}>
                  5% of the total token will be reserved for the team with vesting of 1% per 100 days.
                </p>
              </div>
            </Fade>
          </div>
        </div>
      </div>
    </div>
  );
}
