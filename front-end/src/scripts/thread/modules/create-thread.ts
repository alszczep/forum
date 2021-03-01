import { createCommentList } from './create-comment-list';
import { appendChildren } from './../../_modules/append-children';
import { createElement } from './../../_modules/create-element';
import { createPageNumbersElement, calculateNumberOfPages } from './../../_modules/create-page-numbers-element';
import { fetchData } from './../../_modules/fetch-data';
import { reloadList } from './../../_modules/reload-list';
import { Comment } from './../../_interfaces/Comment';

export const COMMENTS_PER_PAGE = 3;
const url = `https://jsonplaceholder.typicode.com/comments?postId=${localStorage.getItem('currentThreadId')}`;

export const createThread = async (mainElement: HTMLElement) => {
    const commentList: Comment[] = await fetchData(url);
    let currentPage = {number: 1};
    const pagesInfo = calculateNumberOfPages(commentList.length, COMMENTS_PER_PAGE);
    appendChildren(mainElement, [
        createElement('h1', ['threadHeader'], localStorage.getItem('currentThreadTitle')!),
        createPageNumbersElement(pagesInfo.pages, currentPage, pagesInfo, commentList),
        createCommentList(),
        createPageNumbersElement(pagesInfo.pages, currentPage, pagesInfo, commentList)
    ]);
    reloadList(document.querySelector('select'), currentPage, pagesInfo, commentList)();
};