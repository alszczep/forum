import { UserDataInterface } from './../UserDataInterface';

export interface NavPropsInterface{
    setUserData: ({}: UserDataInterface) => void;
    userData: (UserDataInterface | undefined | null);
    setTheme: React.Dispatch<React.SetStateAction<string | null>>;
    theme: string;
}