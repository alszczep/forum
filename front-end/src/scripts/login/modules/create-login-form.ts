import { createFormContent } from './../../_modules/forms/create-form-content';
import { createInput } from '../../_modules/forms/create-input';
import { createLabel } from '../../_modules/forms/create-label';
import { appendChildren } from './../../_modules/append-children';
import { createElement } from './../../_modules/create-element';
import { createSubmitButton } from '../../_modules/forms/create-submit-button';

export const createLoginForm = (mainElement: HTMLElement) => {
    const form = <HTMLFormElement>createElement('form', []);
    form.id = "loginForm";
    createFormContent(form, [
        {forValue: 'login', text: 'Login'},
        {forValue: 'password', text: 'Password'}
    ], [
        {name: 'login', id: 'login', type: 'text'},
        {name: 'password', id: 'password', type: 'password'}
    ]);
    form.appendChild(createSubmitButton('Log in'));
    form.addEventListener('submit', formSubmitHandler);
    mainElement.appendChild(form);
};

const formSubmitHandler = (event) => {
    event.preventDefault();
    console.log('submit');
};
