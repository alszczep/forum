import './../../styles/style.scss';
import sunImage from './../../images/sun.svg';
import moonImage from './../../images/moon.svg';

const mainPageButtonHandler = () => {
    window.location.assign('./index.html');
};
const loginButtonHandler = () => {
    window.location.assign('./login.html');
};
const registerButtonHandler = () => {
    window.location.assign('./register.html');
};
const dayButtonHandler = () => {
    if(document.body.classList.contains('night')){
        document.body.classList.remove('night');
        document.body.classList.add('day');
        localStorage.setItem('theme', 'day');
    }
};
const nightButtonHandler = () => {
    if(document.body.classList.contains('day')){
        document.body.classList.remove('day');
        document.body.classList.add('night');
        localStorage.setItem('theme', 'night');
    }
};

export const initUi = () => {
    const mainPageButtonElement = document.querySelector('#mainPageButton');
    const loginButtonElement = document.querySelector('#loginButton');
    const registerButtonElement = document.querySelector('#registerButton');
    const dayButtonElement: (HTMLImageElement | null) = document.querySelector('#dayThemeImg');
    const nightButtonElement: (HTMLImageElement | null) = document.querySelector('#nightThemeImg');

    if(mainPageButtonElement) mainPageButtonElement.addEventListener('click', mainPageButtonHandler);
    if(loginButtonElement) loginButtonElement.addEventListener('click', loginButtonHandler);
    if(registerButtonElement) registerButtonElement.addEventListener('click', registerButtonHandler);
    if(dayButtonElement) dayButtonElement.addEventListener('click', dayButtonHandler);
    if(nightButtonElement) nightButtonElement.addEventListener('click', nightButtonHandler);

    if(dayButtonElement) dayButtonElement.src = sunImage;
    if(nightButtonElement) nightButtonElement.src = moonImage;

    let theme = window.localStorage.getItem('theme');
    if(theme == 'night')
        nightButtonHandler();
};


