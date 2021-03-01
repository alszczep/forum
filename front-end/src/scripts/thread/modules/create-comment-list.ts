import { appendChildren } from './../../_modules/append-children';
import { createElement } from './../../_modules/create-element';
import { Comment } from './../../_interfaces/Comment';
import { COMMENTS_PER_PAGE } from './create-thread';


export const createCommentList = () => {
    const commentListElement = createElement('section', ['commentsWrapper']);
    const commentList: HTMLElement[] =  Array.from({length: COMMENTS_PER_PAGE}, (_, index) => createCommentElement());
    appendChildren(commentListElement, commentList);
    
    return commentListElement;
};
const createCommentElement = () => {
    const commentElement = createElement('section', ['commentElement']);
    appendChildren(commentElement, [
        createCommentUserBox(),
        createCommentContentBox()
    ]);
    return commentElement;
};
const createCommentUserBox = () => {
    const userBox = createElement('section', ['userBox'], 'user box')
    return userBox;
};
const createCommentContentBox = () => {
    const contentBox = createElement('section', ['contentBox']);
    appendChildren(contentBox, [
        createElement('section', ['contentInfo'], 'date etc.'),
        createElement('section', ['contentText'], 'content text')
    ]);
    return contentBox;
};