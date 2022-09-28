import { Button } from '@mui/material'
import React from 'react'
import './Login.css'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";


function Login() {
    const signIn = () =>{
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
        });
    }
  return (
    <div className='login' >

        <div className='login__logo'>
        <img src='https://upload.wikimedia.org/wikipedia/commons/b/b8/2021_Facebook_icon.svg' alt='Logo' />

        <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Facebook_Logo_%282019%29.svg/2560px-Facebook_Logo_%282019%29.svg.png' alt='fb'/>
        </div>

        <Button className='btn' type='submit' onClick={signIn}>
            Sing In
        </Button>

    </div>
  )
}

export default Login