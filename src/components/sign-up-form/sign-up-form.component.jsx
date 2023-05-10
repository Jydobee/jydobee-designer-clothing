import { async } from "@firebase/util";
import { useState } from "react";
import FormInput from "../form-input/form-input.component";

import Button from "../button/button.component";
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";

import './sign-up-form.styles.scss';

// Doing this only because the object is tied togther 
const defaultFormFields = {
    displayName: ' ',
    email: '',
    password: '',
    confirmPassword: '' 
}

const SignUpForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const {displayName, email, password, confirmPassword } = formFields;

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (password !== confirmPassword) {
            alert("Passwords do not match.")
            return;
        } 
       
        try{
        //if (password === confirmPassword) {
            console.log(password)
            const {user} = await createAuthUserWithEmailAndPassword(email, password);
    
            await createUserDocumentFromAuth(user, {displayName});
            resetFormFields();
        }

       
        
        catch (error) {
            if (error.code === 'auth/email-already-in-use'){
                alert('User email already in use.')
            }
            console.log("User creation encountered an error" + error)
        }
        
        // Are the passwords the same

        // have we authenticated this user with the email and password

        // We want to create a user document from what it returns.
    }


    const handleChange = (event) => {
        const {name, value} = event.target;
        setFormFields({...formFields, [name]: value }) // Only works when you can genericize
    };
    return (
        <div className='sign-up-container'>
        <h2>Don't have an account?</h2>
            <span>Sign up with your email and password</span>
            <form onSubmit={handleSubmit}>
               
                <FormInput label = "Display Name" type="text" required onChange={handleChange} name='displayName'  value={displayName} />

              
                <FormInput label = "Email" type='email' required onChange={handleChange} name='email' value={email}/>

              
                <FormInput label = "Password" type='password'required onChange={handleChange} name='password' value={password}/>

              
                <FormInput label = "Confirm Password" type='password' required onChange={handleChange} name='confirmPassword' value={confirmPassword}/>
                
                <Button type="submit" onChange={handleSubmit}>Sign Up</Button>

            </form>
        </div>
        
    );
}

export default SignUpForm;