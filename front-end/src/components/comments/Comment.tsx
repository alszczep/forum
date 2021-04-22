import { FC } from 'react';
import { CommentInterface } from '../../interfaces/CommentInterface';

const Comment: FC<CommentInterface> = ({commentId, authorId, content, data, postId}): JSX.Element => {
    
    return (
        <section 
            className='commentElement'>
            <section 
                className='userBox'>
                {authorId}
            </section>
            <section 
                className='contentBox'>
                <section 
                    className='contentInfo'>
                    {data}
                </section>
                <section 
                    className='contentText'>
                    {content}
                </section>
            </section>
        </section>
    )
}

export default Comment;