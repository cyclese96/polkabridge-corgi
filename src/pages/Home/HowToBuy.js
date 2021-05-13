import { makeStyles } from '@material-ui/core/styles';
import { Fade } from 'react-reveal';

const useStyles = makeStyles((theme) => ({
  background: {
    padding: 80,
    height: '100%',
    backgroundColor: '#F4F4F4',
    [theme.breakpoints.down('sm')]: {
      height: '100%',
      padding: 0,
      paddingBottom: 50,
      paddingTop: 50,
    },
  },
  heading: {
    color: theme.palette.pbr.textSecondary,
    textAlign: 'center',
    fontSize: 36,
    fontWeight: 600,
    verticalAlign: 'middle',
    wordSpacing: '0px',
    [theme.breakpoints.down('sm')]: {
      fontSize: 28,
    },
  },
  highlight: {
    color: theme.palette.pbr.primary,
  },
  imageContainer: {
    width: 120,
    [theme.breakpoints.down('sm')]: {
      marginTop: 30,
      width: '100%',
    },
  },
  focusContainer: {
    border: '1px solid #e0e0e0',
    padding: 15,
    borderRadius: '7px',
    marginBottom: 10,
    marginLeft: 10,
    minWidth: 600,
    filter: 'drop-shadow(0 0 0.75rem #bdbdbd)',
    [theme.breakpoints.down('sm')]: {
      minWidth: 300,
    },
  },
  containerTitle: {
    fontWeight: 600,
    verticalAlign: 'baseline',
    paddingBottom: 10,
    textAlign: 'left',
    fontSize: 22,
  },
  containerText: {
    fontWeight: 400,
    verticalAlign: 'baseline',
    paddingBottom: 10,
    textAlign: 'left',
    fontSize: 18,
  },
}));
export default function HowToBuy() {
  const classes = useStyles();

  return (
    <div className={classes.background}>
      <div className="mb-3 mt-3">
        <h4 className={classes.heading}>
          How To <strong className={classes.highlight}>Buy</strong>
        </h4>
      </div>
      <div className="text-center">Get CORGIB in 4 Steps</div>
      <Fade top>
        <div>
          <div className="my-5 container row">
            <div className="col-md-5 text-center">
              <img src="/images/metamask.png" className={classes.imageContainer} />
              <p className="mt-3">
                <strong> Metamask</strong>
              </p>
            </div>
            <div className="col-md-7">
              <div className={classes.focusContainer} style={{ backgroundColor: '#fcfcfc' }}>
                <h6 className={classes.containerTitle}>1. Step: Install Metamask for Chrome</h6>
                <p className={classes.containerText}>
                  Go to Metamask and install the Chrome extension. Follow their steps from the guide and finish the
                  setup.
                </p>
              </div>
            </div>
          </div>
          <div className="my-5 container row">
            <div className="col-md-5 text-center">
              <img src="/images/bnb.png" className={classes.imageContainer} />
              <p className="mt-3">
                <strong> Binance Smart Chain</strong>
              </p>
            </div>
            <div className="col-md-7">
              <div className={classes.focusContainer} style={{ backgroundColor: '#fcfcfc' }}>
                <h6 className={classes.containerTitle}>2. Step: Send BNB to Metamask</h6>
                <p className={classes.containerText}>
                  Once you have setup metamask, you can send BNB from an exchange like Kraken, Coinbase or Binance to
                  your Metamask address.
                </p>
              </div>
            </div>
          </div>
          <div className="my-5 container row">
            <div className="col-md-5 text-center">
              <img src="/images/pancake.png" className={classes.imageContainer} />
              <p className="mt-3">
                <strong>PancakeSwap</strong>
              </p>
            </div>
            <div className="col-md-7">
              <div className={classes.focusContainer} style={{ backgroundColor: '#fcfcfc' }}>
                <h6 className={classes.containerTitle}>3. Step: Go to PancakeSwap</h6>
                <p className={classes.containerText}>
                  Go to <a href="https://exchange.pancakeswap.finance/#/swap?outputCurrency=0x1cfd6813a59d7b90c41dd5990ed99c3bf2eb8f55" target="_blank">PancakeSwap</a> and click the "Approve" button (for the first time). Go
                  ahead and when transaction finish, click "Swap".
                </p>
              </div>
            </div>
          </div>
          <div className="my-5 container row">
            <div className="col-md-5 text-center">
              <img src="corgi.png" className={classes.imageContainer} />
              <p className="mt-3">
                <strong>CORGIB Token</strong>
              </p>
            </div>
            <div className="col-md-7">
              <div className={classes.focusContainer} style={{ backgroundColor: '#fcfcfc' }}>
                <h6 className={classes.containerTitle}>4. Step: Swap your BNB for CORGIB</h6>
                <p className={classes.containerText}>
                  Now you can swap your BNB for CORGIB. Set your slippage to 5-7% and buy an event amonunt of $CORGIB.
                  Click on the Swap Button to finalize your trade. Make sure to set fast transaction speed in Metamask.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Fade>
    </div>
  );
}
