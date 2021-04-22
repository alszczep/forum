import sunImage from './../../images/sun.svg';
import moonImage from './../../images/moon.svg';
import { Link } from 'react-router-dom';
import { FC } from 'react';
import { NavPropsInterface } from '../../interfaces/props/NavPropsInterface';
import { logout } from '../../modules/user/logout';
import { IoHome } from 'react-icons/io5';
import { useRef } from 'react';
import { toggleTheme } from '../../modules/nav/toggle-theme';

const Nav: FC<NavPropsInterface> = ({ setUserData, userData, setTheme, theme }): JSX.Element => {
    const themeImgWrapperRef = useRef<HTMLElement>(null)
    return (
        <nav className='navigation'>
            <Link 
                to='/' 
                className='navigation__link navigation__link--home'>
                <IoHome 
                    className='navigation__link-icon navigation__link-icon--home' 
                    color='white'/>
            </Link>
            <section 
                className='navigation__theme' 
                ref={themeImgWrapperRef} 
                onClick={() => toggleTheme(theme, themeImgWrapperRef, setTheme)}>
                <div 
                    className='navigation__theme-circle'>
                </div>
                <img 
                    className='navigation__theme-image navigation__theme-image--day' 
                    src={sunImage} 
                    alt='sun'/>
                <img 
                    className='navigation__theme-image navigation__theme-image--night' 
                    src={moonImage} 
                    alt='moon'/>
            </section>
            {
                userData? 
                <button 
                    className='navigation__logout-button'
                    onClick={() => {logout(setUserData, userData)}}>
                    Logout
                </button>: 
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
            }
        </nav>
    )
}

export default Nav;