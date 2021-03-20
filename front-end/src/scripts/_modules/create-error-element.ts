import { createElement } from './create-element';
import { appendChildren } from './append-children';

export const createErrorElement = (mainElement: HTMLElement) => {
    mainElement.classList.add('error');
    const errorHeaderElement = createElement('h1', [], 'Error 404');
    const errorTextElement = createElement('h3', [], 'Could not find requested resource. Please go back to main page and try again.');
    const errorLinkElement: HTMLAnchorElement = document.createElement('a');
    if(errorLinkElement) {
        errorLinkElement.textContent = 'main page';
        errorLinkElement.href = './index.html';
    }
    appendChildren(mainElement, [
        errorHeaderElement, 
        errorTextElement, 
        errorLinkElement
    ]);
}