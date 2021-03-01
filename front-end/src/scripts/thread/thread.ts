import { initUi } from './../ui';
import { createErrorElement } from './../_modules/create-error-element';
import { createThread } from './modules/create-thread';
initUi();

const mainElement: HTMLElement = document.querySelector('main')!;
mainElement.classList.add('thread');
if(!localStorage.getItem('currentThreadId')) createErrorElement(mainElement);
else createThread(mainElement);