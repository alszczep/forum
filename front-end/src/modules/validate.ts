import { ValidationReturnInterface } from '../interfaces/return/ValidationReturnInterface';
import { ValidationArgsInterface } from '../interfaces/args/ValidationArgsInterface';

export const MIN_CHARACTERS = {
    userName: 3,
    email: 3,
    password: 6,
    passwordRepeat: 6
}

export const errorTexts = {
    userName: {
        length: `Login has to be at least ${MIN_CHARACTERS.userName} characters long`,
        correctness: 'Username can only consist of letters and digits. No symbols or whitespace allowed.'
    },
    email: {
        length: `Email has to be at least ${MIN_CHARACTERS.email} characters long`,
        correctness: 'Email is incorrect'
    },
    password: {
        length: `Password has to be at least ${MIN_CHARACTERS.password} characters long`,
        correctness: 'Password has to contain lowercase letter, uppercase letter and a digit'
    },
    passwordRepeat: {
        correctness: 'Passwords have to match'
    }
}

export const validate = ({ type, newValue, passwordValue }: ValidationArgsInterface): ValidationReturnInterface => {
    let error: string[] = [];
    switch(type){
        case 'userName':
            const userRegex = /^[a-zA-Z0-9]*$/g;
            if(!userRegex.test(newValue))
                error.push(errorTexts.userName.correctness);
            if(newValue.length < MIN_CHARACTERS.userName)
                error.push(errorTexts.userName.length);
            break;
        case 'email':
            const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            if(newValue.length < MIN_CHARACTERS.email)
                error.push(errorTexts.email.length);
            if(!emailRegex.test(newValue))
                error.push(errorTexts.email.correctness);
            break;
        case 'password':
            if(newValue.length < MIN_CHARACTERS.password)
                error.push(errorTexts.password.length);
            if(!(/[A-Z]/.test(newValue) && /[a-z]/.test(newValue) && /\d/.test(newValue)))
                error.push(errorTexts.password.correctness);
            break;
        case 'passwordRepeat':
            if(newValue !== passwordValue)
                error.push(errorTexts.passwordRepeat.correctness);
            break;
    }
    if(error.length > 0)
        return { passed: false, error: error};
    return { passed: true };
}