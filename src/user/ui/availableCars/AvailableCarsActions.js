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

                    return loanContractInstance.getAvailableCars(1);
                }).then(function (result) {
                    console.log(result);
                    // Transform to readable string
                    let res = [];

                    result[0].forEach(function (el) {
                        res.push([]);
                        res[res.length - 1][0] = web3.toUtf8(el);
                    });

                    result[1].forEach(function (el) {
                        res[res.length - 1][1] = el.e;
                    });

                    result[2].forEach(function (el) {
                        res[res.length - 1][2] = el.e;
                    });

                    result[3].forEach(function (el) {
                        res[res.length - 1][3] = el.e;
                    });

                    console.log(res);

                    dispatch({type: 'GET_AVAILABLE_CARS_SUCCESS', payload: res});

                });
            })
        }
    } else {
        console.error('Web3 is not initialized.');
    }
}