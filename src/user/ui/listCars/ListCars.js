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
                <li>{this.props.plates}</li>
            </ul>
        )
    }
}

export default ListCars
