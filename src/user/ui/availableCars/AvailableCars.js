import React, { Component } from 'react'
import CarListing from './CarListing'

class AvailableCars extends Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    componentDidMount() {
        this.props.fetchAvailableCars();
    }

    render() {
        return(
            <ul>
                {this.props.availableCars && this.props.availableCars.map(function (car, index) {
                    return <CarListing car={car} key={index}/>
                })}
            </ul>
        )
    }
}

export default AvailableCars
