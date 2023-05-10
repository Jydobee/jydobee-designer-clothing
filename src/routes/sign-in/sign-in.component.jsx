import {createUserDocumentFromAuth, signInWithGooglePopup,  } from "../../utils/firebase/firebase.utils";

import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
 
const SignIn = () => {
  
    const logGoogleUser = async () => {
        const {user} = await signInWithGooglePopup();
        createUserDocumentFromAuth(user);
    
    };

    return (
        <div>
            <h1>SIGN IN PAGE</h1>
            <button onClick={logGoogleUser}>
                Sign in with Google
            </button>
            <SignUpForm/>
        </div>
    );
}

export default SignIn;