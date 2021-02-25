const loginButtonHandler = () => {
    window.location.assign('./login.html');
};
const registerButtonHandler = () => {

};

export const initUi = () => {
    const loginButtonElement = document.querySelector('#loginButton');
    const registerButtonElement = document.querySelector('#registerButton');
    
    if(loginButtonElement) loginButtonElement.addEventListener('click', loginButtonHandler);
    if(registerButtonElement) registerButtonElement.addEventListener('click', registerButtonHandler);
};


