import { CommentInterface } from '../interfaces/CommentInterface';
import { ThreadInterface } from '../interfaces/ThreadInterface';
import { PageStateInterface } from '../interfaces/PageStateInterface';
import Comment from '../components/comments/Comment';
import Thread from '../components/threads/Thread';

export const calculateListElements = (statePage: PageStateInterface, per_page: number, commentData?: (CommentInterface[]), threadData?: (ThreadInterface[])) => {
    let listLength = 0;
    if(statePage.currentPage === statePage.pages) listLength = statePage.lastPageElements;
    else listLength = per_page;
    return Array.from({length: listLength}, (_, index) => {
        return (statePage.currentPage - 1) * per_page + index;
    }).map((item) => {
        if(commentData)
            return (<Comment key={commentData[item].commentId} {...commentData[item]}/>);
        if(threadData)
            return (<Thread key={threadData[item].postId} {...threadData[item]}/>);
        return undefined;
    });
}