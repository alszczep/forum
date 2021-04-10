import { FC, useCallback, useEffect, useReducer, useState } from 'react';
import { useParams } from 'react-router';
import { CommentInterface } from '../interfaces/CommentInterface';
import { pageReducer} from '../modules/pages/page-reducer';
import { fetchData } from '../modules/fetch-data';
import Loading from './shared/Loading';
import PageSelect from './shared/PageSelect';
import NewComment from './comments/NewComment';
import { calculatePagesInitialState } from '../modules/pages/calculate-pages-initial-state';
import { calculateListElements } from '../modules/calculate-list-elements';

const url = 'https://localhost:5001/api/Comment/CommentsFromPost?postId=';
const COMMENTS_PER_PAGE = 5;

const Comments: FC= (): JSX.Element => {
    const [statePage, dispatchPage] = useReducer(pageReducer, null);
    const { postId } = useParams<{postId: string}>();
    const [data, setData] = useState<CommentInterface[] | null>(null);
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
    if(data == null)
        return (<Loading/>);
    const pageSelectProps = {dispatchPage, ...statePage};
    return (<main className='comments'>
        <h1 className='commentsHeader'>{postId}</h1>
        <PageSelect {...pageSelectProps}/>
        <section className='commentsWrapper'>
            {
                (data && data.length > 0 && statePage)?
                calculateListElements(statePage, COMMENTS_PER_PAGE, data).map(item => item):
                <h2>No comments in this post.</h2>
            }
        </section>
        <PageSelect {...pageSelectProps}/>
        <NewComment dispatchPage={dispatchPage} getData={getData}/>
    </main>)
}

export default Comments;