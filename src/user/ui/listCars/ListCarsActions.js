import LoanContract from '../../../../build/contracts/Loan.json'
import store from '../../../store'

const contract = require('truffle-contract');

export function getPlates(dispatch) {
    console.log('Getting plates...');

    let web3 = store.getState().web3.web3Instance;

    // Double-check web3's status.
    if (typeof web3 !== 'undefined') {

        return function () {
            const loanContract = contract(LoanContract);
            loanContract.setProvider(web3.currentProvider);

            // Declaring this for later so we can chain functions on Authentication.
            let loanContractInstance;

            // Get current ethereum wallet.
            web3.eth.getAccounts((error, accounts) => {
                // Log errors, if any.
                if (error) {
                    console.error(error);
                }

                loanContract.deployed().then(function(instance) {
                    loanContractInstance = instance;

                    // Get Plates
                    return loanContractInstance.getPlates(accounts[0]);
                }).then(function (result) {
                    // Transform to readable string
                    const decodedPlates = [];
                    result.forEach(function (el) {
                        decodedPlates.push(web3.toUtf8(el));
                    });

                    dispatch({type: 'GET_PLATES_SUCCESS', payload: decodedPlates});
                }).catch(function (err) {
                    console.log(err.message);
                });
            })
        }
    } else {
        console.error('Web3 is not initialized.');
    }
}