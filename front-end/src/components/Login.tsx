import { useState } from "react";
import { useRef } from "react";
import { FC } from "react";
import { fetchData } from "../modules/fetch-data";
import { useHistory } from "react-router-dom";
import { onLoginFormSubmit } from "../modules/login/on-login-form-submit";

const url = 'https://localhost:5001/api/User/login';

const Login : FC<any> = (props): JSX.Element => {
    const [userName, setUserName] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const userNameRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);
    const history = useHistory();
    const getData = async() => {
        let result = (await fetchData(url, 'POST', {userName: userName, password: password}));
        if(result.status.succeeded && result.uInfo){
            props.setUserData({...(result.uInfo), userName: userName});
            history.push('/');
        }else{
            //error
        }
    }
    return (
        <main 
            className='main login'>
            <form 
                className='form' 
                onSubmit={(event: any) => onLoginFormSubmit(event, userName, password, getData)}
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
                <input 
                    className='form__input form__input--submit'
                    type='submit' 
                    value='Log in'/>
            </form>
        </main>
    )
}

export default Login;