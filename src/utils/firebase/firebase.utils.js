import { initializeApp } from 'firebase/app';
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider} from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBWSfsax1K9NkLQIRR93Bl8dwLZlvykAec",
    authDomain: "jydobee-designer-db.firebaseapp.com",
    projectId: "jydobee-designer-db",
    storageBucket: "jydobee-designer-db.appspot.com",
    messagingSenderId: "904464390794",
    appId: "1:904464390794:web:d3e62f6178760ed5d1eb73"
  };
  
  // Initialize Firebase
  const firebaseApp = initializeApp(firebaseConfig);

  const provider = new GoogleAuthProvider();
  provider.setCustomParameters({
    prompt: "select_account"
  })

  export const auth = getAuth();
  export const signInWithGooglePopup = () => signInWithPopup(auth, provider);