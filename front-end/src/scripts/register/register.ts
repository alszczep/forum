import { initUi } from './../ui';
import { createRegisterForm } from './modules/create-register-form';
initUi();

const mainElement = document.querySelector('main')!;
mainElement.classList.add('register');
createRegisterForm(mainElement);