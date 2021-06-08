import contractConnection from './../utils/connection';

//Airdrop Functions

//READ is user joined airdrop
//RETURNS number
export const isJoinAirdrop = (address) => {
  return contractConnection.methods.isJoinAirdrop(address).call((err, response) => {
    console.log('isJoinAirdrop: ' + response);

    return response;
  });
};
