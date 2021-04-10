import { PageStateInterface } from './../../interfaces/PageStateInterface';

export const calculatePagesInitialState = (count: number, perPage: number): PageStateInterface => {
    let pages = Math.ceil(count/perPage);
    return {pages: pages, lastPageElements: (count - (pages - 1) * perPage), currentPage: 1};
};