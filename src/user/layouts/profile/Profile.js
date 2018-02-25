import React, { Component } from 'react'
import ProfileFormContainer from '../../ui/profileform/ProfileFormContainer'
import NewCarFormContainer from '../../ui/newCarForm/NewCarFormContainer'
import ListCarsContainer from '../../ui/listCars/ListCarsContainer'

class Profile extends Component {
    render() {
        return(
            <main className="container">
                <div className="pure-g">
                    <div className="pure-u-1-1">
                        <h1>Profile</h1>
                        <p>Edit your account details here.</p>
                        <ProfileFormContainer />

                        <h1>My Cars</h1>
                        <ListCarsContainer />

                        <h1>Add a Car</h1>
                        <NewCarFormContainer />
                    </div>
                </div>
            </main>
        )
    }
}

export default Profile
