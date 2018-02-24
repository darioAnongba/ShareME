import TokenContract from '../../../../build/contracts/ShareMeToken.json'
import store from '../../../store'

const contract = require('truffle-contract');

export function transferToUser(toAddress, amount, dispatch) {
    let web3 = store.getState().web3.web3Instance;

    // Double-check web3's status.
    if (typeof web3 !== 'undefined') {

        return function() {
            const token = contract(TokenContract);
            token.setProvider(web3.currentProvider);

            let tokenInstance;

            // Get current ethereum wallet.
            web3.eth.getAccounts((error, accounts) => {
                // Log errors, if any.
                if (error) {
                    console.error(error);
                }

                token.deployed().then(function(instance) {
                    tokenInstance = instance;

                    return tokenInstance.transfer(toAddress, amount, {from: accounts[0]})
                }).then(function (result) {
                    alert('Transfer successful !');
                    return getBalances(dispatch);

                }).catch(function (err) {
                    console.log(err.message);
                });
            })
        }
    } else {
        console.error('Web3 is not initialized.');
    }
}

export function getBalances(dispatch) {
    console.log('Getting balances...');

    let web3 = store.getState().web3.web3Instance;

    // Double-check web3's status.
    if (typeof web3 !== 'undefined') {

        return function () {
            const token = contract(TokenContract);
            token.setProvider(web3.currentProvider);

            // Declaring this for later so we can chain functions on Authentication.
            let tokenInstance;

            // Get current ethereum wallet.
            web3.eth.getAccounts((error, accounts) => {
                // Log errors, if any.
                if (error) {
                    console.error(error);
                }

                token.deployed().then(function(instance) {
                    tokenInstance = instance;

                    // Get balances
                    return tokenInstance.balanceOf(accounts[0]);
                }).then(function (result) {
                    const balance = result.c[0];
                    dispatch({type: 'GET_BALANCES_SUCCESS', payload: balance});

                }).catch(function (err) {
                    console.log(err.message);
                });
            })
        }
    } else {
        console.error('Web3 is not initialized.');
    }
}