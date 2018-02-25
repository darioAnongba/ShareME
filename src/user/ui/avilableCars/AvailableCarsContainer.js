import { connect } from 'react-redux'
import AvailableCars from './AvailableCars'
import { getAvailableCars } from './AvailableCarsActions'

const mapStateToProps = (state, ownProps) => {
    return state.user
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchAvailableCars: getAvailableCars(dispatch)
    }
};

const AvailableCarsContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(AvailableCars);

export default AvailableCarsContainer
