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
        <nav>
            <Link 
                to='/' 
                className='mainLink'>
                <IoHome 
                    className='mainPageButton' 
                    color='white'/>
            </Link>
            <section 
                className='themeImgWrapper' 
                ref={themeImgWrapperRef} 
                onClick={() => toggleTheme(theme, themeImgWrapperRef, setTheme)}>
                <div 
                    className='themeCircle'>
                </div>
                <img 
                    id='dayThemeImg' 
                    className='themeImages' 
                    src={sunImage} 
                    alt='sun'/>
                <img 
                    id='nightThemeImg' 
                    className='themeImages' 
                    src={moonImage} 
                    alt='moon'/>
            </section>
            {
                userData? 
                <button 
                    onClick={() => {logout(setUserData, userData)}}>
                    Logout
                </button>: 
                <>
                    <Link 
                        to='/login' 
                        className='loginLink'>
                        <h2 
                            id='loginButton' 
                            className='navButtons'>
                            LOG IN
                        </h2>
                    </Link>
                    <Link 
                        to='/register' 
                        className='registerLink'>
                        <h2 
                            id='registerButton' 
                            className='navButtons'>
                            REGISTER
                        </h2>
                    </Link>
                </>
            }
        </nav>
    )
}

export default Nav;