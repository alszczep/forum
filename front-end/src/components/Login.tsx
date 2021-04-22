import { useState } from "react";
import { useRef } from "react";
import { FC } from "react";
import { fetchData } from "../modules/fetch-data";
import { PBKDF2 } from "crypto-js";
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
        //const salt = await fetchData(salt_url,'GET', {userName: userName});
        const salt = 'placeholder';
        props.setUserData({...(await fetchData(url, 'POST', {userName: userName, password: PBKDF2(password, salt).toString()})), userName: userName});
        history.push('/');
    }
    return (
        <main 
            className='login'>
            <form 
                id='loginForm' 
                onSubmit={(event: any) => onLoginFormSubmit(event, userName, password, getData)}>
                <section 
                    className='labelWrapper'>
                    <label 
                        className='formLabel' 
                        htmlFor='username'>
                        Login
                    </label>
                    <label 
                        className='formLabel' 
                        htmlFor='password'>
                        Password
                    </label>
                </section>
                <section 
                    className='inputWrapper'>
                    <input 
                        ref={userNameRef} 
                        value={userName} 
                        onChange={() => {if(userNameRef && userNameRef.current) setUserName(userNameRef.current.value)}} 
                        className='formInput' 
                        id='username' 
                        name='username' 
                        type='text'/>
                    <input 
                        ref={passwordRef} 
                        value={password} 
                        onChange={() => {if(passwordRef && passwordRef.current) setPassword(passwordRef.current.value)}} 
                        className='formInput' 
                        id='password' 
                        name='password' 
                        type='password'/>
                </section>
                <input 
                    className='submitButton' 
                    type='submit' 
                    value='Log in'/>
            </form>
        </main>
    )
}

export default Login;