import { connect } from 'react-redux'
import WalletForm from './WalletForm'
import { transferToUser, getBalances } from './WalletFormActions'

const mapStateToProps = (state, ownProps) => {
    return state.user
};

const mapDispatchToProps = (dispatch) => {
    return {
        onTransferFormSubmit: (address, amount) => {
            dispatch(transferToUser(address, amount, dispatch))
        },
        fetchBalances: getBalances(dispatch)
    }
};

const WalletFormContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(WalletForm);

export default WalletFormContainer
