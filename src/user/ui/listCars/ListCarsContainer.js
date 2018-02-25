import { connect } from 'react-redux'
import ListCars from './ListCars'
import { getPlates } from './ListCarsActions'

const mapStateToProps = (state, ownProps) => {
    return state.user
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchPlates: getPlates(dispatch)
    }
};

const ListCarsContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(ListCars);

export default ListCarsContainer
