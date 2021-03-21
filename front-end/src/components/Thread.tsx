import { FC, useCallback, useEffect, useReducer, useState } from 'react';
import { useParams } from 'react-router';
import { CommentInterface } from '../interfaces/CommentInterface';
import { pageReducer, calculateInitialState } from '../modules/calculate-number-of-pages';
import { fetchData } from '../modules/fetch-data';
import PageSelect from './shared/PageSelect';
import Comment from './thread/Comment';

const url = 'https://jsonplaceholder.typicode.com/comments?postId=1';
const COMMENTS_PER_PAGE = 5;

const Thread: FC= (): JSX.Element => {
    const [statePage, dispatchPage] = useReducer(pageReducer, null);
    const { postId } = useParams<{postId: string}>();
    const [data, setData] = useState<CommentInterface[]>([]);
    const getData = useCallback(async() => {
        setData(await fetchData(`${url}`));
      }, []) 
    useEffect(() => {
        getData()
    }, [getData]);
    useEffect(() => {
        if(data && data.length > 0){
            dispatchPage({ type: 'UPDATE_STATE', payload: calculateInitialState(data.length, COMMENTS_PER_PAGE)});
        }
    }, [data])
    if(data && data.length > 0 && statePage){
        let commentsLength = 0;
        if(statePage.currentPage === statePage.pages) commentsLength = statePage.lastPageElements;
        else commentsLength = COMMENTS_PER_PAGE;
        const comments = Array.from({length: commentsLength}, (_, index) => {
            return (statePage.currentPage - 1) * COMMENTS_PER_PAGE + index;
        }).map((item) => {
            return (<Comment key={data[item].id} {...data[item]}/>);
        });
        const pageSelectProps = {dispatchPage, ...statePage};
        return (<main className='thread'>
            <h1 className='threadHeader'>{postId}</h1>
            <PageSelect {...pageSelectProps}/>
            <section className='commentsWrapper'>
                {comments.map(item => item)}
            </section>
            <PageSelect {...pageSelectProps}/>
        </main>)
    }
    return (<main className='threads'>
        loading
    </main>)
    
}

export default Thread;