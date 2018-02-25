import LoanContract from '../../../../build/contracts/Loan.json'
import store from '../../../store'
import request from "superagent";
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

                    // Do POST to server
                    request
                        .post('http://130.82.239.32:8000/shareme/car')
                        .set('Content-Type', 'application/x-www-form-urlencoded')
                        .send(
                            {
                                user_address: accounts[0],
                                user_name: 'Dario',
                                brand: fields.brand,
                                plate_number: fields.plateNumber,
                                nb_seats: fields.nbSeats,
                                nb_kms: fields.nbKms,
                                picture_url: fields.pictureURL
                            }
                        )
                        .end(function(err, res){
                            console.log(res.text);
                        });

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
