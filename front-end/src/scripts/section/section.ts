import { initUi } from './../ui';
initUi();

const displayError = (mainElement: HTMLElement) => {
    mainElement.classList.add('error');
    const errorHeaderElement: HTMLHeadingElement = document.createElement('h1');
    if(errorHeaderElement) errorHeaderElement.textContent = 'Error 404';
    const errorTextElement: HTMLHeadingElement = document.createElement('h3');
    if(errorTextElement) errorTextElement.textContent = 'Could not find requested resource. Please go back to main page and try again.';
    const errorLinkElement: HTMLAnchorElement = document.createElement('a');
    if(errorLinkElement) {
        errorLinkElement.textContent = 'main page';
        errorLinkElement.href = './index.html';
    }
    mainElement.appendChild(errorHeaderElement);
    mainElement.appendChild(errorTextElement);
    mainElement.appendChild(errorLinkElement);
}
const displayThreads = (mainElement: HTMLElement) => {
    mainElement.textContent = localStorage.getItem('currentSection')
}

const mainElement: HTMLElement = document.querySelector('main')!;
if(!localStorage.getItem('currentSection')) displayError(mainElement);
else displayThreads(mainElement);

