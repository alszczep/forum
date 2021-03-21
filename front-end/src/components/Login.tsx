import { FC } from "react";

const Login : FC = (): JSX.Element => {
    return (<main className='login'>
        <form id='loginForm'>
            <section className='labelWrapper'>
                <label className='formLabel' htmlFor='login'>Login</label>
                <label className='formLabel' htmlFor='password'>Password</label>
            </section>
            <section className='inputWrapper'>
                <input className='formInput' id='login' name='login' type='text'/>
                    <input className='formInput' id='password' name='password' type='password'/>
            </section>
            <input className='submitButton' type='submit' value='Log in'/>
        </form>
    </main>)
}

export default Login;