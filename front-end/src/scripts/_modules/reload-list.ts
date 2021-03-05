import { Thread } from './../_interfaces/Thread';
import { Comment } from './../_interfaces/Comment';
import { THREADS_PER_PAGE } from './../section/modules/create-threads-element';
import { COMMENTS_PER_PAGE } from './../thread/modules/create-thread';

// used for reloading threads and comments lists when changing a page
export const reloadList = (pageList, currentPage: {number: number}, pagesInfo: {pages: number, lastPageThreads: number}, list: (Thread[] | Comment[])) => {
    return () => {
        currentPage.number = parseInt(pageList.value);
        const pageListElements = document.querySelectorAll('select');
        pageListElements.forEach((item) => {
            if(item.classList.contains('pageList')) item.value = currentPage.number.toString();
        });
        let len: number;
        if((<Thread[]>list)[0].title){
            if(currentPage.number == pagesInfo.pages) len = pagesInfo.lastPageThreads;
            else len = THREADS_PER_PAGE;
            const indexes: number[] = Array.from({length: len}, (_, index) => ((currentPage.number - 1) * THREADS_PER_PAGE + index + 1));
            const threadsElements = document.querySelector('.threadsWrapper')!.querySelectorAll('section');
            threadsElements.forEach((element, index) => {
                if(indexes[index]){
                    if(element.style.display == 'none') element.style.display = 'initial';
                    const threadIndex = (currentPage.number - 1) * THREADS_PER_PAGE + index;
                    const titleElement = element.querySelector('h2');
                    if(titleElement) titleElement.textContent = (<Thread[]>list)[threadIndex].title;
                    element.id = (threadIndex + 1).toString();
                }else{
                    if(element.style.display != 'none') element.style.display = 'none';
                }
            });
        }else{
            if(currentPage.number == pagesInfo.pages) len = pagesInfo.lastPageThreads;
            else len = COMMENTS_PER_PAGE;
            const indexes: number[] = Array.from({length: len}, (_, index) => ((currentPage.number - 1) * COMMENTS_PER_PAGE + index + 1));
            const commentElements: NodeListOf<HTMLElement> = document.querySelector('.commentsWrapper')!.querySelectorAll('section.commentElement');
            console.log(list);
            commentElements.forEach((element, index) => {
                    if(indexes[index]){
                        if(element.style.display == 'none') element.style.display = 'flex';
                        const commentIndex = (currentPage.number - 1) * COMMENTS_PER_PAGE + index;
                        const userBox = element.querySelector('section.userBox');
                        if(userBox) userBox.textContent = (<Comment[]>list)[commentIndex].email;
                        const contentText = element.querySelector('section.contentText');
                        if(contentText) contentText.textContent = (<Comment[]>list)[commentIndex].body;
                    }else{
                        if(element.style.display != 'none') element.style.display = 'none';
                    }
            });
        }
    }
}