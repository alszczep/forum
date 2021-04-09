import { FC, useReducer, useRef, useState } from "react";
import { ActionInterface } from "../interfaces/ReducerActionInterface";
import { RegisterInterface } from "../interfaces/RegisterInterface";
import { validate } from "../modules/validate";
import { fetchData } from "../modules/fetch-data";
import { MD5 } from "crypto-js";
import { convertStringToLi } from "../modules/convert-string-to-li";

const url = 'https://localhost:5001/api/User/register';

const registerInitialState: RegisterInterface = {
    userName: '',
    email: '',
    password: '',
    confirmPassword: ''
}

const registerReducer = (state: RegisterInterface, action: ActionInterface) => {
    return {...state, [action.type]: action.payload.newValue};
};

const Register : FC = (): JSX.Element => {
    const [stateRegister, dispatchRegister] = useReducer(registerReducer, registerInitialState);
    const [errorList, setErrorList] = useState<JSX.Element[]>([]);
    const userNameRef = useRef<HTMLInputElement>(null);
    const emailRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);
    const confirmPasswordRef = useRef<HTMLInputElement>(null);
    const types = ['userName', 'email', 'password', 'confirmPassword'];
    const refs = [userNameRef, emailRef, passwordRef, confirmPasswordRef];
    const onInputChange = (type: string, ref: React.RefObject<HTMLInputElement>) => {
            if(ref && ref.current){
                dispatchRegister({type: type, payload: {newValue: ref.current.value}});
                let validationResult;
                if(type === 'passwordRepeat'){
                    if(passwordRef.current) validationResult = validate({type: type, newValue: ref.current.value, passwordValue: passwordRef.current.value});
                }
                else validationResult = validate({type: type, newValue: ref.current.value});
                if(validationResult && !validationResult.passed) setErrorList(convertStringToLi(validationResult));
                else setErrorList([]);
            }
    }
    const onFormSubmit = (event: any) => {
        event.preventDefault();
        setErrorList([]);
        let newErrorList: JSX.Element[] = [];
        types.forEach((type, index) => {
            let ref = refs[index];
            if(ref && ref.current){
                let validationResult;
                if(type === 'passwordRepeat'){
                    if(passwordRef.current) validationResult = validate({type: type, newValue: ref.current.value, passwordValue: passwordRef.current.value});
                }
                else validationResult = validate({type: type, newValue: ref.current.value});
                if(validationResult && !validationResult.passed){
                    let convertedResult = convertStringToLi(validationResult);
                    convertedResult.forEach((item) => {
                        newErrorList.push(item);
                    });
                }     
            }  
        });
        if(newErrorList.length > 0)
            setErrorList(newErrorList);
        else{
            let result = fetchData(url, 'POST', {...stateRegister, password: MD5(stateRegister.password).toString(), confirmPassword: MD5(stateRegister.confirmPassword).toString()});
            console.log(result);
        }
    }
    return (<main className='register'>
        <form id='loginForm' onSubmit={onFormSubmit} noValidate>
            <section className='labelWrapper'>
                <label className='formLabel' htmlFor='userName'>Login</label>
                <label className='formLabel' htmlFor='email'>Email</label>
                <label className='formLabel' htmlFor='password'>Password</label>
                <label className='formLabel' htmlFor='confirmPassword'>Confirm password</label>
            </section>
            <section className='inputWrapper'>
                <input value={stateRegister.userName} ref={userNameRef} onChange={() => {onInputChange('userName', userNameRef)}} maxLength={30} className='formInput' id='userName' name='userName' type='text'/>
                <input value={stateRegister.email} ref={emailRef} onChange={() => {onInputChange('email', emailRef)}} maxLength={320} className='formInput' id='email' name='email' type='email'/>
                <input value={stateRegister.password} ref={passwordRef} onChange={() => {onInputChange('password', passwordRef)}} maxLength={30} className='formInput' id='password' name='password' type='password'/>
                <input value={stateRegister.confirmPassword} ref={confirmPasswordRef} onChange={() => {onInputChange('confirmPassword', confirmPasswordRef)}} maxLength={30} className='formInput' id='confirmPassword' name='confirmPassword' type='password'/>
            </section>
            <section className='validationErrorsWrapper'>
                <ul className='validationErrors'>
                    {errorList.map(item => item)}
                </ul>
            </section>
            <input className='submitButton' type='submit' value='Register'/>
        </form>
    </main>)
}

export default Register;