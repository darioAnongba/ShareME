import React, { Component } from 'react'
import WalletFormContainer from '../../ui/walletForm/WalletFormContainer'

class Wallet extends Component {
  render() {
    return(
      <main className="container">
        <div className="pure-g">
          <div className="pure-u-1-1">
            <h1>My Wallet</h1>
            <WalletFormContainer />
          </div>
        </div>
      </main>
    )
  }
}

export default Wallet
