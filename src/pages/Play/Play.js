import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import GameCard from '../../components/GameCard';
import matches from './../../data/matches';
import { checkCorrectNetwork, checkWalletAvailable } from './../../actions/web3Actions';
import Loader from '../../components/Loader';
import ConnectButton from '../../common/ConnectButton';
import { authenticateUser } from '../../actions/authActions';
import { connect } from 'react-redux';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: 400,
    borderRadius: 10,
    [theme.breakpoints.down('sm')]: {
      width: 300,
    },
  },
  header: {
    overflowY: 'scroll',
    height: '85vh',
    width: 'auto',
    background: `linear-gradient(0deg, rgba(0, 0, 0, 0.8), rgba(3, 3, 3, 0.7) ),url("images/corgibbg.jpg")`,
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    paddingTop: 15,
  },

  heading: {
    color: 'white',
    width: 'auto',
    textAlign: 'center',
    fontSize: 36,
    fontWeight: 600,
    verticalAlign: 'middle',
    wordSpacing: '0px',
    [theme.breakpoints.down('md')]: {
      fontSize: '26px',
      textAlign: 'center',
    },
  },
  backButton: {
    paddingTop: 20,
    color: 'white',
    width: 'auto',
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 500,
    verticalAlign: 'middle',
    wordSpacing: '0px',
    [theme.breakpoints.down('md')]: {
      fontSize: '16px',
      textAlign: 'center',
    },
  },
  tabs: {
    width: 500,
    [theme.breakpoints.down('sm')]: {
      width: 400,
    },
  },
}));

function Play({ authenticated, user }) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const [actualCase, setActualCase] = React.useState(0);
  const [games, setGames] = React.useState([]);

  const handleChange = (event, newValue) => {
    updateMatches(newValue);
    setValue(newValue);
  };
  const updateMatches = (newValue) => {
    let gameCards = [];
    if (matches.length !== 0 && newValue === 0) {
      gameCards = matches.filter((match) => {
        let d = new Date();
        let matchDate1 = new Date(match.date);
        return d.getTime() < matchDate1.getTime();
      });
    }
    if (matches.length !== 0 && newValue === 1) {
      gameCards = matches.filter((match) => {
        let d = new Date();
        let matchDate2 = new Date(match.date);

        return d.getTime() > matchDate2.getTime();
      });
    }
    setGames(gameCards);
  };
  const conditionValidity = async () => {
    let walletAvailable = await checkWalletAvailable();

    if (walletAvailable) {
      //console.log('1.Wallet  available');
      let networkStatus = await checkCorrectNetwork();

      if (networkStatus) {
        //console.log('2. Correct Network');
        //Get accounts

        if (authenticated) {
          // console.log('3. Authenticated True');
          setActualCase(4);
        } else {
          //console.log('3. Authenticated False');
          setActualCase(3);
        }
      } else {
        setActualCase(2);
        //console.log('2. Wrong Network');
      }
    } else {
      setActualCase(1);
      //console.log('1.Wallet not available');
    }
  };
  useEffect(() => {
    setTimeout(() => {
      conditionValidity();
    }, 500);
    updateMatches(0);
  }, [user]);

  return (
    <section>
      <div className={classes.header}>
        {actualCase === 0 && (
          <div className="text-center">
            <Loader />
          </div>
        )}
        {actualCase === 1 && (
          <div className="mt-5 text-center">
            <h4 style={{ color: 'yellow' }}>Missing Wallet!</h4>
            <p style={{ color: 'white' }}>Install metamask first to access the content.</p>
          </div>
        )}
        {actualCase === 2 && (
          <div className="mt-5 text-center">
            <h4 style={{ color: 'yellow' }}>Wrong Network!</h4>
            <p style={{ color: 'white' }}>Only support BSC network.</p>
          </div>
        )}
        {actualCase === 3 && (
          <div className="mt-5 text-center">
            <ConnectButton />
          </div>
        )}
        {actualCase === 4 && (
          <div>
            <div className="d-flex justify-content-center ">
              <div>
                <h6 className={classes.heading}>Play and Win</h6>
                <Paper square className={classes.root}>
                  <Tabs value={value} onChange={handleChange} indicatorColor="secondary" textColor="primary" centered>
                    <Tab label="Active Matches" />
                    <Tab label="Ended Ended" />
                  </Tabs>
                </Paper>
              </div>
            </div>

            {games.map((singleCard, index) => {
              return (
                <div className="pb-3">
                  <GameCard item={singleCard} index={index} key={index} />
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
const mapStateToProps = (state) => ({
  authenticated: state.auth.authenticated,
  user: state.auth.user,
});

const mapDispatchToProps = { authenticateUser };

export default connect(mapStateToProps, mapDispatchToProps)(Play);
