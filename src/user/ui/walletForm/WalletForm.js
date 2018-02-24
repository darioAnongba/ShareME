import React, { Component } from 'react'
import store from "../../../store";
const contract = require('truffle-contract');
import TokenContract from '../../../../build/contracts/ShareMeToken.json'

class WalletForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            transferAddress: '',
            transferAmount: '',
            balance: 0,
        };
    }

    onInputChange(event) {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({ [name]: value });
    }

    handleSubmit(event) {
        console.log(this.state);
        event.preventDefault();
        this.props.onTransferFormSubmit(this.state.transferAddress, this.state.transferAmount)
    }

    getBalances() {
        const obj = this;
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
                    console.log(result);
                    obj.setState({balance: result.c[0]})
                }).catch(function (err) {
                    console.log(err.message);
                })
            })
        } else {
            console.error('Web3 is not initialized.');
        }
    }

    componentDidMount() {
        this.getBalances.bind(this);
    }

    render() {
        return(
            <form className="pure-form pure-form-stacked" onSubmit={this.handleSubmit.bind(this)}>
                <fieldset>
                    <h4>Balance</h4>
                    <strong>Balance</strong>: <span id="SMTBalance">{this.state.balance}</span> SMT<br/><br/>
                    <button className="pure-button pure-button-primary" onClick={() => this.getBalances()}>See balance</button>

                    <input id="transferAddress"
                           type="text"
                           value={this.state.transferAddress}
                           name="transferAddress"
                           onChange={this.onInputChange.bind(this)} placeholder="Address" />
                    <span className="pure-form-message">This is a required field.</span>Send

                    <input
                        id="transferAmount"
                        type="text"
                        value={this.state.transferAmount}
                        name="transferAmount"
                        onChange={this.onInputChange.bind(this)}
                        placeholder="Amount" />
                    <span className="pure-form-message">This is a required field.</span>

                    <br />

                    <span>{this.state.transferAddress}</span>

                    <button type="submit" className="pure-button pure-button-primary">Send</button>
                </fieldset>
            </form>
        )
    }
}

export default WalletForm
