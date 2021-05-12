import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';
import DotCircle from '../components/DotCircle';
import CustomButton from './CustomButton';
import clsx from 'clsx';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { Link } from 'react-scroll';
import { Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: 'none',
    color: 'black',
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
}));

export default function PrimarySearchAppBar() {
  const classes = useStyles();

  const [state, setState] = React.useState({
    right: false,
  });

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

          { name: 'About', id: 'about' },
          { name: 'Features', id: 'features' },
          // { name: 'Team', id: 'team' },
          { name: 'Roadmap', id: 'roadmap' },
          { name: 'Tokenomics', id: 'tokenomics' },
        ].map((tab, index) => (
          <Link activeClass="active" to={tab.id} smooth={true} offset={0} duration={500} delay={0}>
            <ListItem button key={tab.name} onClick={toggleDrawer(anchor, false)}>
              <ListItemText primary={tab.name} className={classes.menuTitle} />
            </ListItem>
          </Link>
        ))}
      </List>
      <Divider />
      <List>
        {[
          { name: 'Telegram', id: 'https://t.me/corgipolkabridge' },
          { name: 'PancakeSwap', id: 'https://exchange.pancakeswap.finance/#/swap?outputCurrency=0x1cfd6813a59d7b90c41dd5990ed99c3bf2eb8f55' },
        ].map((tab, index) => (
          <a href={tab.id} className={classes.mobileLink}>
            <ListItem button key={tab.name}>
              <ListItemText primary={tab.name} className={classes.menuTitle} />
            </ListItem>
          </a>
        ))}
        {/* <ListItem button>
          <a href="docs/whitepaper.pdf" style={{ textDecoration: 'none' }}>
            <ListItemText primary={'Read Whitepaper'} className={classes.menuTitlePink} />
          </a>
        </ListItem> */}
      </List>
    </div>
  );

  return (
    <div className={classes.grow}>
      <AppBar position="fixed" style={{ background: 'white', boxShadow: 'none', height: 70 }}>
        <Toolbar className="d-flex justify-content-evenly ">
          <Typography className={classes.title} variant="h6" noWrap>
            <img src="corgi.png" alt="logo" height="50px" /> Corgi of PolkaBridge
          </Typography>
          <div className="d-flex justify-content-end align-items-center">
            <Link activeClass="active" to="header" smooth={true} offset={0} duration={500} delay={0}>

            </Link>
            <Link activeClass="active" to="about" smooth={true} offset={0} duration={500} delay={0}>
              <Typography className={classes.tabs} variant="body1" noWrap>
                About
              </Typography>
            </Link>

            <Link activeClass="active" to="features" smooth={true} offset={0} duration={500} delay={0}>
              <Typography className={classes.tabs} variant="body1">
                Features
              </Typography>
            </Link>
            <Link activeClass="active" to="roadmap" smooth={true} offset={0} duration={500} delay={0}>
              <Typography className={classes.tabs} variant="body1">
                Roadmap
              </Typography>
            </Link>
            <Link activeClass="active" to="tokenomics" smooth={true} offset={0} duration={500} delay={0}>
              <Typography className={classes.tabs} variant="body1">
                Tokenomics
              </Typography>
            </Link>
            {/* <a href="docs/whitepaper.pdf" style={{ textDecoration: 'none' }}>
              <Typography className={classes.tabs} variant="body1">
                Telegram <DotCircle />
              </Typography>
            </a> */}

            <div className={classes.sectionDesktop}>
              <div style={{ paddingRight: 10 }}>
                <a href="https://t.me/corgipolkabridge">
                  {' '}
                  <Button variant="outlined" className={classes.buttonOutlined}>
                    Telegram
                  </Button>
                </a>
              </div>
              <CustomButton title={'PancakeSwap'} link={'https://exchange.pancakeswap.finance/#/swap?outputCurrency=0x1cfd6813a59d7b90c41dd5990ed99c3bf2eb8f55'}></CustomButton>
            </div>
          </div>
          <div className={classes.sectionMobile}>
            <div style={{ color: 'white' }}>
              <img src="corgi.png" alt="logo" height="50px" /> Corgi of PolkaBridge
            </div>

            <div>
              {['right'].map((anchor) => (
                <React.Fragment key={anchor}>
                  <IconButton
                    aria-label="Menu"
                    aria-haspopup="true"
                    className={classes.menuIcon}
                    onClick={toggleDrawer(anchor, true)}>
                    <MenuIcon />
                  </IconButton>

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
    </div>
  );
}
