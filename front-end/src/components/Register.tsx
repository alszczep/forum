import { FC } from "react";

const Register : FC = (): JSX.Element => {
    return (<main className='register'>
        <form id='loginForm'>
            <section className='labelWrapper'>
                <label className='formLabel' htmlFor='login'>Login</label>
                <label className='formLabel' htmlFor='email'>Email</label>
                <label className='formLabel' htmlFor='password'>Password</label>
                <label className='formLabel' htmlFor='passwordRepeat'>Repeat password</label>
            </section>
            <section className='inputWrapper'>
                <input className='formInput' id='login' name='login' type='text'/>
                <input className='formInput' id='email' name='email' type='email'/>
                <input className='formInput' id='password' name='password' type='password'/>
                <input className='formInput' id='passwordRepeat' name='passwordRepeat' type='password'/>
            </section>
            <input className='submitButton' type='submit' value='Register'/>
        </form>
    </main>)
}

export default Register;