import { Link } from 'react-router-dom';
import { FC } from 'react';

const LoggedInNav: FC<{logout: () => void}> = ({ logout }): JSX.Element => {
    return (
        <>
            <Link 
                className='navigation__link navigation__link--account'
                to='/account'>
                <h2 
                    className='navigation__link-header navigation__link-header--account'>
                    ACCOUNT
                </h2>
            </Link>
            <Link 
                className='navigation__link navigation__link--logout'
                to='#'>
                <h2 
                    className='navigation__link-header navigation__link-header--logout'
                    onClick={logout}>
                    LOGOUT
                </h2>
            </Link>
        </>
    )
}

export default LoggedInNav;