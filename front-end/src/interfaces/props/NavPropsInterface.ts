import { UserDataInterface } from './../UserDataInterface';

export interface NavPropsInterface{
    setUserData: ({}: UserDataInterface) => void;
    userData: (UserDataInterface | undefined | null);
    setTheme: (arg0: (string | null)) => void;
}