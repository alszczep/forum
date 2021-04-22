import { FC } from 'react';
import { Link } from 'react-router-dom';
import { ThreadInterface } from '../../interfaces/ThreadInterface';

const Thread: FC<ThreadInterface> = ({ postId, authorId, title, context, date, categoryId }: ThreadInterface): JSX.Element => {
    return (
        <Link 
            to={`/comments/${postId}`}>
            <section 
                className='threadElement' 
                id='1'>
                <h2 
                    className='threadHeader'>
                    {title}
                </h2>
                <h4    
                    className='author'>
                    created by {authorId} on {date}
                </h4>
            </section>
        </Link>
    )
}

export default Thread;