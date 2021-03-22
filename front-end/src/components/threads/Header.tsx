import { FC } from 'react';
import { Link, useParams } from 'react-router-dom';

const Header: FC= (): JSX.Element => {
    const { categoryId } = useParams<{categoryId: string}>();
    return (<section className='headerWrapper'>
        <h1 className='threadsHeader'>1</h1>
        <Link to={`/newThread/${categoryId}`}><button className='newThreadButton'>new thread</button></Link>
    </section>)
}

export default Header;