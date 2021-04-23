import { FC, useReducer, useRef, useState } from "react";
import { useHistory } from "react-router-dom";
import { onRegisterSubmit } from "../modules/register/on-register-submit";
import { onRegisterInputChange } from "../modules/register/on-register-input-change";
import { registerReducer } from "../modules/register/register-reducer";
import { registerInitialState } from "../modules/register/register-initial-state";
import ValidationErrorList from "./shared/ValidationErrorList";

const Register : FC = (): JSX.Element => {
    const [stateRegister, dispatchRegister] = useReducer(registerReducer, registerInitialState);
    const [errorList, setErrorList] = useState<JSX.Element[]>([]);
    const userNameRef = useRef<HTMLInputElement>(null);
    const emailRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);
    const confirmPasswordRef = useRef<HTMLInputElement>(null);
    const types = Object.freeze(['userName', 'email', 'password', 'confirmPassword']);
    const refs = Object.freeze([userNameRef, emailRef, passwordRef, confirmPasswordRef]);
    const history = useHistory();
    return (
        <main 
            className='main register'>
            <form 
                className='form' 
                onSubmit={(event: any) => {onRegisterSubmit(event, stateRegister, setErrorList, types, refs, history)}}
                noValidate>
                <section 
                    className='form__labels'>
                    <label 
                        className='form__label form__label--username' 
                        htmlFor='userName'>
                        Login
                    </label>
                    <label 
                        className='form__label form__label--email' 
                        htmlFor='email'>
                        Email
                    </label>
                    <label 
                        className='form__label form__label--password' 
                        htmlFor='password'>
                        Password
                    </label>
                    <label 
                        className='form__label form__label--confirm-password' 
                        htmlFor='confirmPassword'>
                        Confirm password
                    </label>
                </section>
                <section 
                    className='form__inputs'>
                    <input 
                        className='form__input form__input--field form__input--username'
                        value={stateRegister.userName} 
                        ref={userNameRef} 
                        onChange={() => {onRegisterInputChange('userName', userNameRef, setErrorList, dispatchRegister)}} 
                        maxLength={30}
                        name='userName' 
                        type='text'/>
                    <input 
                        className='form__input form__input--field form__input--email'
                        value={stateRegister.email} 
                        ref={emailRef} 
                        onChange={() => {onRegisterInputChange('email', emailRef, setErrorList, dispatchRegister)}} 
                        maxLength={320}
                        name='email' 
                        type='email'/>
                    <input 
                        className='form__input form__input--field form__input--password'
                        value={stateRegister.password} 
                        ref={passwordRef} 
                        onChange={() => {onRegisterInputChange('password', passwordRef, setErrorList, dispatchRegister)}} 
                        maxLength={30} 
                        name='password' 
                        type='password'/>
                    <input 
                        className='form__input form__input--field form__input--confirm-password'
                        value={stateRegister.confirmPassword} 
                        ref={confirmPasswordRef} 
                        onChange={() => {onRegisterInputChange('confirmPassword', confirmPasswordRef, setErrorList, dispatchRegister, passwordRef)}} 
                        maxLength={30}
                        name='confirmPassword' 
                        type='password'/>
                </section>
                <ValidationErrorList 
                    errorList={errorList}/>
                <input 
                    className='form__input form__input--submit'
                    type='submit' 
                    value='Register'/>
            </form>
        </main>
    )
}

export default Register;