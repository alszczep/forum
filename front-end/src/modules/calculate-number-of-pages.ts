import { ActionInterface } from './../interfaces/ActionInterface';
import { PageStateInterface } from './../interfaces/PageStateInterface';

export const calculateInitialState = (count: number, perPage: number) => {
    let pages = Math.ceil(count/perPage);
    return {pages: pages, lastPageElements: (count - (pages - 1) * perPage), currentPage: 1};
};

export const pageReducer = (state: PageStateInterface | null, action: ActionInterface) => {
    switch(action.type){
        case 'INCREMENT':
            if(state && state.currentPage < state.pages)
                return {...state, currentPage: state.currentPage + 1};
            else
                return state;
        case 'DECREMENT':
            if(state && state.currentPage > 1)
                return {...state, currentPage: state.currentPage - 1};
            else
                return state;
        case 'MAX':
            if(state && state.currentPage < state.pages)
                return {...state, currentPage: state.pages};
            else
                return state;
        case 'MIN':
            if(state && state.currentPage > 1)
                return {...state, currentPage: 1};
            else
                return state;
        case 'SET_PAGE':
            if(state && action.payload <= state.pages && action.payload >= 1)
                return {...state, currentPage: action.payload};
            else
                return state;
        case 'UPDATE_STATE':
            return action.payload;
    }
    return state;
}