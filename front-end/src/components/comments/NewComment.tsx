import { FC, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import { onNewCommentSubmit } from '../../modules/comments/on-new-comment-submit';
import { isUserLoggedIn } from '../../modules/user/is-user-logged-in';

const NewComment: FC<any> = ({ dispatchPage, getData }): JSX.Element => {
    const [comment, setComment] = useState<string>('');
    const commentRef = useRef<HTMLTextAreaElement>(null);
    const { postId } = useParams<{postId: string}>();
    if(isUserLoggedIn()){
        return (
            <form 
                id='newCommentForm' 
                onSubmit={(event: any) => {onNewCommentSubmit(event, comment, parseInt(postId), dispatchPage, getData)}}>
                <label 
                    htmlFor='comment'>
                    <h3>
                        Comment on this post
                    </h3>
                </label>
                <textarea 
                    name='comment' 
                    value={comment} 
                    ref={commentRef} 
                    onChange={() => { if(commentRef && commentRef.current) setComment(commentRef.current.value) }}>
                </textarea>
                <input 
                    type='submit' 
                    value='comment'/>
            </form>
        )
    }else
        return (<>
            <h3>
                You have to be logged in to comment.
            </h3>
        </>)
}

export default NewComment;