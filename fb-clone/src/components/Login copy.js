// import { Button } from '@mui/material'
import React, {useState} from 'react'
import './Login.css'
// import {auth} from './firebase.js'
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

// Import firebase
import { initializeApp} from 'firebase/app';
import { getFirestore} from 'firebase/firestore/lite';
// import { getAuth } from "firebase/auth";

// Import firebase config from firebase site
const firebaseConfig = {
  apiKey: "AIzaSyBHaXEZrY0uZkh2FZkGcEvMB21A_piKN_M",
  authDomain: "facebook-clone-92276.firebaseapp.com",
  projectId: "facebook-clone-92276",
  storageBucket: "facebook-clone-92276.appspot.com",
  messagingSenderId: "570229293942",
  appId: "1:570229293942:web:2cff449e50dd81b64b3057",
  measurementId: "G-1CJ00J8F79"
};


const provider = new GoogleAuthProvider();
// initialize firebase
const app = initializeApp(firebaseConfig)

// initialize firebase database
const db = getFirestore(app)

// initialize firebase authentication
const auth = getAuth(app);


function Login() {
    // const signIn = () =>{
        
    // }

    const [input, setInput] = useState('')
    const [ImageURL, setImageUrl] = useState('')

    // firebase.auth().signInWithEmailAndPassword(input, ImageURL)
    // .then((userCredential) => {
    //     // Signed in
    //     var user = userCredential.user;
    //     // ...
    // })
    // .catch((error) => {
    //     alert(error)
    // });


    const handleSubmit = (e) =>{
        e.preventDefault();

        console.log(input)
        console.log(ImageURL)
        
        
        const auth = getAuth();
        signInWithEmailAndPassword(auth, input, ImageURL)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                // ...
                console.log(user)

            })
            .catch((error) => {
                alert(error)
                // ..
            });

            // const auth = getAuth();
            onAuthStateChanged(auth, (user) => {
            if (user) {
                // User is signed in, see docs for a list of available properties
                // https://firebase.google.com/docs/reference/js/firebase.User
                const uiddisplayName = user.displayName;
                console.log(uiddisplayName)
                // ...
            } else {
                // User is signed out
                // ...
            }
            });

        setImageUrl("")
        setInput("")
    }
  return (
    <div className='login' >

        <div className='login__logo'>
        <img src='https://upload.wikimedia.org/wikipedia/commons/b/b8/2021_Facebook_icon.svg' alt='Logo' />

        <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Facebook_Logo_%282019%29.svg/2560px-Facebook_Logo_%282019%29.svg.png' alt='fb'/>
        </div>

        <form >
            <input 
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className='message__sender__input' 
            type='text' 
            placeholder='Enter email'
            />
            <input
            value={ImageURL}
            onChange={(e) => setImageUrl(e.target.value)}
            type='text' 
            placeholder='Password' 
            className='message__sender__url'
            />

            <button type='submit' className='btn' onClick={handleSubmit}>Sing In</button>

            </form>

        {/* <Button className='btn' type='submit'>
            Sing In
        </Button> */}

    </div>
  )
}

export default Login