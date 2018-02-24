import { connect } from 'react-redux'
import WalletForm from './WalletForm'
import { transferToUser } from './WalletFormActions'

const mapStateToProps = (state, ownProps) => {
  return {}
};

const mapDispatchToProps = (dispatch) => {
  return {
    onTransferFormSubmit: (address, amount) => {
      dispatch(transferToUser(address, amount))
    }
  }
};

const WalletFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(WalletForm);

export default WalletFormContainer
