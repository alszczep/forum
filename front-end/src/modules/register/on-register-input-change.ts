import { ActionInterface } from '../../interfaces/ReducerActionInterface';
import { convertStringToLi } from "../convert-string-to-li";
import { validate } from "../validate";

export const onRegisterInputChange = (type: string, ref: React.RefObject<HTMLInputElement>, setErrorList: React.Dispatch<React.SetStateAction<JSX.Element[]>>, dispatchRegister: React.Dispatch<ActionInterface>, passwordRef?: React.RefObject<HTMLInputElement>) => {
    if(ref && ref.current){
        dispatchRegister({type: type, payload: {newValue: ref.current.value}});
        let validationResult;
        if(type === 'passwordRepeat' && passwordRef){
            if(passwordRef.current) validationResult = validate({type: type, newValue: ref.current.value, passwordValue: passwordRef.current.value});
        }
        else validationResult = validate({type: type, newValue: ref.current.value});
        if(validationResult && !validationResult.passed) setErrorList(convertStringToLi(validationResult));
        else setErrorList([]);
    }
}