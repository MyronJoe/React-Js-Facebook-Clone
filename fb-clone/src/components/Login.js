import { Button } from '@mui/material'
import React from 'react'
import './Login.css'
// import {auth} from './firebase.js'
import { getAuth, signInWithPopup, GoogleAuthProvider} from "firebase/auth";
import { provider } from "./firebase.js";

function Login() {
    const handleSubmit = (e) =>{
        const auth = getAuth();
        signInWithPopup(auth, provider)
        .then((result) => {
            // This gives you a Google Access Token. You can use it to access the Google API.
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            console.log(token)
            // The signed-in user info.
            const user = result.user;
            console.log(user)
            // ...
        }).catch((error) => {
            // Handle Errors here.
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

        <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Facebook_Logo_%282019%29.svg/2560px-Facebook_Logo_%282019%29.svg.png' alt='fb'/>
        </div>


        <Button className='btn' type='submit' onClick={handleSubmit}>
            Sing In
        </Button>

    </div>
  )
}

export default Login