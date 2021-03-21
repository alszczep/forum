import { FC } from 'react';
import { CommentInterface } from '../../interfaces/CommentInterface';

const Comment: FC<CommentInterface> = ({postId, id, name, email, body}): JSX.Element => {
    
    return (<section className='commentElement'>
        <section className='userBox'>{email}</section>
        <section className='contentBox'>
            <section className='contentInfo'>date etc.</section>
            <section className='contentText'>{body}</section>
        </section>
    </section>)
}

export default Comment;