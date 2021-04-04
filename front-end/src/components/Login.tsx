import { useState } from "react";
import { useRef } from "react";
import { FC } from "react";
import { fetchData } from "../modules/fetch-data";
import { MD5 } from "crypto-js";

const url = 'https://localhost:5001/api/User/login';

const Login : FC = (): JSX.Element => {
    const [userName, setUserName] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const userNameRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);
    const onLoginFormSubmit = (event: any) => {
        event.preventDefault();
        if(userName !== '' && password !== ''){
            let result = fetchData(url, 'POST', {userName: userName, password: MD5(password).toString()});
            console.log(result);
        }
    }
    return (<main className='login'>
        <form id='loginForm' onSubmit={onLoginFormSubmit}>
            <section className='labelWrapper'>
                <label className='formLabel' htmlFor='username'>Login</label>
                <label className='formLabel' htmlFor='password'>Password</label>
            </section>
            <section className='inputWrapper'>
                <input ref={userNameRef} value={userName} onChange={() => {if(userNameRef && userNameRef.current) setUserName(userNameRef.current.value)}} className='formInput' id='username' name='username' type='text'/>
                <input ref={passwordRef} value={password} onChange={() => {if(passwordRef && passwordRef.current) setPassword(passwordRef.current.value)}} className='formInput' id='password' name='password' type='password'/>
            </section>
            <input className='submitButton' type='submit' value='Log in'/>
        </form>
    </main>)
}

export default Login;