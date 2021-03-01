export const createElement = (tag: string, classes: string[], text?: string | number): HTMLElement => {
    const element = document.createElement(tag);
    classes.forEach((item) => {
        element.classList.add(item);
    });
    if(typeof text == 'number')
        text = text.toString();
    if(text) element.textContent = text;
    return element;
};