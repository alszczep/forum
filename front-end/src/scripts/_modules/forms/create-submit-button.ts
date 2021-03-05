import { createElement } from './../create-element';

export const createSubmitButton = (text: string) => {
    const input = <HTMLInputElement>createElement('input', ['submitButton']);
    input.type = 'submit';
    input.value = text;
    return input;
};