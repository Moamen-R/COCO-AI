// eslint-disable-next-line no-unused-vars
import React, {Component} from 'react';
import {SignUp} from '@clerk/clerk-react';
import './signUpPage.css';

class SignUpPage extends Component {
    render() {
        return (
            <div className={'signUpPage'}>
                <SignUp path="/sign-up" signInUrl="/sign-in" />
            </div>
        );
    }
}

export default SignUpPage;