import { UserDataInterface } from './../../interfaces/UserDataInterface';

export const loadUserFromSessionStorage = (setUserData: React.Dispatch<React.SetStateAction<UserDataInterface | undefined>>) => {
    let id = sessionStorage.getItem('id');
    if(id){
      let userName = sessionStorage.getItem('userName');
      let email = sessionStorage.getItem('email');
      if(email && userName)
        setUserData({id: id, userName: userName, email: email})
    }
}