// Import firebase
import { initializeApp} from 'firebase/app';
import { getFirestore} from 'firebase/firestore/lite';
import { getAuth, GoogleAuthProvider } from "firebase/auth";

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


// initialize firebase
const app = initializeApp(firebaseConfig)

// initialize firebase database
const db = getFirestore(app)

// initialize firebase authentication
const auth = getAuth(app);

// initialize firebase Provider for login support
const provider = new GoogleAuthProvider();

export{auth, provider}
export default db;
