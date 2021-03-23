import { FC } from 'react';

const NewComment: FC = (): JSX.Element => {
    
    return (<form id='newCommentForm'>
        <label htmlFor='comment'><h3>Comment on this post</h3></label>
        <textarea name='comment'></textarea>
        <input type='submit' value='comment'/>
    </form>)
}

export default NewComment;