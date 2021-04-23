import { UserDataInterface } from './../../interfaces/UserDataInterface';
import { fetchData } from '../fetch-data';

const url = 'https://localhost:5001/api/User/logout';

export const logout = (setUserData: React.Dispatch<React.SetStateAction<UserDataInterface | undefined>>, userData: UserDataInterface, history: any) => {
        fetchData(url, 'GET');
        Object.entries(userData).forEach((item) => {
            sessionStorage.removeItem(item[0].toString())
        })
        setUserData(undefined);
        history.push('/');
}