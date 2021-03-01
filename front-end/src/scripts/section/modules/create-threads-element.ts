import { reloadList } from './../../_modules/reload-list';
import { createPageNumbersElement, calculateNumberOfPages } from './../../_modules/create-page-numbers-element';
import { createThreadsListElement } from './create-threads-list';
import { appendChildren } from './../../_modules/append-children';
import { createElement } from './../../_modules/create-element';
import { fetchData } from './../../_modules/fetch-data';
import { Thread } from './../../_interfaces/Thread';

export const THREADS_PER_PAGE = 6;
const url = 'https://jsonplaceholder.typicode.com/posts';

export const createThreadsElement = async (mainElement: HTMLElement) => {
    let threadList: Thread[] = await fetchData(url);
    let currentPage = {number: 1};
    const pagesInfo = calculateNumberOfPages(threadList.length, THREADS_PER_PAGE); 
    appendChildren(mainElement, [
        createElement('h1' , ['threadsHeader'], localStorage.getItem('currentSection')!),
        createPageNumbersElement(pagesInfo.pages, currentPage, pagesInfo, threadList),
        createThreadsListElement(pagesInfo, currentPage, threadList),
        createPageNumbersElement(pagesInfo.pages, currentPage, pagesInfo, threadList)
    ]);
    reloadList(document.querySelector('select'), currentPage, pagesInfo, threadList)();
}



