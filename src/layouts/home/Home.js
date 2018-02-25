import React, { Component } from 'react'

class Home extends Component {
    render() {
        return(
            <main className="container">
                <div className="pure-g">
                    <div className="pure-u-1-1">
                        <h1>ShareME !</h1>
                        <p>Decentralized Car sharing platform</p>
                        <h2>Be your own Car rental !</h2>
                        <p>
                            In order to solve the global problem of cars not being used most of the time.
                            The average car is <strong>used only 4% of the time in Switzerland!</strong>
                        </p>
                        <h2>Get rewards !</h2>
                        <p>
                            Put your car to rental and earn SMT tokens that can be used to rent cars on the system,
                            get amazing rewards and can exchanged for other tokens.
                        </p>

                        <h2>Try it !</h2>
                        <p>
                            Rent a car without needing intermediaries that take immense transaction fees !
                        </p>
                    </div>
                </div>
            </main>
        )
    }
}

export default Home
