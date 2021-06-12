import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import clsx from 'clsx';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { Link } from 'react-router-dom';
import { Button, Dialog, Backdrop } from '@material-ui/core';
import { authenticateUser, signOutUser } from './../actions/authActions';
import { checkCorrectNetwork, checkWalletAvailable } from './../actions/web3Actions';
import web3 from './../web';
import BalancePopup from '../components/BalancePopup';
import { getCorgibBalance } from './../actions/SmartActions';
import { connect } from 'react-redux';
import { AccountBalanceWallet } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'space-between',
    paddingLeft: 90,
    paddingRight: 90,
    [theme.breakpoints.down('md')]: {
      paddingLeft: 10,
      paddingRight: 10,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: 'none',
    color: '#e65100',
    fontSize: 18,

    [theme.breakpoints.up('md')]: {
      display: 'block',
    },
  },
  tabs: {
    color: theme.palette.pbr.textSecondary,
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'block',
    },
    paddingRight: 10,
    fontWeight: 500,
    lineHeight: '24px',
    verticalAlign: 'baseline',
    letterSpacing: '0px',
    margin: 0,
    padding: '9px 14px 0px',
    cursor: 'pointer',
    fontSize: '1.2vw',
  },
  inputRoot: {
    color: 'inherit',
  },

  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    width: '100vw',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
    backgroundColor: 'transparent',
  },
  menuIcon: {
    color: '#212121',

    marginTop: 10,
  },
  list: {
    width: '250px',
    borderLeft: '5px solid pink',
    borderColor: theme.palette.pbr.primary,
    height: '100%',
    backgroundColor: 'transparent',
  },
  fullList: {
    width: 'auto',
  },
  menuTitle: {
    paddingLeft: 25,
    fontWeight: 500,
    verticalAlign: 'baseline',
    letterSpacing: '-0.8px',
    textAlign: 'left',
    fontSize: 16,
  },
  menuTitlePink: {
    paddingLeft: 25,
    fontWeight: 500,
    verticalAlign: 'baseline',
    letterSpacing: '-0.8px',
    textAlign: 'left',
    fontSize: 16,
    color: theme.palette.pbr.primary,
  },
  mobileLink: {
    color: theme.palette.pbr.textSecondary,
    textDecoration: 'none',
  },
  mobileButton: {
    borderRadius: '50px',
    background: `linear-gradient(to bottom,#D9047C, #BF1088)`,
    lineHeight: '24px',
    verticalAlign: 'baseline',
    letterSpacing: '-0.8px',
    margin: 0,
    color: '#ffffff',
    padding: '5px 15px 5px 15px',
    fontWeight: 600,
  },
  buttonOutlined: {
    borderRadius: '10px',
    border: '1px solid #000000',
    background: '#ffffff',
    lineHeight: '24px',
    verticalAlign: 'baseline',
    letterSpacing: '-1px',
    margin: 0,
    marginTop: 5,
    color: '#000000',
    padding: '12px 16px 12px 16px',
    fontWeight: 500,
    fontSize: '1.1vw',
  },
  highlight: {
    color: theme.palette.pbr.primary,
  },
  balanceButton: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    border: '2px solid #BF1088',
    background: 'transparent',
    //background: 'linear-gradient(73.28deg,#D9047C 6.51%,#BF1088 88.45%)',
    color: '#BF1088',
    borderRadius: '20px',
    position: 'relative',
    padding: '0 15px 0 15px',
    minWidth: '100px',
    marginLeft: '10px',
    marginRight: '10px',
    marginTop: 5,
    height: '40px',
    maxWidth: 'calc(100% - 20px);',
    fontSize: 16,
  },
  icon: {
    fontSize: 24,
    marginRight: 5,
    color: '#616161',
  },
}));

