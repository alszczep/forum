import { v4 as generateKey } from 'uuid';
import { ValidationReturnInterface } from '../interfaces/return/ValidationReturnInterface';

export const convertStringToLi = (validationResult: ValidationReturnInterface): JSX.Element[] => {
    if(!validationResult.passed && validationResult.error && validationResult.error.length > 0){
        return validationResult.error.map((item) => {
            return (<li key={generateKey()}>{item}</li>);
        });
    }
    return [];
}