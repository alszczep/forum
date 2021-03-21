import { FC } from 'react';
import { Link } from 'react-router-dom';
import { CategoryInterface } from './../../interfaces/CategoryInterface';

const SingleCategory: FC<CategoryInterface> = ({ categoryId, name }:CategoryInterface): JSX.Element => {
    return (<Link to={{pathname: `/threads/${categoryId}`}}>
        <section  className='singleCategory'>
            <h2 className='categoryTitle'>{name}</h2>
            <h4 className='categoryDesc'>{categoryId}</h4>
        </section>
    </Link>)
}

export default SingleCategory;