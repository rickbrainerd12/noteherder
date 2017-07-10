import React from 'react'
import {auth} from './base'
import {googleProvider} from './base'

import './SignIn.css'

const SignIn = ({handleAuth}) => {
    const authenticate = () => {
        auth
            .signInWithPopup(googleProvider)
            .then(handleAuth)
    }

    return (
        <div className = "SignIn">
            <button onClick = {authenticate}>SignIn</button>
        </div>
    )
}

export default SignIn