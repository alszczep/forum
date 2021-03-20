import { createSubmitButton } from '../../_modules/forms/create-submit-button';
import { createElement } from './../../_modules/create-element';
import { createFormContent } from './../../_modules/forms/create-form-content';

export const createRegisterForm = (mainElement: HTMLElement) => {
    const form = <HTMLFormElement>createElement('form', []);
    form.id = "loginForm";
    createFormContent(form, [
        {forValue: 'login', text: 'Login'},
        {forValue: 'email', text: 'Email'},
        {forValue: 'password', text: 'Password'},
        {forValue: 'passwordRepeat', text: 'Repeat password'}
    ], [
        {name: 'login', id: 'login', type: 'text'},
        {name: 'email', id: 'email', type: 'email'},
        {name: 'password', id: 'password', type: 'password'},
        {name: 'passwordRepeat', id: 'passwordRepeat', type: 'password'}
    ]);
    form.appendChild(createSubmitButton('Register'));
    form.addEventListener('submit', formSubmitHandler);
    mainElement.appendChild(form);
};

const formSubmitHandler = (event) => {
    event.preventDefault();
    console.log('submit');
};