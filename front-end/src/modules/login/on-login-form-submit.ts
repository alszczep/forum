import { UserDataInterface } from './../../interfaces/UserDataInterface';
import { fetchData } from "../fetch-data";
import { convertStringToLi } from '../convert-string-to-li';

const url = 'https://localhost:5001/api/User/login';

export const onLoginFormSubmit = async(event: any, userName: string, password: string, setUserData: React.Dispatch<React.SetStateAction<UserDataInterface | undefined>>, history: any, setErrorList: React.Dispatch<React.SetStateAction<JSX.Element[]>>) => {
    event.preventDefault();
    if(userName !== '' && password !== ''){
        let result = (await fetchData(url, 'POST', {userName: userName, password: password}));
        if(result.status.succeeded && result.uInfo){
            setUserData({...(result.uInfo), userName: userName});
            history.push('/');
        }else{
            setErrorList(convertStringToLi({passed: false, error: ['Username or password does not match.']}))
        }
    }
}