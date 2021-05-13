import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Fade } from 'react-reveal';
import CustomButton from '../../common/CustomButton';
import { Link } from 'react-scroll';

const useStyles = makeStyles((theme) => ({
  background: {
    padding: 120,
    height: '100%',

    [theme.breakpoints.down('sm')]: {
      padding: 10,
      paddingBottom: 35,
      paddingTop: 35,
    },
  },

  heading: {
    color: theme.palette.pbr.textSecondary,
    fontSize: 36,
    fontWeight: 600,
    verticalAlign: 'middle',
    wordSpacing: '0px',
    paddingBottom: 5,
    [theme.breakpoints.down('sm')]: {
      fontSize: 28,
    },
  },
  para: {
    fontWeight: 400,
    verticalAlign: 'baseline',
    letterSpacing: '-0.8px',
    margin: 0,
    paddingBottom: 20,
    fontSize: 18,
    [theme.breakpoints.down('sm')]: {
      fontSize: 16,
    },
  },

  highlight: {
    color: theme.palette.pbr.primary,
  },
  button: {
    borderRadius: '50px',
    background: `linear-gradient(to bottom,#D9047C, #BF1088)`,
    lineHeight: '24px',
    verticalAlign: 'baseline',
    letterSpacing: '-0.8px',
    margin: 0,
    marginTop: 15,
    color: '#ffffff',
    padding: '15px 30px 15px 30px',
    fontWeight: 600,
    fontSize: 14,
  },
  icon: {
    fontSize: 16,
    marginRight: 7,
    color: '#ffffff',
  },
  title: {
    fontWeight: 500,
    verticalAlign: 'baseline',
    letterSpacing: '-0.8px',
    margin: 0,
    textAlign: 'left',
    fontSize: 22,
    [theme.breakpoints.down('sm')]: {
      fontSize: 20,
    },
  },
  imageContainer: {
    width: 400,
    height: 'auto',
    paddingLeft: 10,
    paddingRight: 10,
    [theme.breakpoints.down('sm')]: {
      marginTop: 30,
      height: '100%',
    },
    [theme.breakpoints.down('xs')]: {
      width: 300,
      height: 'auto',
    },
  },
  focusContainer: {
    border: '1px solid #888888',
    padding: 10,
    width: '100%',
    borderRadius: '7px',
    marginRight: 10,
    marginBottom: 10,
    height: 110,
    [theme.breakpoints.down('sm')]: {
      height: 'auto',
    },
  },
  textContainer: {
    maxWidth: 500,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'start',
    justifyContent: 'center',
    height: '100%',
    width: '100%',
    marginLeft: 10,
    marginRight: 10,
    [theme.breakpoints.down('xs')]: {
      marginTop: 100,
      marginLeft: 30,
      // alignItems: "center",
    },
  },
  number: {
    width: 45,
    height: 45,
    borderRadius: 10,
    backgroundColor: theme.palette.pbr.primary,
    color: '#f9f9f9',
    textAlign: 'center',
    verticalAlign: 'baseline',
    paddingTop: 5,
    marginBottom: 20,
  },
  buttonMain: {
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
export default function About() {
  const classes = useStyles();

  return (
    <div className={classes.background}>
      <div className="container" style={{ minHeight: 500 }}>
        {' '}
        <div className="row">
          <div className="col-md-6">
            {' '}
            <Fade left>
              <h3 className={classes.number}>1</h3>
              <h6 className={classes.heading}>
                What is <strong className={classes.highlight}>CORGIB?</strong>
              </h6>
              <p className={classes.para}>
                CORGIB is not just a Meme coin, but also an NFT Marketplace where users can create NFT memes and trade
                on the Marketplace.
              </p>
              <p>
                CORGIB is a community product of{' '}
                <a href="https://polkabridge.org" target="_blank">
                  PolkaBridge
                </a>
                , fairlaunch and bring value to PBR investors.
              </p>
              <Link activeClass="active" to={'tokenomics'}>
                <Button variant="contained" className={classes.buttonMain}>
                  Find out more
                </Button>
              </Link>
            </Fade>
          </div>
          <div className="col-md-6">
            {' '}
            <Fade right>
              <div>
                <img src="images/corgibpolkabridge.png" alt="explain" className={classes.imageContainer} />
              </div>
            </Fade>
          </div>
        </div>
      </div>
      <div className="container" style={{ minHeight: 500 }}>
        {' '}
        <div className="row">
          <div className="col-md-6">
            {' '}
            <Fade left>
              <div>
                <img src="/images/why.png" alt="explain" className={classes.imageContainer} />
              </div>
            </Fade>
          </div>
          <div className="col-md-6">
            {' '}
            <Fade right>
              <h3 className={classes.number}>2</h3>
              <h6 className={classes.heading}>
                Why choose <strong className={classes.highlight}>CORGIB?</strong>
              </h6>
              <p className={classes.para}>
                CORGIB is the first NFT MarketPlace for Meme tokens, had a fair launch and an exciting roadmap.
              </p>
              <Link activeClass="active" to={'roadmap'}>
                <Button variant="contained" className={classes.buttonMain}>
                  View our roadmap
                </Button>
              </Link>
            </Fade>
          </div>
        </div>
      </div>
    </div>
  );
}
