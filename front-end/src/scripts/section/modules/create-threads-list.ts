import { THREADS_PER_PAGE } from './create-threads-element';
import { appendChildren } from './../../_modules/append-children';
import { createElement } from './../../_modules/create-element';
import { Thread } from './../../_interfaces/Thread';

export const createThreadsListElement = (pagesInfo: {pages: number, lastPageThreads: number}, currentPage: {number: number}, threadList: Thread[]): HTMLElement => {
    const threadListElement = createElement('section', ['threadsWrapper']);
    const threadsElements: HTMLElement[] = Array.from({length: THREADS_PER_PAGE}, (_, index) => createThreadElement());
    appendChildren(threadListElement, threadsElements);
    return threadListElement;
};
const createThreadElement = (): HTMLElement => {
    const threadElement = createElement('section', ['threadElement']);
    appendChildren(threadElement, [
        createElement('h2', ['threadHeader'], ''),
        createElement('h4', ['author'], 'created by: ')
    ]);
    threadElement.addEventListener('click', threadButtonHandler());
    return threadElement;
};
const threadButtonHandler = () => {
    return (event) => {
        let threadTitle = event.currentTarget.querySelector('h2').textContent;
        localStorage.setItem('currentThreadTitle', threadTitle);
        localStorage.setItem('currentThreadId', event.currentTarget.id);
        location.assign('./thread.html');
    };
}