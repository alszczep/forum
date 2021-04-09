import { fetchData } from '../fetch-data';
const url = 'https://localhost:5001/api/User/logout';

export const logout = (setUserData:any, userData:any) => {
        fetchData(url, 'GET');
        Object.entries(userData).forEach((item) => {
            sessionStorage.removeItem(item[0].toString())
        })
        setUserData(undefined);
}