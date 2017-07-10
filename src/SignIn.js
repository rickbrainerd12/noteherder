import React from 'react'
import {auth} from './base'
import {googleProvider} from './base'

import './SignIn.css'

const SignIn = () => {
    const authenticate = () => {
        auth.signInWithPopup(googleProvider)
    }

    return (
        <div className = "SignIn">
            <button onClick = {authenticate}>SignIn</button>
        </div>
    )
}

export default SignIn