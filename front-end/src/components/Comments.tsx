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
import Error from './shared/Error';

const url = 'https://localhost:5001/api/Comment/CommentsFromPost?postId=';
const COMMENTS_PER_PAGE = 5;

const Comments: FC= (): JSX.Element => {
    const [statePage, dispatchPage] = useReducer(pageReducer, null);
    const { postId } = useParams<{postId: string}>();
    const [data, setData] = useState<CommentInterface[] | null>([]);
    const getData = useCallback(async() => {
        setData(await fetchData(`${url}${postId}`, 'GET'));
        dispatchPage({type: 'MAX'});
      }, [postId]) 
    useEffect(() => {
        getData()
    }, [getData]);
    useEffect(() => {
        console.log(statePage);
    })
    useEffect(() => {
        if(data && data.length > 0){
            dispatchPage({ type: 'UPDATE_STATE', payload: calculatePagesInitialState(data.length, COMMENTS_PER_PAGE)});
        }
    }, [data])
    if(data && statePage){
        const pageSelectProps = {dispatchPage, ...statePage};
        return (
            <main 
                className='main comments'>
                <h1 
                    className='comments__header'>
                    {postId}
                </h1>
                <PageSelect 
                    {...pageSelectProps}/>
                <section 
                    className='comments__list'>
                    {
                        (data.length > 0)?
                        calculateListElements(statePage, COMMENTS_PER_PAGE, data).map(item => item):
                        <h2>
                            No comments in this post.
                        </h2>
                    }
                </section>
                <PageSelect 
                    {...pageSelectProps}/>
                <NewComment 
                    dispatchPage={dispatchPage} 
                    getData={getData}/>
            </main>
        )
    }
    if(data === null)
        return (
            <Error/>
        )
    return (
        <Loading/>
    )
}

export default Comments;