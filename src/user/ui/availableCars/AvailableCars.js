import React, { Component } from 'react'

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
                <li>{this.props.availableCars}</li>
            </ul>
        )
    }
}

export default AvailableCars
