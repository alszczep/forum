import { appendChildren } from './../../_modules/append-children';
import { createElement } from './../../_modules/create-element';

export const createLoginForm = (mainElement: HTMLElement) => {
    const form = createElement('form', []);
    form.id = "loginForm";
    appendChildren(form, [
        createInputWithLabel(
            createLabel('login', 'Login: '),
            createInput('login', 'login', 'text')
        ),
        createInputWithLabel(
            createLabel('password', 'Password: '),
            createInput('password', 'password', 'password')
        ),
        createSubmitButton()
    ]);
    form.addEventListener('submit', formSubmitHandler);
    mainElement.appendChild(form);
};
const createInputWithLabel = (label: HTMLLabelElement, input: HTMLInputElement) => {
    const wrapper = createElement('section', ['inputWrapper']);
    appendChildren(wrapper, [
        label,
        input
    ]);
    return wrapper;
};
const createLabel = (forValue: string, text: string) => {
    const label = <HTMLLabelElement>createElement('label', ['loginFormLabel'], text);
    const l = document.createElement('label');
    label.htmlFor = forValue;
    return label;
};
const createInput = (name: string, id: string, type: string) => {
    const input = <HTMLInputElement>createElement('input', ['loginFormInput']);
    input.id = id;
    input.name = name;
    input.type = type;
    return input;
};
const createSubmitButton = () => {
    const input = <HTMLInputElement>createElement('input', ['loginSubmitButton']);
    input.type = 'submit';
    input.value = 'Log in';
    return input;
};
const formSubmitHandler = (event) => {
    event.preventDefault();
};
