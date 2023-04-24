import "../navigation/navigation.styles.scss"
import { createUserDocumentFromAuth, signInWithGooglePopup } from "../../utils/firebase/firebase.utils";
const SignIn = () => {

    const logGoogleUser = async () => {
        const {user} = await signInWithGooglePopup();
        createUserDocumentFromAuth(user);
    
    }
    return (
        <div>
            <h1>I am the sign in page.</h1>
            <button onClick={logGoogleUser}>
                Sign in with Google
            </button>
        </div>
    );
}

export default SignIn;