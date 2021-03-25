import { calculateInitialState, pageReducer } from './../src/modules/calculate-number-of-pages';

describe('initial state for useReducer with info about pages', () => {
    it('#1', () => {
        expect(calculateInitialState(10, 3)).toStrictEqual({pages: 4, lastPageElements: 1, currentPage: 1});
    })
    it('#2', () => {
        expect(calculateInitialState(5, 5)).toStrictEqual({pages: 1, lastPageElements: 5, currentPage: 1});
    })
    it('#3', () => {
        expect(calculateInitialState(3, 5)).toStrictEqual({pages: 1, lastPageElements: 3, currentPage: 1});
    })
    it('#4', () => {
        expect(calculateInitialState(10, 1)).toStrictEqual({pages: 10, lastPageElements: 1, currentPage: 1});
    })
});
describe('reducer function for useReducer with info about pages', () => {
    describe('INCREMENT', () => {
        it('#1', () => {
            expect(pageReducer({pages: 10, lastPageElements: 1, currentPage: 4}, {type: 'INCREMENT'})).toStrictEqual({pages: 10, lastPageElements: 1, currentPage: 5});
        })
        it('#2', () => {
            expect(pageReducer({pages: 10, lastPageElements: 1, currentPage: 10}, {type: 'INCREMENT'})).toStrictEqual({pages: 10, lastPageElements: 1, currentPage: 10});
        })
    });
    describe('DECREMENT', () => {
        it('#1', () => {
            expect(pageReducer({pages: 10, lastPageElements: 1, currentPage: 4}, {type: 'DECREMENT'})).toStrictEqual({pages: 10, lastPageElements: 1, currentPage: 3});
        })
        it('#2', () => {
            expect(pageReducer({pages: 10, lastPageElements: 1, currentPage: 1}, {type: 'DECREMENT'})).toStrictEqual({pages: 10, lastPageElements: 1, currentPage: 1});
        })
    });
    
    describe('MAX', () => {
        it('#1', () => {
            expect(pageReducer({pages: 10, lastPageElements: 1, currentPage: 4}, {type: 'MAX'})).toStrictEqual({pages: 10, lastPageElements: 1, currentPage: 10});
        })
        it('#2', () => {
            expect(pageReducer({pages: 10, lastPageElements: 1, currentPage: 10}, {type: 'MAX'})).toStrictEqual({pages: 10, lastPageElements: 1, currentPage: 10});
        })
    });
    
    describe('MIN', () => {
        it('#1', () => {
            expect(pageReducer({pages: 10, lastPageElements: 1, currentPage: 4}, {type: 'MIN'})).toStrictEqual({pages: 10, lastPageElements: 1, currentPage: 1});
        })
        it('#2', () => {
            expect(pageReducer({pages: 10, lastPageElements: 1, currentPage: 1}, {type: 'MIN'})).toStrictEqual({pages: 10, lastPageElements: 1, currentPage: 1});
        })
    });
    describe('SET_PAGE', () => {
        it('#1', () => {
            expect(pageReducer({pages: 10, lastPageElements: 1, currentPage: 4}, {type: 'SET_PAGE', payload: 7})).toStrictEqual({pages: 10, lastPageElements: 1, currentPage: 7});
        })
        it('#2', () => {
            expect(pageReducer({pages: 10, lastPageElements: 1, currentPage: 4}, {type: 'SET_PAGE', payload: 99})).toStrictEqual({pages: 10, lastPageElements: 1, currentPage: 4});
        })
        it('#3', () => {
            expect(pageReducer({pages: 10, lastPageElements: 1, currentPage: 4}, {type: 'SET_PAGE', payload: -10})).toStrictEqual({pages: 10, lastPageElements: 1, currentPage: 4});
        })
        it('#4', () => {
            expect(pageReducer({pages: 10, lastPageElements: 1, currentPage: 4}, {type: 'SET_PAGE', payload: 1})).toStrictEqual({pages: 10, lastPageElements: 1, currentPage: 1});
        })
        it('#5', () => {
            expect(pageReducer({pages: 10, lastPageElements: 1, currentPage: 4}, {type: 'SET_PAGE', payload: 10})).toStrictEqual({pages: 10, lastPageElements: 1, currentPage: 10});
        })
    });
    describe('UPDATE_STATE', () => {
        it('#1', () => {
            expect(pageReducer(null, {type: 'UPDATE_STATE', payload: {pages: 10, lastPageElements: 1, currentPage: 1}})).toStrictEqual({pages: 10, lastPageElements: 1, currentPage: 1});
        })
        it('#2', () => {
            expect(pageReducer({pages: 5, lastPageElements: 1, currentPage: 1}, {type: 'UPDATE_STATE', payload: {pages: 10, lastPageElements: 1, currentPage: 1}})).toStrictEqual({pages: 10, lastPageElements: 1, currentPage: 1});
        })
    });
});