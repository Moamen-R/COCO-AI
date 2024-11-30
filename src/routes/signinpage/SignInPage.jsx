// eslint-disable-next-line no-unused-vars
import React, { Component } from 'react';
import { SignIn } from '@clerk/clerk-react'; // Use named import here
import './signInPage.css';

class SignInPage extends Component {
    render() {
        return (
            <div className="signInPage">
                <SignIn path="/sign-in" signUpUrl={"/sign-up"} />
            </div>
        );
    }
}

export default SignInPage;
