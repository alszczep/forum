import { Label } from './../../_interfaces/forms/Label';
import { createElement } from "../create-element";

export const createLabel = (attributes: Label): HTMLLabelElement => {
    const label = <HTMLLabelElement>createElement('label', ['formLabel'], `${attributes.text}`);
    label.htmlFor = attributes.forValue;
    return label;
};