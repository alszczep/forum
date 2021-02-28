import { appendChildren } from './../../_modules/append-children';
import { createElement } from './../../_modules/create-element';
import { fetchData } from './../../_modules/fetch-data';
import { Thread } from './../../_interfaces/Thread';

const THREADS_PER_PAGE = 6;
const url = 'https://jsonplaceholder.typicode.com/posts';

export const createThreadsElement = async (mainElement: HTMLElement) => {
    let threadList: Thread[] = await fetchData(url);
    let currentPage = {number: 1};
    console.log(threadList);
    const pagesInfo = calculateNumberOfPages(threadList.length); 
    appendChildren(mainElement, [
        createElement('h1' , ['threadsHeader'], localStorage.getItem('currentSection')!),
        createPageNumbersElement(pagesInfo.pages, currentPage, pagesInfo),
        createThreadsListElement(pagesInfo, currentPage, threadList),
        createPageNumbersElement(pagesInfo.pages, currentPage, pagesInfo)
    ]);
}
const calculateNumberOfPages = (threadsCount: number) => {
    let pages = Math.ceil(threadsCount/THREADS_PER_PAGE);
    return {pages: pages, lastPageThreads: (threadsCount - (pages - 1) * THREADS_PER_PAGE)};
}

const createPageNumbersElement = (pagesCount: number, currentPage: {number: number}, pagesInfo: {pages: number, lastPageThreads: number}): HTMLElement => {
    const pageNumbersElement = createElement('ul', ['pageNumbersWrapper'], '');
    const pageList = createPageSelect(pagesCount, currentPage, pagesInfo);
    pageNumbersElement.addEventListener('click', pageNumbersButtonsHandler(pageList, currentPage, pagesInfo))
    appendChildren(pageNumbersElement, [
        createElement('li', ['pageNumberButton'], '<<'),
        createElement('li', ['pageNumberButton'], '<'),
        pageList,
        createElement('li', ['pageNumberButton'], '>'),
        createElement('li', ['pageNumberButton'], '>>')
    ]);
    return pageNumbersElement;
};

const pageNumbersButtonsHandler = (pageList: HTMLSelectElement, currentPage: {number: number}, pagesInfo: {pages: number, lastPageThreads: number}) => {
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
                reloadThreadList(pageList, currentPage, pagesInfo)();
            }  
    }
};

const createPageSelect = (pagesCount: number, currentPage: {number: number}, pagesInfo: {pages: number, lastPageThreads: number}): HTMLSelectElement => {
    const pageList = document.createElement('select');
    pageList.classList.add('pageList', 'pageNumberButton');
    pageList.addEventListener('change', reloadThreadList(pageList, currentPage, pagesInfo));
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
const reloadThreadList = (pageList: HTMLSelectElement, currentPage: {number: number}, pagesInfo: {pages: number, lastPageThreads: number}) => {
    return () => {
        console.log(pagesInfo);
        currentPage.number = parseInt(pageList.value);
        const pageListElements = document.querySelectorAll('select');
        pageListElements.forEach((item) => {
            if(item.classList.contains('pageList')) item.value = currentPage.number.toString();
        });
        let len: number;
        if(currentPage.number == pagesInfo.pages) len = pagesInfo.lastPageThreads;
        else len = THREADS_PER_PAGE;
        const indexes: number[] = Array.from({length: len}, (_, index) => ((pagesInfo.pages - 1)*THREADS_PER_PAGE + index + 1));
        const threadsElements = document.querySelector('.threadsWrapper')!.querySelectorAll('section');
        threadsElements.forEach((element, index) => {
            if(indexes[index]){
                if(element.style.display == 'none')
                    element.style.display = 'initial';
                    // ended here
            }else{
                if(element.style.display != 'none')
                    element.style.display = 'none';
            }
        });
    }
}
const createThreadsListElement = (pagesInfo: {pages: number, lastPageThreads: number}, currentPage: {number: number}, threadList: Thread[]): HTMLElement => {
    const threadListElement = createElement('section', ['threadsWrapper'], '');
    const threadsElements: HTMLElement[] = Array.from({length: THREADS_PER_PAGE}, (_, index) => createThreadElement());
    appendChildren(threadListElement, threadsElements);
    return threadListElement;
};
const createThreadElement = (): HTMLElement => {
    const threadElement = createElement('section', ['threadElement'], '');
    appendChildren(threadElement, [
        createElement('h2', ['threadHeader'], ''),
        createElement('h4', ['commentsNumber'], 'comments: ')
    ]);
    threadElement.addEventListener('click', threadButtonHandler());
    return threadElement;
};
const threadButtonHandler = () => {
    return (event) => {
        let threadTitle = event.currentTarget.querySelector('h2').value;
        localStorage.setItem('currentThread', threadTitle);
        location.assign('./thread.html');
    };
}