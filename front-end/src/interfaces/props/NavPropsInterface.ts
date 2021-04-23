import { UserDataInterface } from './../UserDataInterface';

export interface NavPropsInterface{
    setUserData: React.Dispatch<React.SetStateAction<UserDataInterface | undefined>>;
    userData: (UserDataInterface | undefined | null);
    setTheme: React.Dispatch<React.SetStateAction<string | null>>;
    theme: string;
}