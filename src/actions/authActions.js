import constants from './../utils/constants';
import web3 from './../web';
//Check wallet available
//Returns boolean true or false
export const authUser = (address) => {
  localStorage.setItem('userAddress', address);
};

export const signOutUser = () => {
  localStorage.removeItem('userAddress');
};
