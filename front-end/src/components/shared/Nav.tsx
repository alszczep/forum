import sunImage from './../../images/sun.svg';
import moonImage from './../../images/moon.svg';
import { Link } from 'react-router-dom';
import { FC } from 'react';
import { NavPropsInterface } from '../../interfaces/props/NavPropsInterface';
import { logout } from '../../modules/user/logout';
import { changeTheme } from '../../modules/change-theme';

const Nav: FC<NavPropsInterface> = ({ setUserData, userData, setTheme }): JSX.Element => {
    return (<nav>
        <Link to='/' className='mainLink'><h1 id='mainPageButton'>FORUM</h1></Link>
		<img id='dayThemeImg' className='themeImages' src={sunImage} alt='sun' onClick={() => {changeTheme('day')}}/>
		<img id='nightThemeImg' className='themeImages' src={moonImage} alt='moon' onClick={() => {changeTheme('night')}}/>
        {userData? 
        <button onClick={() => {logout(setUserData, userData)}}>Logout</button>: 
		(<>
            <Link to='/login' className='loginLink'><h2 id='loginButton' className='navButtons'>LOG IN</h2></Link>
            <Link to='/register' className='registerLink'><h2 id='registerButton' className='navButtons'>REGISTER</h2></Link>
        </>)
        }
    </nav>)
}

export default Nav;