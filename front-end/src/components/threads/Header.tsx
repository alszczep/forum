import { FC } from 'react';
import { Link, useParams } from 'react-router-dom';

const Header: FC= (): JSX.Element => {
    const { categoryId } = useParams<{categoryId: string}>();
    return (
        <section 
            className='threads__header-wrapper'>
            <h1 
                className='threads__header'>
                {categoryId}
            </h1>
            <Link 
                className='threads__link'
                to={`/newThread/${categoryId}`}>
                <button 
                    className='threads__button'>
                    new thread
                </button>
            </Link>
        </section>
    )
}

export default Header;