function GameAppbar({ authenticated, user, authenticateUser, signOutUser }) {
  const classes = useStyles();

  const [state, setState] = React.useState({
    right: false,
  });
  const [popup, setPopup] = useState(false);
  const [bnbBal, setBnbBal] = useState(null);
  const [corgibBalance, setCorgibBalance] = useState(null);
  const [address, setAddress] = useState(null);

  const togglePopup = (value) => {
    setPopup(value);
  };

  const toggleDrawer = (anchor, open) => (event) => {
    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}>
      <List>
        {[
          { name: 'To The Moon', id: 'https://t.me/corgipolkabridge' },
          { name: 'Predict & Win', id: '/play' },
          {
            name: 'PancakeSwap',
            id: 'https://exchange.pancakeswap.finance/#/swap?outputCurrency=0x1cfd6813a59d7b90c41dd5990ed99c3bf2eb8f55',
          },
        ].map((tab, index) => (
          <a href={tab.id} className={classes.mobileLink}>
            <ListItem button key={tab.name}>
              <ListItemText primary={tab.name} className={classes.menuTitle} />
            </ListItem>
          </a>
        ))}
        <ListItem button>
          <div>
            <Button className={classes.balanceButton}>
              <div className={classes.buttonIcon}>
                <AccountBalanceWallet className={classes.icon} />
              </div>
              <div>
                <strong style={{ color: '#616161' }}>
                  {bnbBal !== null && parseFloat(bnbBal).toFixed(4) + ' BNB'}{' '}
                </strong>
              </div>
            </Button>
          </div>
        </ListItem>
      </List>
    </div>
  );
  const getBalance = async (currentAddress) => {
    if (window.ethereum !== undefined) {
      web3.eth.getBalance(currentAddress, (err, balance) => {
        let ethBalance = web3.utils.fromWei(balance);

        setBnbBal(ethBalance);
      });
      let corgibBalance = await getCorgibBalance(currentAddress);
      let corgibInEth = web3.utils.fromWei(corgibBalance, 'ether');
      setCorgibBalance(corgibInEth);
    }
  };

  const signOut = (address) => {
    signOutUser(address);
    setPopup(false);
  };

  const connectWallet = async () => {
    //console.log('Connected');
    if (window.ethereum !== undefined) {
      const networkStatus = await checkCorrectNetwork();
      if (networkStatus) {
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        const accountAddress = accounts[0];
        authenticateUser(accountAddress);
      } else {
        //console.log('Only support BSC network');
      }
    } else {
      //console.log('Install metamask first!');
    }
  };

  useEffect(async () => {
    //Is user in localStorage
    if (window.ethereum !== undefined) {
      const networkStatus = await checkCorrectNetwork();
      console.log('networkStatus: ' + networkStatus);

      if (networkStatus) {
        const localAddress = await localStorage.getItem('userAddress');
        if (localAddress) {
          authenticateUser(localAddress);
          getBalance(localAddress);
        } else {
          signOutUser();
        }
      } else {
        //console.log('Wrong network');
      }
    }
  }, [user]);

  useEffect(() => {
    //Events to detect changes in account or network.
    if (window.ethereum !== undefined) {
      window.ethereum.on('accountsChanged', function (accounts) {
        web3.eth.requestAccounts().then((accounts) => {
          const accountAddress = accounts[0];
          authenticateUser(accountAddress);

          window.location.reload();
        });
      });
      window.ethereum.on('networkChanged', async function (networkId) {
        let networkStatus = await checkCorrectNetwork();

        if (networkStatus) {
          web3.eth.requestAccounts().then((accounts) => {
            const accountAddress = accounts[0];
            authenticateUser(accountAddress);
            window.location.reload();
          });
        } else {
          console.log('Calling Signout');

          signOutUser();
          window.location.reload();
        }
      });
    }
  }, [user]);

  return (
    <div className={classes.grow}>
      <AppBar position="static" style={{ background: 'white', boxShadow: 'none', height: 70 }}>
        <Toolbar className={classes.toolbar}>
          <div className={classes.title}>
            <div className="d-flex flex-row  justify-content-start align-items-center">
              <div style={{ paddingTop: 5 }}>
                <img src="corgi.png" alt="logo" height="55px" />{' '}
              </div>{' '}
              <Link to="/">
                <div style={{ fontWeight: 600, color: '#000000', fontSize: 20, letterSpacing: '-1px', paddingTop: 5 }}>
                  Corgi of <span className={classes.highlight}>PolkaBridge</span>
                </div>
              </Link>
            </div>
          </div>
          <div className="d-flex justify-content-end align-items-center">
            <Link activeClass="active" to="header" smooth={true} offset={0} duration={500} delay={0}></Link>

            <div className={classes.sectionDesktop}>
              <div style={{ paddingRight: 10 }}>
                {authenticated ? (
                  <div>
                    <Button className={classes.balanceButton} onClick={() => togglePopup(true)}>
                      <div className={classes.buttonIcon}>
                        <AccountBalanceWallet className={classes.icon} />
                      </div>
                      <div>
                        <strong style={{ color: '#BF1088' }}>
                          {bnbBal !== null ? parseFloat(bnbBal).toFixed(4) + ' BNB' : 'Loading...'}{' '}
                        </strong>
                      </div>
                    </Button>
                  </div>
                ) : (
                  <div>
                    <Button className={classes.balanceButton} onClick={connectWallet}>
                      {window.ethereum !== undefined ? 'Connect your wallet' : 'Missing Metamask!'}
                    </Button>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className={classes.sectionMobile}>
            <Link to="/">
              {' '}
              <div className="d-flex flex-row  justify-content-start align-items-center">
                <div style={{ paddingTop: 5 }}>
                  <img src="corgi.png" alt="logo" height="55px" />{' '}
                </div>{' '}
                <div style={{ fontWeight: 600, color: '#000000', fontSize: 20, letterSpacing: '-1px', paddingTop: 5 }}>
                  Corgi of <span className={classes.highlight}>PolkaBridge</span>
                </div>
              </div>
            </Link>
            <div>
              {['right'].map((anchor) => (
                <React.Fragment key={anchor}>
                  <div>
                    <IconButton
                      aria-label="Menu"
                      aria-haspopup="true"
                      className={classes.menuIcon}
                      onClick={toggleDrawer(anchor, true)}>
                      <MenuIcon style={{ fontSize: 28 }} />
                    </IconButton>
                  </div>

                  <SwipeableDrawer
                    anchor={anchor}
                    disableSwipeToOpen={false}
                    open={state[anchor]}
                    onClose={toggleDrawer(anchor, false)}
                    onOpen={toggleDrawer(anchor, true)}>
                    {list(anchor)}
                  </SwipeableDrawer>
                </React.Fragment>
              ))}
            </div>
          </div>
        </Toolbar>
      </AppBar>
      <Dialog
        className={classes.modal}
        open={popup}
        keepMounted
        onClose={() => togglePopup(false)}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}>
        <div style={{ backgroundColor: 'white', borderRadius: 20 }}>
          <BalancePopup
            address={user}
            corgib={corgibBalance}
            togglePopup={() => togglePopup(false)}
            signOut={() => signOut(user)}
          />
        </div>
      </Dialog>
    </div>
  );
}

const mapStateToProps = (state) => ({
  authenticated: state.auth.authenticated,
  user: state.auth.user,
});

const mapDispatchToProps = { authenticateUser, signOutUser };

export default connect(mapStateToProps, mapDispatchToProps)(GameAppbar);
