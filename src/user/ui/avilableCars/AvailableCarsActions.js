import LoanContract from '../../../../build/contracts/Loan.json'
import store from '../../../store'

const contract = require('truffle-contract');

export function getAvailableCars(dispatch) {
    console.log('Getting available cars...');

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

                    // Get balances
                    return loanContractInstance.getAvailableCars();
                }).then(function (result) {
                    // Transform to readable string
                    let res = [];
                    result.forEach(function (el) {
                        console.log(el);
                        let temp = {};
                        temp['plate'] = web3.toUtf8(el[0]);
                        temp['startTime'] = el[1];
                        temp['endTime'] = el[2];
                        temp['price'] = el[3];
                        res.push(temp);
                    });

                    dispatch({type: 'GET_AVAILABLE_CARS_SUCCESS', payload: res});

                }).catch(function (err) {
                    console.log(err.message);
                });
            })
        }
    } else {
        console.error('Web3 is not initialized.');
    }
}