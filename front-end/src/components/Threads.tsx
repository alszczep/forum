import { FC, useCallback, useEffect, useReducer, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchData } from '../modules/fetch-data';
import { ThreadInterface }  from "../interfaces/ThreadInterface";
import Header from './threads/Header';
import PageSelect from './shared/PageSelect';
import { pageReducer } from '../modules/pages/page-reducer';
import Loading from './shared/Loading';
import { calculatePagesInitialState } from '../modules/pages/calculate-pages-initial-state';
import { calculateListElements } from '../modules/calculate-list-elements';
import Error from './shared/Error';

const url = 'https://localhost:5001/api/post/allFromCategory?categoryId=';
const THREADS_PER_PAGE = 5;

const Threads: FC= (): JSX.Element => {
    const [statePage, dispatchPage] = useReducer(pageReducer, null);
    const { categoryId } = useParams<{categoryId: string}>();
    const [data, setData] = useState<ThreadInterface[] | null>([]);
    const getData = useCallback(async() => {
        setData(await fetchData(`${url}${categoryId}`, 'GET'));
      }, [categoryId]) 
    useEffect(() => {
        getData()
    }, [getData]);
    useEffect(() => {
        if(data && data.length > 0){
            dispatchPage({ type: 'UPDATE_STATE', payload: calculatePagesInitialState(data.length, THREADS_PER_PAGE)});
        }
    }, [data])
    if(data && data.length > 0 && statePage){
        const pageSelectProps = {dispatchPage, ...statePage};
        return (
            <main 
                className='threads'>
                <Header/>
                <PageSelect 
                    {...pageSelectProps}/>
                <section 
                    className='threadsWrapper'>
                {
                    (data && data.length > 0 && statePage)?
                    calculateListElements(statePage, THREADS_PER_PAGE, undefined, data).map(item => item):
                    <h2>
                        No threads in this category.
                    </h2>
                }
                </section>
                <PageSelect 
                    {...pageSelectProps}/>
            </main>
        )
    }
    if(data === null)
        return (
            <Error/>
        );
    return (
        <Loading/>
    );
}

export default Threads;