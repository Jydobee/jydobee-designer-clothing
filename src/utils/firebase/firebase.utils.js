import { initializeApp } from 'firebase/app';
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider} from 'firebase/auth';
import {
  getFirestore,
  doc, //Get a documents instance
  getDoc, // Get the document
  setDoc // Set the value of the document
  
} from 'firebase/firestore'

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

  export const db = getFirestore()

  export const createUserDocumentFromAuth = async (userAuth) => {
    const userDocRef = doc(db, 'users', userAuth.uid); //Database, Collection name, UID
    console.log(userDocRef);

    const userSnapshot = await getDoc(userDocRef);
    console.log(userSnapshot.exists());

    if (userSnapshot.exists()){
      return userDocRef;
    }

    else{
      const {displayName, email } = userAuth;
      const createdAt = new Date();

      try{
        await setDoc(userDocRef, {displayName, email, createdAt});
      }
      catch (error) {
        console.log('There was an error creating the user.', error.message);
      }
      return userDocRef;
    }
  }