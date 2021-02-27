import { appendChildren } from './../../_modules/append-children';
import { createElement } from './../../_modules/create-element';
import { fetchData } from './../../_modules/fetch-data';
import { Thread } from './../../_interfaces/Thread';

const THREADS_PER_PAGE = 10;
const url = 'https://jsonplaceholder.typicode.com/posts';

export const createThreadsElement = async (mainElement: HTMLElement) => {
    let threadList: Thread[] = await fetchData(url);
    let currentPage = 1;
    console.log(threadList);
    const pagesInfo = calculateNumberOfPages(threadList.length); 
    appendChildren(mainElement, [
        createElement('h1' , ['threadsHeader'], localStorage.getItem('currentSection')!),
        createPageNumbersElement(pagesInfo.pages, currentPage),
        createThreadsListElement(pagesInfo, currentPage, threadList),
        createPageNumbersElement(pagesInfo.pages, currentPage)
    ]);
}
const calculateNumberOfPages = (threadsCount: number) => {
    let pages = Math.floor(threadsCount/THREADS_PER_PAGE);
    return {pages: pages, lastPageThreads: (threadsCount - (pages - 1) * THREADS_PER_PAGE)};
}

const createPageNumbersElement = (pagesCount: number, currentPage: number): HTMLElement => {
    const pageNumbersElement = createElement('ul', ['pageNumbersWrapper'], '');
    appendChildren(pageNumbersElement, [
        createElement('li', ['pageNumberButton'], '<<'),
        createElement('li', ['pageNumberButton'], '<'),
        createElement('li', ['pageNumberButton'], '1'),
        createElement('li', ['pageNumberButton'], '>'),
        createElement('li', ['pageNumberButton'], '>>'),
    ]);
    return pageNumbersElement;
};
const createThreadsListElement = (pagesInfo: {pages: number, lastPageThreads: number}, currentPage: number, threadList: Thread[]): HTMLElement => {
    const threadListElement = createElement('section', ['threadsWrapper'], '');
    //if(pagesInfo.pages == currentPage)
        // use filter to choose threads
    return threadListElement;
};

const createThreadElement = (threadInfo: Thread) => {

};