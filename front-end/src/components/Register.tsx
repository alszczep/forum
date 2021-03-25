import { FC, useReducer, useRef, useState } from "react";
import { ActionInterface } from "../interfaces/ActionInterface";
import { RegisterInterface } from "../interfaces/RegisterInterface";
import { ValidationReturnInterface } from "../interfaces/ValidationReturnInterface";
import { validate } from "../modules/validate";
import { v4 as generateKey } from 'uuid';

const registerInitialState: RegisterInterface = {
    login: '',
    email: '',
    password: '',
    passwordRepeat: ''
}

const registerReducer = (state: RegisterInterface, action: ActionInterface) => {
    return {...state, [action.type]: action.payload.newValue};
};

const Register : FC = (): JSX.Element => {
    const [stateRegister, dispatchRegister] = useReducer(registerReducer, registerInitialState);
    const [errorList, setErrorList] = useState<JSX.Element[]>([]);
    const loginRef = useRef<HTMLInputElement>(null);
    const emailRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);
    const passwordRepeatRef = useRef<HTMLInputElement>(null);
    const types = ['login', 'email', 'password', 'passwordRepeat'];
    const refs = [loginRef, emailRef, passwordRef, passwordRepeatRef];
    const convertStringToLi = (validationResult: ValidationReturnInterface): JSX.Element[] => {
        if(!validationResult.passed && validationResult.error && validationResult.error.length > 0){
            return validationResult.error.map((item, index) => {
                return (<li key={generateKey()}>{item}</li>);
            });
        }
        return [];
    }
    const onInputChange = (type: string, ref: React.RefObject<HTMLInputElement>) => {
        return () => {
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
            console.log('registered: ', stateRegister);
        }
    }
    return (<main className='register'>
        <form id='loginForm' onSubmit={onFormSubmit} noValidate>
            <section className='labelWrapper'>
                <label className='formLabel' htmlFor='login'>Login</label>
                <label className='formLabel' htmlFor='email'>Email</label>
                <label className='formLabel' htmlFor='password'>Password</label>
                <label className='formLabel' htmlFor='passwordRepeat'>Repeat password</label>
            </section>
            <section className='inputWrapper'>
                <input value={stateRegister.login} ref={loginRef} onChange={onInputChange('login', loginRef)} maxLength={30} className='formInput' id='login' name='login' type='text'/>
                <input value={stateRegister.email} ref={emailRef} onChange={onInputChange('email', emailRef)} maxLength={320} className='formInput' id='email' name='email' type='email'/>
                <input value={stateRegister.password} ref={passwordRef} onChange={onInputChange('password', passwordRef)} maxLength={30} className='formInput' id='password' name='password' type='password'/>
                <input value={stateRegister.passwordRepeat} ref={passwordRepeatRef} onChange={onInputChange('passwordRepeat', passwordRepeatRef)} maxLength={30} className='formInput' id='passwordRepeat' name='passwordRepeat' type='password'/>
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