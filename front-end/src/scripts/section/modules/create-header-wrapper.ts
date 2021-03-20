import { appendChildren } from './../../_modules/append-children';
import { createElement } from './../../_modules/create-element';
export const createHeaderWrapper = () => {
    const wrapper = createElement('section', ['headerWrapper']);
    const newThreadButton = <HTMLButtonElement>createElement('button', ['newThreadButton'], 'new thread');
    newThreadButton.addEventListener('click', newThreadButtonHandler());
    appendChildren(wrapper, [
        <HTMLHeadingElement>createElement('h1' , ['threadsHeader'], localStorage.getItem('currentSection')!),
        newThreadButton
    ]);
    return wrapper;
}
const newThreadButtonHandler = () => {
    return (event) => {
        
    };
}