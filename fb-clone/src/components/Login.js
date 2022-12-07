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
        const auth = 'Joe';
        dispatch({
            type: actionType.SET_USER,
            user: 'Joe',
        })
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