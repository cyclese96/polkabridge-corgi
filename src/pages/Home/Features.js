import { makeStyles } from '@material-ui/core/styles';
import { AccountTree, CompareArrows, HowToVote, LocalFlorist, Receipt, ShutterSpeed } from '@material-ui/icons';
import Pulse from 'react-reveal/Pulse';

const useStyles = makeStyles((theme) => ({
  background: {
    padding: 80,
    backgroundColor: '#f7f8fb',
    height: '100%',
    [theme.breakpoints.down('sm')]: {
      padding: 10,
      paddingBottom: 50,
      paddingTop: 50,
      textAlign: 'center',
    },
  },
  heading: {
    color: theme.palette.pbr.textSecondary,
    textAlign: 'center',
    fontSize: 36,
    fontWeight: 600,
    verticalAlign: 'middle',
    wordSpacing: '0px',
  },
  para: {
    fontWeight: 400,
    verticalAlign: 'baseline',
    letterSpacing: '-0.8px',
    margin: 0,
    paddingTop: 10,
    paddingBottom: 10,
    textAlign: 'center',
    width: '50rem',
  },
  container: {
    paddingLeft: 80,
    paddingTop: 80,
  },
  highlight: {
    color: theme.palette.pbr.primary,
  },
  icon: {
    fontSize: 16,
    marginRight: 7,
    color: '#ffffff',
  },
  imageContainer: {
    boxShadow: '5px 5px 4px 5px #888888',
    borderRadius: '7px',
  },
  featureHeading: {
    color: theme.palette.pbr.textSecondary,
    textAlign: 'center',
    paddingTop: 10,
    fontSize: 20,
    fontWeight: 600,
    verticalAlign: 'middle',
    wordSpacing: '0px',
  },
  featureText: {
    fontWeight: 400,
    verticalAlign: 'middle',
    letterSpacing: '-0.8px',
    wordSpacing: '0px',
    paddingTop: 10,
    paddingBottom: 10,
    textAlign: 'center',
    fontSize: 16,
  },
  cicle: {
    height: '50px',
    width: '50px',
    backgroundColor: '#000000',
    color: 'yellow',
    fontSize: 48,
    size: 212,
  },
  column: {
    // marginRight: 15,
    flex: '33%',

    [theme.breakpoints.down('md')]: {
      flex: ' 50%',
    },
  },
  featureWrapper: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  image: {
    width: '60%',
    borderRadius: 10,
    [theme.breakpoints.down('md')]: {
      width: '100%',
    },
  },
}));

export default function Features() {
  const classes = useStyles();
  return (
    <div className={classes.background}>
      {' '}
      <div>
        <h6 className={classes.heading}>
          <strong className={classes.highlight}>CORGIB</strong> NFT Marketplace
        </h6>
        <div className="d-flex justify-content-center ">
          <p className={classes.para}>CORGIB MarketPlace - Where you can create, buy and sell meme NFT</p>
        </div>{' '}
      </div>
      <Pulse>

        <div className="text-center">
          {' '}
          <img src="/images/corgibnft.jpg" className={classes.image} />
        </div>
      </Pulse>
    </div>
  );
}
