import { FC } from 'react';

const Error: FC<{error?: string}> = ({ error }): JSX.Element => {
    return (
        <main className='main error'>
            <h1
                className='error__header'>
                {
                    error?
                    error:
                    'An error occured, please try reloading the website and check your internet connection. If problem still occurs contact an administrator.'
                }        
            </h1>
        </main>
    )
}

export default Error;