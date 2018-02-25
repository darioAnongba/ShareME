import LoanContract from '../../../../build/contracts/Loan.json'
import store from '../../../store'

const contract = require('truffle-contract');

export const CAR_ADDED = 'CAR_ADDED';

export function addCar(fields) {
    let web3 = store.getState().web3.web3Instance;

    // Double-check web3's status.
    if (typeof web3 !== 'undefined') {

        return function() {
            const loanContract = contract(LoanContract);
            loanContract.setProvider(web3.currentProvider);

            let loanContractInstance;

            // Get current ethereum wallet.
            web3.eth.getAccounts((error, accounts) => {
                // Log errors, if any.
                if (error) {
                    console.error(error);
                }

                loanContract.deployed().then(function(instance) {
                    loanContractInstance = instance;

                    return loanContractInstance.addCar(web3.fromUtf8(fields.plateNumber), {from: accounts[0]})
                }).then(function (success) {
                    alert('Car added successfully !');

                    return {
                      type: CAR_ADDED
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
