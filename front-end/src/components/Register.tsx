import { FC, useReducer, useRef, useState } from "react";
import { useHistory } from "react-router-dom";
import { onRegisterSubmit } from "../modules/register/on-register-submit";
import { onRegisterInputChange } from "../modules/register/on-register-input-change";
import { registerReducer } from "../modules/register/register-reducer";
import { registerInitialState } from "../modules/register/register-initial-state";

const Register : FC = (): JSX.Element => {
    const [stateRegister, dispatchRegister] = useReducer(registerReducer, registerInitialState);
    const [errorList, setErrorList] = useState<JSX.Element[]>([]);
    const userNameRef = useRef<HTMLInputElement>(null);
    const emailRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);
    const confirmPasswordRef = useRef<HTMLInputElement>(null);
    const types = ['userName', 'email', 'password', 'confirmPassword'];
    const refs = [userNameRef, emailRef, passwordRef, confirmPasswordRef];
    const history = useHistory();
    return (
        <main 
            className='register'>
            <form 
                id='loginForm' 
                onSubmit={(event: any) => {onRegisterSubmit(event, stateRegister, setErrorList, types, refs, history)}} 
                noValidate>
                <section 
                    className='labelWrapper'>
                    <label 
                        className='formLabel' 
                        htmlFor='userName'>
                        Login
                    </label>
                    <label 
                        className='formLabel' 
                        htmlFor='email'>
                        Email
                    </label>
                    <label 
                        className='formLabel' 
                        htmlFor='password'>
                        Password
                    </label>
                    <label 
                        className='formLabel' 
                        htmlFor='confirmPassword'>
                        Confirm password
                    </label>
                </section>
                <section 
                    className='inputWrapper'>
                    <input 
                        value={stateRegister.userName} 
                        ref={userNameRef} 
                        onChange={() => {onRegisterInputChange('userName', userNameRef, setErrorList, dispatchRegister)}} 
                        maxLength={30} 
                        className='formInput' 
                        id='userName' 
                        name='userName' 
                        type='text'/>
                    <input 
                        value={stateRegister.email} 
                        ref={emailRef} 
                        onChange={() => {onRegisterInputChange('email', emailRef, setErrorList, dispatchRegister)}} 
                        maxLength={320} 
                        className='formInput' 
                        id='email' 
                        name='email' 
                        type='email'/>
                    <input 
                        value={stateRegister.password} 
                        ref={passwordRef} 
                        onChange={() => {onRegisterInputChange('password', passwordRef, setErrorList, dispatchRegister)}} 
                        maxLength={30} 
                        className='formInput' 
                        id='password' 
                        name='password' 
                        type='password'/>
                    <input 
                        value={stateRegister.confirmPassword} 
                        ref={confirmPasswordRef} 
                        onChange={() => {onRegisterInputChange('confirmPassword', confirmPasswordRef, setErrorList, dispatchRegister, passwordRef)}} 
                        maxLength={30} 
                        className='formInput' 
                        id='confirmPassword' 
                        name='confirmPassword' 
                        type='password'/>
                </section>
                <section 
                    className='validationErrorsWrapper'>
                    <ul 
                        className='validationErrors'>
                        {
                            errorList.map(item => item)
                        }
                    </ul>
                </section>
                <input 
                    className='submitButton' 
                    type='submit' 
                    value='Register'/>
            </form>
        </main>
    )
}

export default Register;