import contractConnection from './../utils/connection';
import tokenConnection from './../utils/tokenConnection';
import constants from './../utils/constants';

//READ total bet amount
//RETURNS number
export const getTotalBetAmount = (mid) => {
  return contractConnection.methods.getTotalBetAmount(mid).call((err, response) => {
    return response;
  });
};

//READ total bet amount by result
//RETURNS number
export const getTotalBetAmountByResult = (mid, betResult) => {
  return contractConnection.methods.getTotalBetAmountByResult(mid, betResult).call((err, response) => {
    return response;
  });
};

//READ total participants
//RETURNS number
export const getTotalParticipants = (mid) => {
  return contractConnection.methods.getTotalParticipants(mid).call((err, response) => {
    return response;
  });
};

//READ isBet
//RETURNS object
export const isBet = (mid, address) => {
  return contractConnection.methods.players(mid, address).call((err, response) => {
    return response;
  });
};

//READ getMatchInfo
//RETURNS object
export const getMatchInfo = (mid) => {
  return contractConnection.methods.getMatchInfo(mid).call((err, response) => {
    return response;
  });
};

//Check approved or not
export const checkApproved = (userAddress) => {
  return tokenConnection.methods.allowance(userAddress, constants.contractAddress).call((err, response) => {
    console.log('allowance: ' + response);
    return response;
  });
};

//Check approve amount
export const approveAmount = async (account) => {
  const response = await tokenConnection.methods
    .approve(constants.contractAddress, '999999999999999999999999999999999999')
    .send({ from: account });

  return response;
};
