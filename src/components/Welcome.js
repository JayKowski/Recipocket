import React from 'react';
import '../stylesheets/Welcome.css'

class Welcome extends React.Component {
    render() {
        return (
            <div className="welcome-banner">
                <div className="blur">
                    <h1 className="app-title">Recipocket</h1>
                    <hr className="app-title-hr"/>
                    <p>Your number one place for delicious meal recipes</p>
                </div>
            </div>
        )
    }
}

export default Welcome;