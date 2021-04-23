import { useState } from "react";
import { useRef } from "react";
import { FC } from "react";
import { useHistory, useParams } from "react-router-dom";
import { onNewThreadSubmit } from "../modules/threads/on-new-thread-submit";
import { isUserLoggedIn } from "../modules/user/is-user-logged-in";
import Error from "./shared/Error";

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
                className='main new-thread'>
                <form 
                    className='form form--new' 
                    onSubmit={(event: any) => {onNewThreadSubmit(event, parseInt(categoryId), title, content, history)}}
                    autoComplete='off'>
                    <label 
                        className='form__label'
                        htmlFor='title'>
                        <h3 
                            className='form__label-header'>
                            Title
                        </h3>
                    </label>
                    <input 
                        className='form__input form__input--field form__input--title'
                        name='title' 
                        type='text' 
                        value={title} 
                        ref={titleRef} 
                        onChange={() => { if(titleRef && titleRef.current) setTitle(titleRef.current.value) }}/>
                    <label 
                        className='form__label'
                        htmlFor='content'>
                        <h3 
                            className='form__label-header'>
                            Content
                        </h3>
                    </label>
                    <textarea 
                        className='form__input form__input--textarea form__input--content'
                        name='content' 
                        value={content} 
                        ref={contentRef} 
                        onChange={() => { if(contentRef && contentRef.current) setContent(contentRef.current.value) }}/>
                    <input 
                        className='form__input form__input--submit'
                        type='submit' 
                        value='Post'/>
                </form>
            </main>
        )
    }
    return (
        <Error 
            error={'You have to be logged in to create new thread.'}/>
    )
}

export default NewThread;