import { FC } from 'react';

const Loading: FC = (): JSX.Element => {
    return (
        <main className='main loading'>
            <h1
                className='loading__header'>
                Loading...
            </h1>
        </main>
    )
}

export default Loading;