import React, { Component } from 'react'

class NewCarForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            brand: '',
            plateNumber: '',
            nbSeats: '',
            nbKms: '',
            pictureURL: '',
            userAddress: ''
        };
    }

    onInputChange(event) {
        this.setState({ [event.target.name]: event.target.value })
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.onNewCarFormSubmit(this.state)
    }

    render() {
        return(
            <form className="pure-form pure-form-stacked" onSubmit={this.handleSubmit.bind(this)}>
                <fieldset>
                    <input
                        id="brand"
                        type="text"
                        value={this.state.brand}
                        onChange={this.onInputChange.bind(this)}
                        name='brand'
                        placeholder="Brand" />
                    <input
                        id="plateNumber"
                        type="text"
                        value={this.state.plateNumber}
                        onChange={this.onInputChange.bind(this)}
                        name='plateNumber'
                        placeholder="Plate Number" />
                    <span className="pure-form-message">This is a required field.</span>

                    <input
                        id="nbSeats"
                        type="number"
                        value={this.state.nbSeats}
                        onChange={this.onInputChange.bind(this)}
                        name='nbSeats'
                        placeholder="# Seats" />
                    <input
                        id="nbKms"
                        type="number"
                        value={this.state.nbKms}
                        onChange={this.onInputChange.bind(this)}
                        name='nbKms'
                        placeholder="Number of Kms" />
                    <span className="pure-form-message">This is a required field.</span>
                    <input
                        id="pictureURL"
                        type="url"
                        value={this.state.pictureURL}
                        onChange={this.onInputChange.bind(this)}
                        name='pictureURL'
                        placeholder="Picture (URL)" />

                    <br />

                    <button type="submit" className="pure-button pure-button-primary">Add new car</button>
                </fieldset>
            </form>
        )
    }
}

export default NewCarForm;