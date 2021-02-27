export const createElement = (tag: string, classes: string[], text: string): HTMLElement => {
    const element = document.createElement(tag);
    classes.forEach((item) => {
        element.classList.add(item);
    });
    element.textContent = text;
    return element;
};