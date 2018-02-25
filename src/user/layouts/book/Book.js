import React, { Component } from 'react'
import AvailableCarsContainer from '../../ui/avilableCars/AvailableCarsContainer'

class Book extends Component {
    render() {
        return(
            <main className="container">
                <div className="pure-g">
                    <div className="pure-u-1-1">
                        <h1>List of available cars</h1>
                        <AvailableCarsContainer />
                    </div>
                </div>
            </main>
        )
    }
}

export default Book
