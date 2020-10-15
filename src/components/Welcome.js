import React from 'react';
import '../stylesheets/Welcome.css'

class Welcome extends React.Component {
    render() {
        return (
            <div className="welcome-banner">
                <h1 className="app-title">Recipocket</h1>
                <p>Your number one place for delicious meal recipes</p>
            </div>
        )
    }
}

export default Welcome;