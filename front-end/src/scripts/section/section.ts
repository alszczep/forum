import { initUi } from './../ui';
import { createErrorElement } from './../_modules/create-error-element';
import { createThreadsElement } from './modules/create-threads-element';
initUi();

const mainElement: HTMLElement = document.querySelector('main')!;
mainElement.classList.add('section');
if(!localStorage.getItem('currentSection')) createErrorElement(mainElement);
else createThreadsElement(mainElement);

