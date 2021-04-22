export const onLoginFormSubmit = (event: any, userName: string, password: string, getData: () => Promise<void>) => {
    event.preventDefault();
    if(userName !== '' && password !== ''){
        getData();
    }
}