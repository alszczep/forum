import { FC } from "react";

const NewThread : FC = (): JSX.Element => {
    return (<main className='newThread'>
        <form id='newThreadForm'>
            <label className='formLabel' htmlFor='title'><h3>Title</h3></label>
            <input className='formInput' id='title' name='title' type='text'/>
            <label className='formLabel' htmlFor='content'><h3>Content</h3></label>
            <textarea className='formInput' id='content' name='content'/>
            <input className='submitButton' type='submit' value='Post'/>
        </form>
    </main>)
}

export default NewThread;