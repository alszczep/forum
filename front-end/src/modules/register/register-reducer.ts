import { ActionInterface } from './../../interfaces/ReducerActionInterface';
import { RegisterInterface } from './../../interfaces/RegisterInterface';

export const registerReducer = (state: RegisterInterface, action: ActionInterface) => {
    return {...state, [action.type]: action.payload.newValue};
};