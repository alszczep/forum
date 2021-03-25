import { ActionInterface } from './ActionInterface';
import { PageStateInterface } from './PageStateInterface';

export interface PageSelectPropsInterface extends PageStateInterface{
    dispatchPage: (args: ActionInterface) => void;
}