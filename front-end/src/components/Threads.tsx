import { FC, useCallback, useEffect, useReducer, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchData } from '../modules/fetch-data';
import { ThreadInterface }  from "../interfaces/ThreadInterface";
import SingleThread from './threads/SingleThread';
import Header from './threads/Header';
import PageSelect from './shared/PageSelect';
import { calculateInitialState, pageReducer } from '../modules/calculate-number-of-pages';
import Loading from './shared/Loading';

const url = 'https://localhost:5001/api/post/allFromCategory?categoryId=';
const THREADS_PER_PAGE = 5;

const Threads: FC= (): JSX.Element => {
    const [statePage, dispatchPage] = useReducer(pageReducer, null);
    const { categoryId } = useParams<{categoryId: string}>();
    const [data, setData] = useState<ThreadInterface[]>([]);
    const getData = useCallback(async() => {
        setData(await fetchData(`${url}${categoryId}`, 'GET'));
      }, [categoryId]) 
    useEffect(() => {
        getData()
    }, [getData]);
    useEffect(() => {
        if(data && data.length > 0){
            dispatchPage({ type: 'UPDATE_STATE', payload: calculateInitialState(data.length, THREADS_PER_PAGE)});
        }
    }, [data])
    if(data && data.length > 0 && statePage){
        let threadsLength = 0;
        if(statePage.currentPage === statePage.pages) threadsLength = statePage.lastPageElements;
        else threadsLength = THREADS_PER_PAGE;
        const threads = Array.from({length: threadsLength}, (_, index) => {
            return (statePage.currentPage - 1) * THREADS_PER_PAGE + index;
        }).map((item) => {
            return (<SingleThread key={data[item].postId} {...data[item]}/>);
        });
        const pageSelectProps = {dispatchPage, ...statePage};
        return (<main className='threads'>
            <Header/>
            <PageSelect {...pageSelectProps}/>
            <section className='threadsWrapper'>
                {threads.map(item => item)}
            </section>
            <PageSelect {...pageSelectProps}/>
        </main>)
    }
    return (<Loading/>);
}

export default Threads;