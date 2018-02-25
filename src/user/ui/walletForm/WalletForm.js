import React, { Component } from 'react'

class WalletForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            transferAddress: '',
            transferAmount: ''
        };
    }

    onInputChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.onTransferFormSubmit(this.state.transferAddress, this.state.transferAmount)
    }

    componentDidMount() {
        this.props.fetchBalances();
    }

    render() {
        return(
            <form className="pure-form pure-form-stacked" onSubmit={this.handleSubmit.bind(this)}>
                <fieldset>
                    <strong>Balance</strong>: <span id="SMTBalance">{this.props.balance}</span> SMT<br/><br/>
                    <input id="transferAddress"
                           type="text"
                           value={this.state.transferAddress}
                           name="transferAddress"
                           onChange={this.onInputChange.bind(this)} placeholder="Address" />
                    <input
                        id="transferAmount"
                        type="number"
                        value={this.state.transferAmount}
                        name="transferAmount"
                        onChange={this.onInputChange.bind(this)}
                        placeholder="Amount" />

                    <br />

                    <button type="submit" className="pure-button pure-button-primary">Send</button>
                </fieldset>
            </form>
        )
    }
}

export default WalletForm
