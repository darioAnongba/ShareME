import React, { Component } from 'react'

class ListCars extends Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    componentDidMount() {
        this.props.fetchPlates();
    }

    render() {
        return(
            <ul>
                {this.props.plates && this.props.plates.map(function (plateNumber, index) {
                    return <li key={ index }>{plateNumber}</li>
                })}
            </ul>
        )
    }
}

export default ListCars
