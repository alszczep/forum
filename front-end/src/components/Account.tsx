import { FC, useState, useRef } from "react";
import { UserDataInterface } from "../interfaces/UserDataInterface";

const Account : FC<{userData: UserDataInterface | undefined}> = ({ userData }): JSX.Element => {
    const [newEmail, setNewEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const newEmailRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);
    const [currentPassword, setCurrentPassword] = useState<string>('');
    const [newPassword, setNewPassword] = useState<string>('');
    const [confirmNewPassword, setConfirmNewPassword] = useState<string>('');
    const currentPasswordRef = useRef<HTMLInputElement>(null);
    const newPasswordRef = useRef<HTMLInputElement>(null);
    const confirmNewPasswordRef = useRef<HTMLInputElement>(null);
    return (
        <main 
            className='main account'>
            <h1
                className='account__header account__header--username'>
                Hi, {userData?.userName}
            </h1>
            <h3
                className='account__header account__header--email'>
                Your current email: {userData?.email}
            </h3>
            <form 
                className='form form--change-email' 
                onSubmit={(event: any) => {/* change email */}}
                noValidate
                autoComplete='off'>
                <h2 
                    className='form__header form__header--change-email'>
                    Change your email
                </h2>
                <section 
                    className='form__labels'>
                    <label 
                        className='form__label form__label--new-email' 
                        htmlFor='newEmail'>
                        New email
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
                        className='form__input form__input--field form__input--new-email'
                        ref={newEmailRef} 
                        value={newEmail} 
                        onChange={() => {if(newEmailRef && newEmailRef.current) setNewEmail(newEmailRef.current.value)}} 
                        name='newEmail' 
                        type='text'/>
                    <input 
                        className='form__input form__input--field form__input--new-password'
                        ref={passwordRef} 
                        value={password} 
                        onChange={() => {if(passwordRef && passwordRef.current) setPassword(passwordRef.current.value)}} 
                        name='password' 
                        type='text'/>
                </section>
                <input 
                    className='form__input form__input--submit'
                    type='submit' 
                    value='Change email'/>
            </form>

            <form 
                className='form form--change-password' 
                onSubmit={(event: any) => {/* change password */}}
                noValidate
                autoComplete='off'>
                <h2 
                    className='form__header form__header--change-password'>
                    Change your password
                </h2>
                <section 
                    className='form__labels'>
                    <label 
                        className='form__label form__label--current-password' 
                        htmlFor='currentPassword'>
                        Current Password
                    </label>
                    <label 
                        className='form__label form__label--new-password' 
                        htmlFor='password'>
                        New Password
                    </label>
                    <label 
                        className='form__label form__label--confirm-new-assword' 
                        htmlFor='password'>
                        Confirm New Password
                    </label>
                </section>
                <section 
                    className='form__inputs'>
                    <input 
                        className='form__input form__input--field form__input--current-password'
                        ref={currentPasswordRef} 
                        value={currentPassword} 
                        onChange={() => {if(currentPasswordRef && currentPasswordRef.current) setCurrentPassword(currentPasswordRef.current.value)}} 
                        name='currentPassword' 
                        type='text'/>
                    <input 
                        className='form__input form__input--field form__input--new-password'
                        ref={newPasswordRef} 
                        value={newPassword} 
                        onChange={() => {if(newPasswordRef && newPasswordRef.current) setNewPassword(newPasswordRef.current.value)}} 
                        name='newPassword' 
                        type='text'/>
                    <input 
                        className='form__input form__input--field form__input--password'
                        ref={confirmNewPasswordRef} 
                        value={confirmNewPassword} 
                        onChange={() => {if(confirmNewPasswordRef && confirmNewPasswordRef.current) setConfirmNewPassword(confirmNewPasswordRef.current.value)}} 
                        name='currentPassword' 
                        type='password'/>
                </section>
                <input 
                    className='form__input form__input--submit'
                    type='submit' 
                    value='Change password'/>
            </form>
        </main>
    )
}

export default Account;