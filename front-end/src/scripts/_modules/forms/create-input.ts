import { createElement } from "../create-element";
import { Input } from './../../_interfaces/forms/Input';

export const createInput = (attributes: Input): HTMLInputElement => {
    const input = <HTMLInputElement>createElement('input', ['formInput']);
    input.id = attributes.id;
    input.name = attributes.name;
    input.type = attributes.type;
    return input;
};