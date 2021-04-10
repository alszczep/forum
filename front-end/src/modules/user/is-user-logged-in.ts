export const isUserLoggedIn = (): boolean => {
    if(sessionStorage.getItem('id'))
        return true;
    return false;
}