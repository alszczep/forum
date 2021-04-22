import { useState } from "react";
import { useRef } from "react";
import { FC } from "react";
import { useHistory, useParams } from "react-router-dom";
import { onNewThreadSubmit } from "../../modules/threads/on-new-thread-submit";
import { isUserLoggedIn } from "../../modules/user/is-user-logged-in";

const NewThread : FC = (): JSX.Element => {
    const { categoryId } = useParams<{categoryId: string}>();
    const [title, setTitle] = useState<string>('');
    const [content, setContent] = useState<string>('');
    const titleRef = useRef<HTMLInputElement>(null);
    const contentRef = useRef<HTMLTextAreaElement>(null);
    const history = useHistory();
    if(isUserLoggedIn()){
        return (
            <main 
                className='newThread'>
                <form 
                    id='newThreadForm' 
                    onSubmit={(event: any) => {onNewThreadSubmit(event, parseInt(categoryId), title, content, history)}}>
                    <label 
                        htmlFor='title'>
                        <h3>
                            Title
                        </h3>
                    </label>
                    <input 
                        name='title' 
                        type='text' 
                        value={title} 
                        ref={titleRef} 
                        onChange={() => { if(titleRef && titleRef.current) setTitle(titleRef.current.value) }}/>
                    <label 
                        htmlFor='content'>
                        <h3>
                            Content
                        </h3>
                    </label>
                    <textarea 
                        name='content' 
                        value={content} 
                        ref={contentRef} 
                        onChange={() => { if(contentRef && contentRef.current) setContent(contentRef.current.value) }}/>
                    <input 
                        type='submit' 
                        value='Post'/>
                </form>
            </main>
        )
    }else
        return (
            <main 
                className='newThread'>
                <h1>
                    You have to be logged in to create new thread.
                </h1>
            </main>
        )
}

export default NewThread;