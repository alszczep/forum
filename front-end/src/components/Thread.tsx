import { FC, useCallback, useEffect, useReducer, useState } from 'react';
import { useParams } from 'react-router';
import { CommentInterface } from '../interfaces/CommentInterface';
import { pageReducer} from '../modules/pages/page-reducer';
import { fetchData } from '../modules/fetch-data';
import Loading from './shared/Loading';
import PageSelect from './shared/PageSelect';
import Comment from './thread/Comment';
import NewComment from './thread/NewComment';
import { calculatePagesInitialState } from '../modules/pages/calculate-pages-initial-state';

const url = 'https://localhost:5001/api/Comment/CommentsFromPost?postId=';
const COMMENTS_PER_PAGE = 5;

const Thread: FC= (): JSX.Element => {
    const [statePage, dispatchPage] = useReducer(pageReducer, null);
    const { postId } = useParams<{postId: string}>();
    const [data, setData] = useState<CommentInterface[]>([]);
    const getData = useCallback(async() => {
        setData(await fetchData(`${url}${postId}`, 'GET'));
      }, [postId]) 
    useEffect(() => {
        getData()
    }, [getData]);
    useEffect(() => {
        if(data && data.length > 0){
            dispatchPage({ type: 'UPDATE_STATE', payload: calculatePagesInitialState(data.length, COMMENTS_PER_PAGE)});
        }
    }, [data])
    if(data && data.length > 0 && statePage){
        let commentsLength = 0;
        if(statePage.currentPage === statePage.pages) commentsLength = statePage.lastPageElements;
        else commentsLength = COMMENTS_PER_PAGE;
        const comments = Array.from({length: commentsLength}, (_, index) => {
            return (statePage.currentPage - 1) * COMMENTS_PER_PAGE + index;
        }).map((item) => {
            return (<Comment key={data[item].commentId} {...data[item]}/>);
        });
        const pageSelectProps = {dispatchPage, ...statePage};
        return (<main className='thread'>
            <h1 className='threadHeader'>{postId}</h1>
            <PageSelect {...pageSelectProps}/>
            <section className='commentsWrapper'>
                {comments.map(item => item)}
            </section>
            <PageSelect {...pageSelectProps}/>
            <NewComment/>
        </main>)
    }
    return (<Loading/>);
    
}

export default Thread;