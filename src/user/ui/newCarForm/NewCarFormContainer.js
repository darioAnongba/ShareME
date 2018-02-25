import { connect } from 'react-redux'
import NewCarForm from './NewCarForm'
import { addCar } from './NewCarFormActions'

const mapStateToProps = (state, ownProps) => {
    return {}
};

const mapDispatchToProps = (dispatch) => {
    return {
        onNewCarFormSubmit: (specs) => {
            event.preventDefault();
            dispatch(addCar(specs))
        }
    }
};

const NewCarFormContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(NewCarForm);

export default NewCarFormContainer
