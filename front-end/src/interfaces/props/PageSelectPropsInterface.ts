import { ActionInterface } from '../ReducerActionInterface';
import { PageStateInterface } from '../PageStateInterface';

export interface PageSelectPropsInterface extends PageStateInterface{
    dispatchPage: (args: ActionInterface) => void;
}