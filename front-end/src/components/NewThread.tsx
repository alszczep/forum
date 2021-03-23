import { FC } from "react";

const NewThread : FC = (): JSX.Element => {
    return (<main className='newThread'>
        <form id='newThreadForm'>
            <label htmlFor='title'><h3>Title</h3></label>
            <input name='title' type='text'/>
            <label htmlFor='content'><h3>Content</h3></label>
            <textarea name='content'/>
            <input type='submit' value='Post'/>
        </form>
    </main>)
}

export default NewThread;