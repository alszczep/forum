import { FC } from 'react';
import { Link } from 'react-router-dom';
import { ThreadInterface } from '../../interfaces/ThreadInterface';

const Thread: FC<ThreadInterface> = ({ postId, authorId, title, context, date, categoryId }: ThreadInterface): JSX.Element => {
    return (
        <Link 
            className='thread'
            to={`/comments/${postId}`}>
            <section 
                className='thread__wrapper'>
                <h2 
                    className='thread__header'>
                    {title}
                </h2>
                <h4    
                    className='thread__author'>
                    created by {authorId} on {date}
                </h4>
            </section>
        </Link>
    )
}

export default Thread;