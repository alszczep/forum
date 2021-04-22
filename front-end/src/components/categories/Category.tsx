import { FC } from 'react';
import { Link } from 'react-router-dom';
import { CategoryInterface } from '../../interfaces/CategoryInterface';

const Category: FC<CategoryInterface> = ({ categoryId, name }:CategoryInterface): JSX.Element => {
    return (
        <Link 
            className='category'
            to={{pathname: `/threads/${categoryId}`}}>
            <section  
                className='category__section'>
                <h2 
                    className='category__title'>
                    {name}
                </h2>
                <h4 
                    className='category__desc'>
                    {categoryId}
                </h4>
            </section>
        </Link>
    )
}

export default Category;