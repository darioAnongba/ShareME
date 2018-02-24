import { connect } from 'react-redux'
import WalletForm from './WalletForm'
import { transferToUser } from './WalletFormActions'
import store from "../../../store";
import TokenContract from '../../../../build/contracts/ShareMeToken.json'
const contract = require('truffle-contract');

const mapStateToProps = (state, ownProps) => {
    return state.user
};

const mapDispatchToProps = (dispatch) => {
    return {
        onTransferFormSubmit: (address, amount) => {
          console.log(address, amount);
            dispatch(transferToUser(address, amount))
        },
        fetchBalances: () => {
            console.log('Getting balances...');

            let web3 = store.getState().web3.web3Instance;

            // Double-check web3's status.
            if (typeof web3 !== 'undefined') {
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
            } else {
                console.error('Web3 is not initialized.');
            }
        }
    };
};

const WalletFormContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(WalletForm);

export default WalletFormContainer
