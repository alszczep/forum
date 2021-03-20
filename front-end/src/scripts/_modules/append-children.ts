export const appendChildren = (element: HTMLElement, children: HTMLElement[]) => {
    children.forEach((child) => {
        element.appendChild(child);
    })
}