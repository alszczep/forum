import { Link } from 'react-router-dom';
import { FC } from 'react';

const LoggedOutNav: FC = (): JSX.Element => {
    return (
        <>
            <Link 
                className='navigation__link navigation__link--login'
                to='/login'>
                <h2 
                    className='navigation__link-header navigation__link-header--login'>
                    LOG IN
                </h2>
            </Link>
            <Link 
                className='navigation__link navigation__link--register'
                to='/register'>
                <h2 
                    className='navigation__link-header navigation__link-header--register'>
                    REGISTER
                </h2>
            </Link>
        </>
    )
}

export default LoggedOutNav;