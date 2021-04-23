import { FC, useState, useRef } from "react";
import { useHistory } from "react-router-dom";
import { onLoginFormSubmit } from "../modules/login/on-login-form-submit";
import { UserDataInterface } from "../interfaces/UserDataInterface";
import ValidationErrorList from "./shared/ValidationErrorList";

const Login : FC<{setUserData: React.Dispatch<React.SetStateAction<UserDataInterface | undefined>>}> = ({ setUserData }): JSX.Element => {
    const [userName, setUserName] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [errorList, setErrorList] = useState<JSX.Element[]>([]);
    const userNameRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);
    const history = useHistory();
    return (
        <main 
            className='main login'>
            <form 
                className='form' 
                onSubmit={(event: any) => onLoginFormSubmit(event, userName, password, setUserData, history, setErrorList)}
                noValidate>
                <section 
                    className='form__labels'>
                    <label 
                        className='form__label form__label--username' 
                        htmlFor='username'>
                        Login
                    </label>
                    <label 
                        className='form__label form__label--password' 
                        htmlFor='password'>
                        Password
                    </label>
                </section>
                <section 
                    className='form__inputs'>
                    <input 
                        className='form__input form__input--field form__input--username'
                        ref={userNameRef} 
                        value={userName} 
                        onChange={() => {if(userNameRef && userNameRef.current) setUserName(userNameRef.current.value)}} 
                        id='username' 
                        name='username' 
                        type='text'/>
                    <input 
                        className='form__input form__input--field form__input--password'
                        ref={passwordRef} 
                        value={password} 
                        onChange={() => {if(passwordRef && passwordRef.current) setPassword(passwordRef.current.value)}} 
                        id='password' 
                        name='password' 
                        type='password'/>
                </section>
                <ValidationErrorList errorList={errorList}/>
                <input 
                    className='form__input form__input--submit'
                    type='submit' 
                    value='Log in'/>
            </form>
        </main>
    )
}

export default Login;