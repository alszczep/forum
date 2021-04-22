import { FC } from 'react';
import { CommentInterface } from '../../interfaces/CommentInterface';

const Comment: FC<CommentInterface> = ({commentId, authorId, content, data, postId}): JSX.Element => {
    
    return (
        <section 
            className='comment'>
            <section 
                className='comment__user-box'>
                {authorId}
            </section>
            <section 
                className='comment__content-box'>
                <section 
                    className='comment__content-info'>
                    {data}
                </section>
                <section 
                    className='comment__content-text'>
                    {content}
                </section>
            </section>
        </section>
    )
}

export default Comment;