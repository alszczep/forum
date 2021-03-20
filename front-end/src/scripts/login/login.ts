import { createLoginForm } from './modules/create-login-form';
import { initUi } from './../ui';
initUi();

const mainElement = document.querySelector('main')!;
mainElement.classList.add('login');
createLoginForm(mainElement);