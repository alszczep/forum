import sunImage from './../../images/sun.svg';
import moonImage from './../../images/moon.svg';
import { Link, useHistory } from 'react-router-dom';
import { FC } from 'react';
import { NavPropsInterface } from '../../interfaces/props/NavPropsInterface';
import { logout } from '../../modules/user/logout';
import { IoHome } from 'react-icons/io5';
import { useRef } from 'react';
import { toggleTheme } from '../../modules/nav/toggle-theme';
import LoggedInNav from './nav/LoggedInNav';
import LoggedOutNav from './nav/LoggedOutNav';

const Nav: FC<NavPropsInterface> = ({ setUserData, userData, setTheme, theme }): JSX.Element => {
    const themeImgWrapperRef = useRef<HTMLElement>(null)
    const history = useHistory();
    return (
        <nav className='navigation'>
            <Link 
                to='/' 
                className='navigation__home-link'>
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
                <LoggedInNav logout={() => {logout(setUserData, userData, history)}}/>: 
                <LoggedOutNav/>
            }
        </nav>
    )
}

export default Nav;