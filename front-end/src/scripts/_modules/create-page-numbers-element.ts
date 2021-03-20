import { reloadList } from './reload-list';
import { appendChildren } from './append-children';
import { createElement } from './create-element';
import { Thread } from './../_interfaces/Thread';
import { Comment } from './../_interfaces/Comment';

export const calculateNumberOfPages = (threadsCount: number, perPage: number) => {
    let pages = Math.ceil(threadsCount/perPage);
    return {pages: pages, lastPageThreads: (threadsCount - (pages - 1) * perPage)};
};

export const createPageNumbersElement = (pagesCount: number, currentPage: {number: number}, pagesInfo: {pages: number, lastPageThreads: number}, list: (Thread[] | Comment[])): HTMLElement => {
    const pageNumbersElement = createElement('ul', ['pageNumbersWrapper']);
    const pageList = createPageSelect(pagesCount, currentPage, pagesInfo, list);
    pageNumbersElement.addEventListener('click', pageNumbersButtonsHandler(pageList, currentPage, pagesInfo, list))
    appendChildren(pageNumbersElement, [
        createElement('li', ['pageNumberButton'], '<<'),
        createElement('li', ['pageNumberButton'], '<'),
        pageList,
        createElement('li', ['pageNumberButton'], '>'),
        createElement('li', ['pageNumberButton'], '>>')
    ]);
    return pageNumbersElement;
};
const pageNumbersButtonsHandler = (pageList: HTMLSelectElement, currentPage: {number: number}, pagesInfo: {pages: number, lastPageThreads: number}, list: (Thread[] | Comment[])) => {
    return (event) => {
        if(event.target.tagName == 'LI')
            if(parseInt(pageList.value) > 1){
                if(event.target.textContent == '<<')
                    pageList.value = (1).toString();
                if(event.target.textContent == '<')
                    pageList.value = (parseInt(pageList.value) - 1).toString();
            }
            if(parseInt(pageList.value) < pagesInfo.pages){
                if(event.target.textContent == '>>')
                    pageList.value = pagesInfo.pages.toString();
                if(event.target.textContent == '>')
                    pageList.value = (parseInt(pageList.value) + 1).toString();
            }
            if(parseInt(pageList.value) != currentPage.number){
                reloadList(pageList, currentPage, pagesInfo, list)();
            }  
    }
};
const createPageSelect = (pagesCount: number, currentPage: {number: number}, pagesInfo: {pages: number, lastPageThreads: number}, list: (Thread[] | Comment[])): HTMLSelectElement => {
    const pageList = document.createElement('select');
    pageList.classList.add('pageList', 'pageNumberButton');
    pageList.addEventListener('change', reloadList(pageList, currentPage, pagesInfo, list));
    const pageNumbers = Array.from({length: pagesCount}, (_, index) => {
        const element: HTMLOptionElement = document.createElement('option');
        element.value = (index + 1).toString();
        element.textContent = element.value;
        element.classList.add('pageListOption');
        return element;
    });
    appendChildren(pageList, pageNumbers);
    return pageList;
}