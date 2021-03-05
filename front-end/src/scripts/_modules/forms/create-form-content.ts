import { appendChildren } from './../append-children';
import { createElement } from '../create-element';
import { Input } from './../../_interfaces/forms/Input';
import { Label } from './../../_interfaces/forms/Label';
import { createLabel } from './create-label';
import { createInput } from './create-input';

export const createFormContent = (form: HTMLFormElement ,labels: Label[], inputs: Input[]): HTMLFormElement => {
    const labelWrapper = createElement('section', ['labelWrapper']);
    const inputWrapper = createElement('section', ['inputWrapper']);
    appendChildren(labelWrapper, labels.map((item) => {
        return createLabel(item);
    }));
    appendChildren(inputWrapper, inputs.map((item) => {
        return createInput(item);
    }));
    appendChildren(form, [labelWrapper, inputWrapper]);
    return form;
}