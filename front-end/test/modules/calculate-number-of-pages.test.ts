import { pageReducer } from '../../src/modules/pages/page-reducer';
import { calculatePagesInitialState } from '../../src/modules/pages/calculate-pages-initial-state';

describe('calculate initial state function for useReducer with info about pages', () => {
    it('returned values test', () => {
        expect(calculatePagesInitialState(10, 3)).toStrictEqual({pages: 4, lastPageElements: 1, currentPage: 1});
        expect(calculatePagesInitialState(5, 5)).toStrictEqual({pages: 1, lastPageElements: 5, currentPage: 1});
        expect(calculatePagesInitialState(3, 5)).toStrictEqual({pages: 1, lastPageElements: 3, currentPage: 1});
        expect(calculatePagesInitialState(10, 1)).toStrictEqual({pages: 10, lastPageElements: 1, currentPage: 1});
    })
});
describe('reducer function for useReducer with info about pages', () => {
    it('INCREMENT', () => {
        expect(pageReducer({pages: 10, lastPageElements: 1, currentPage: 4}, {type: 'INCREMENT'})).toStrictEqual({pages: 10, lastPageElements: 1, currentPage: 5});
        expect(pageReducer({pages: 10, lastPageElements: 1, currentPage: 10}, {type: 'INCREMENT'})).toStrictEqual({pages: 10, lastPageElements: 1, currentPage: 10});
    });
    it('DECREMENT', () => {
        expect(pageReducer({pages: 10, lastPageElements: 1, currentPage: 4}, {type: 'DECREMENT'})).toStrictEqual({pages: 10, lastPageElements: 1, currentPage: 3});
        expect(pageReducer({pages: 10, lastPageElements: 1, currentPage: 1}, {type: 'DECREMENT'})).toStrictEqual({pages: 10, lastPageElements: 1, currentPage: 1});
    });
    
    it('MAX', () => {
        expect(pageReducer({pages: 10, lastPageElements: 1, currentPage: 4}, {type: 'MAX'})).toStrictEqual({pages: 10, lastPageElements: 1, currentPage: 10});
        expect(pageReducer({pages: 10, lastPageElements: 1, currentPage: 10}, {type: 'MAX'})).toStrictEqual({pages: 10, lastPageElements: 1, currentPage: 10});
    });
    
    it('MIN', () => {
        expect(pageReducer({pages: 10, lastPageElements: 1, currentPage: 4}, {type: 'MIN'})).toStrictEqual({pages: 10, lastPageElements: 1, currentPage: 1});
        expect(pageReducer({pages: 10, lastPageElements: 1, currentPage: 1}, {type: 'MIN'})).toStrictEqual({pages: 10, lastPageElements: 1, currentPage: 1});
    });
    it('SET_PAGE', () => {
        expect(pageReducer({pages: 10, lastPageElements: 1, currentPage: 4}, {type: 'SET_PAGE', payload: 7})).toStrictEqual({pages: 10, lastPageElements: 1, currentPage: 7});
        expect(pageReducer({pages: 10, lastPageElements: 1, currentPage: 4}, {type: 'SET_PAGE', payload: 99})).toStrictEqual({pages: 10, lastPageElements: 1, currentPage: 4});
        expect(pageReducer({pages: 10, lastPageElements: 1, currentPage: 4}, {type: 'SET_PAGE', payload: -10})).toStrictEqual({pages: 10, lastPageElements: 1, currentPage: 4});
        expect(pageReducer({pages: 10, lastPageElements: 1, currentPage: 4}, {type: 'SET_PAGE', payload: 1})).toStrictEqual({pages: 10, lastPageElements: 1, currentPage: 1});
        expect(pageReducer({pages: 10, lastPageElements: 1, currentPage: 4}, {type: 'SET_PAGE', payload: 10})).toStrictEqual({pages: 10, lastPageElements: 1, currentPage: 10});
    });
    it('UPDATE_STATE', () => {
        expect(pageReducer(null, {type: 'UPDATE_STATE', payload: {pages: 10, lastPageElements: 1, currentPage: 1}})).toStrictEqual({pages: 10, lastPageElements: 1, currentPage: 1});
        expect(pageReducer({pages: 5, lastPageElements: 1, currentPage: 1}, {type: 'UPDATE_STATE', payload: {pages: 10, lastPageElements: 1, currentPage: 1}})).toStrictEqual({pages: 10, lastPageElements: 1, currentPage: 1});
    });
});