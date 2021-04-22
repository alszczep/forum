import { RegisterInterface } from '../../interfaces/RegisterInterface';
import { fetchData } from '../fetch-data';
import { convertStringToLi } from "../convert-string-to-li";
import { validate } from "../validate";

const url = 'https://localhost:5001/api/User/register';

export const onRegisterSubmit = async (event: any, stateRegister: RegisterInterface, setErrorList: React.Dispatch<React.SetStateAction<JSX.Element[]>>, types: readonly string[], refs: readonly React.RefObject<any>[], history: any) => {
    event.preventDefault();
    setErrorList([]);
    let newErrorList: JSX.Element[] = [];
    types.forEach((type, index) => {
        let ref = refs[index];
        if(ref && ref.current){
            let validationResult;
            if(type === 'passwordRepeat'){
                if(refs[index-1].current) validationResult = validate({type: type, newValue: ref.current.value, passwordValue: refs[index-1].current.value});
            }
            else validationResult = validate({type: type, newValue: ref.current.value});
            if(validationResult && !validationResult.passed){
                let convertedResult = convertStringToLi(validationResult);
                convertedResult.forEach((item) => {
                    newErrorList.push(item);
                });
            }     
        }  
    });
    if(newErrorList.length > 0)
        setErrorList(newErrorList);
    else{
        let result = await fetchData(url, 'POST', {...stateRegister, password: stateRegister.password, confirmPassword: stateRegister.confirmPassword});
        if(result.succeeded)
            history.push('/')
        else{
            let propertyNames = Object.getOwnPropertyNames(result.errors)[0];
            setErrorList(convertStringToLi({passed: false, error: result.errors[propertyNames].map((item: any) => item)}));
        }
    }
}