import sunImage from './../../images/sun.svg';
import moonImage from './../../images/moon.svg';
import { Link } from 'react-router-dom';
import { FC } from 'react';

const Nav: FC = (): JSX.Element => {
    const changeToDay = () => {
        if(!document.body.classList.contains('day')){
            document.body.classList.add('day');
            document.body.classList.remove('night');
            window.localStorage.setItem('theme', 'day');
        }
    }
    const changeToNight = () => {
        if(!document.body.classList.contains('night')){
            document.body.classList.add('night');
            document.body.classList.remove('day');
            window.localStorage.setItem('theme', 'night');
        }
    }
    return (<nav>
        <Link to='/' className='mainLink'><h1 id='mainPageButton'>FORUM</h1></Link>
		<img id='dayThemeImg' className='themeImages' src={sunImage} alt='sun' onClick={changeToDay}/>
		<img id='nightThemeImg' className='themeImages' src={moonImage} alt='moon' onClick={changeToNight}/>
		<Link to='/login' className='loginLink'><h2 id='loginButton' className='navButtons'>LOG IN</h2></Link>
		<Link to='/register' className='registerLink'><h2 id='registerButton' className='navButtons'>REGISTER</h2></Link>
    </nav>)
}

export default Nav;