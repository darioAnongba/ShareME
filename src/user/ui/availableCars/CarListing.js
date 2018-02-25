import React, { Component } from 'react'
import moment from 'moment';

class CarListing extends Component {
    render() {
        const startTime = moment(this.props.car[1] * 1000);
        const endTime = moment(this.props.car[2] * 1000);
        return(
            <div>
                <h3><strong>Car</strong>: {this.props.car[0]}</h3>
                <ul>
                    <li><strong>Price:</strong> {this.props.car[3]} SMT Tokens</li>
                    <li><strong>Start of reservation:</strong> {startTime.format('DD-M-Y [at] h:mm:ss')}</li>
                    <li><strong>End of reservation:</strong> {endTime.format('DD-M-Y [at] h:mm:ss')}</li>
                </ul>
                <br/>
                <button className="pure-button pure-button-primary" onClick={() => alert('Booked!')}>Book</button>
            </div>
        )
    }
}

export default CarListing;
