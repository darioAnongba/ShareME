import TokenContract from '../../../../build/contracts/ShareMeToken.json'
import store from '../../../store'

const contract = require('truffle-contract');

export function transferToUser(toAddress, amount) {
    let web3 = store.getState().web3.web3Instance;

    // Double-check web3's status.
    if (typeof web3 !== 'undefined') {

        return function(dispatch) {
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
                    return {
                        type: 'TEST'
                    }
                }).catch(function (err) {
                    console.log(err.message);
                });
            })
        }
    } else {
        console.error('Web3 is not initialized.');
    }
}

export function getBalances() {

}