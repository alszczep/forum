import { calculateInitialState, pageReducer } from './../src/modules/calculate-number-of-pages';

describe('initial state calculation for useReducer with info about pages', () => {
    it('initial state test #1', () => {
        expect(calculateInitialState(10, 3)).toStrictEqual({pages: 4, lastPageElements: 1, currentPage: 1});
    })
    it('initial state test #2', () => {
        expect(calculateInitialState(5, 5)).toStrictEqual({pages: 1, lastPageElements: 5, currentPage: 1});
    })
    it('initial state test #3', () => {
        expect(calculateInitialState(3, 5)).toStrictEqual({pages: 1, lastPageElements: 3, currentPage: 1});
    })
    it('initial state test #4', () => {
        expect(calculateInitialState(10, 1)).toStrictEqual({pages: 10, lastPageElements: 1, currentPage: 1});
    })
});
describe('reducer function for useReducer with info about pages', () => {
    it('pageReducer INCREMENT test #1', () => {
        expect(pageReducer({pages: 10, lastPageElements: 1, currentPage: 4}, {type: 'INCREMENT'})).toStrictEqual({pages: 10, lastPageElements: 1, currentPage: 5});
    })
    it('pageReducer INCREMENT test #2', () => {
        expect(pageReducer({pages: 10, lastPageElements: 1, currentPage: 10}, {type: 'INCREMENT'})).toStrictEqual({pages: 10, lastPageElements: 1, currentPage: 10});
    })
    it('pageReducer DECREMENT test #1', () => {
        expect(pageReducer({pages: 10, lastPageElements: 1, currentPage: 4}, {type: 'DECREMENT'})).toStrictEqual({pages: 10, lastPageElements: 1, currentPage: 3});
    })
    it('pageReducer DECREMENT test #2', () => {
        expect(pageReducer({pages: 10, lastPageElements: 1, currentPage: 1}, {type: 'DECREMENT'})).toStrictEqual({pages: 10, lastPageElements: 1, currentPage: 1});
    })
    it('pageReducer MAX test #1', () => {
        expect(pageReducer({pages: 10, lastPageElements: 1, currentPage: 4}, {type: 'MAX'})).toStrictEqual({pages: 10, lastPageElements: 1, currentPage: 10});
    })
    it('pageReducer MAX test #2', () => {
        expect(pageReducer({pages: 10, lastPageElements: 1, currentPage: 10}, {type: 'MAX'})).toStrictEqual({pages: 10, lastPageElements: 1, currentPage: 10});
    })
    it('pageReducer MIN test #1', () => {
        expect(pageReducer({pages: 10, lastPageElements: 1, currentPage: 4}, {type: 'MIN'})).toStrictEqual({pages: 10, lastPageElements: 1, currentPage: 1});
    })
    it('pageReducer MIN test #2', () => {
        expect(pageReducer({pages: 10, lastPageElements: 1, currentPage: 1}, {type: 'MIN'})).toStrictEqual({pages: 10, lastPageElements: 1, currentPage: 1});
    })
    it('pageReducer SET_PAGE test #1', () => {
        expect(pageReducer({pages: 10, lastPageElements: 1, currentPage: 4}, {type: 'SET_PAGE', payload: 7})).toStrictEqual({pages: 10, lastPageElements: 1, currentPage: 7});
    })
    it('pageReducer SET_PAGE test #2', () => {
        expect(pageReducer({pages: 10, lastPageElements: 1, currentPage: 4}, {type: 'SET_PAGE', payload: 99})).toStrictEqual({pages: 10, lastPageElements: 1, currentPage: 4});
    })
    it('pageReducer SET_PAGE test #3', () => {
        expect(pageReducer({pages: 10, lastPageElements: 1, currentPage: 4}, {type: 'SET_PAGE', payload: -10})).toStrictEqual({pages: 10, lastPageElements: 1, currentPage: 4});
    })
    it('pageReducer SET_PAGE test #4', () => {
        expect(pageReducer({pages: 10, lastPageElements: 1, currentPage: 4}, {type: 'SET_PAGE', payload: 1})).toStrictEqual({pages: 10, lastPageElements: 1, currentPage: 1});
    })
    it('pageReducer SET_PAGE test #5', () => {
        expect(pageReducer({pages: 10, lastPageElements: 1, currentPage: 4}, {type: 'SET_PAGE', payload: 10})).toStrictEqual({pages: 10, lastPageElements: 1, currentPage: 10});
    })
    it('pageReducer UPDATE_STATE test #1', () => {
        expect(pageReducer(null, {type: 'UPDATE_STATE', payload: {pages: 10, lastPageElements: 1, currentPage: 1}})).toStrictEqual({pages: 10, lastPageElements: 1, currentPage: 1});
    })
    it('pageReducer UPDATE_STATE test #2', () => {
        expect(pageReducer({pages: 5, lastPageElements: 1, currentPage: 1}, {type: 'UPDATE_STATE', payload: {pages: 10, lastPageElements: 1, currentPage: 1}})).toStrictEqual({pages: 10, lastPageElements: 1, currentPage: 1});
    })
});