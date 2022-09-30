import { Button } from '@mui/material'
import React from 'react'
import './Login.css'
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { provider } from "./firebase.js";
import { useStateValue } from './StateProvider';
import { actionType } from './Reducer.js';

function Login() {
    const [state, dispatch] = useStateValue()
    
    const handleSubmit = (e) => {
        const auth = getAuth();
        signInWithPopup(auth, provider)
            .then((result) => {
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                console.log(token)
                const user = result.user;
                dispatch({
                    type: actionType.SET_USER,
                    user: result.user,
                })
                console.log(user)
            }).catch((error) => {
                const errorCode = error.code;
                alert(errorCode)
                const errorMessage = error.message;
                alert(errorMessage)
                // The email of the user's account used.
                const email = error.customData.email;
                alert(email)
                // The AuthCredential type that was used.
                const credential = GoogleAuthProvider.credentialFromError(error);
                alert(credential)
                // ...
            });
    }
    return (
        <div className='login' >

            <div className='login__logo'>
                <img src='https://upload.wikimedia.org/wikipedia/commons/b/b8/2021_Facebook_icon.svg' alt='Logo' />

                <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Facebook_Logo_%282019%29.svg/2560px-Facebook_Logo_%282019%29.svg.png' alt='fb' />
            </div>


            <Button className='btn' type='submit' onClick={handleSubmit}>
                Sing In
            </Button>

        </div>
    )
}

export default Login