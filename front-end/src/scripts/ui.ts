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
    }
};
const nightButtonHandler = () => {
    if(document.body.classList.contains('day')){
        document.body.classList.remove('day');
        document.body.classList.add('night');
    }
};

export const initUi = () => {
    const loginButtonElement = document.querySelector('#loginButton');
    const registerButtonElement = document.querySelector('#registerButton');
    const dayButtonElement = document.querySelector('#dayThemeImg');
    const nightButtonElement = document.querySelector('#nightThemeImg');
    
    if(loginButtonElement) loginButtonElement.addEventListener('click', loginButtonHandler);
    if(registerButtonElement) registerButtonElement.addEventListener('click', registerButtonHandler);
    if(dayButtonElement) dayButtonElement.addEventListener('click', dayButtonHandler);
    if(nightButtonElement) nightButtonElement.addEventListener('click', nightButtonHandler);
};


