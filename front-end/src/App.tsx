import { FC, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Categories from './components/Categories';
import Login from './components/Login';
import Nav from './components/shared/Nav';
import Comments from './components/Comments';
import Register from './components/Register';
import Threads from './components/Threads';
import NewThread from './components/NewThread';
import { UserDataInterface } from './interfaces/UserDataInterface';
import { useEffect } from 'react';
import { changeTheme } from './modules/change-theme';
import { userToSessionStorage } from './modules/user/user-to-session-storage';
import { loadUserFromSessionStorage } from './modules/user/load-user-from-session-storage';
import Account from './components/Account';

const App: FC = (): JSX.Element => {
  const [userData, setUserData] = useState<UserDataInterface>();
  const [theme, setTheme] = useState<string | null>(window.localStorage.getItem('theme')? window.localStorage.getItem('theme'): 'day');
  useEffect(() => {
    changeTheme(theme);
  }, [theme])
  useEffect(() => {
    loadUserFromSessionStorage(setUserData);
  }, [])
  useEffect(() => {
    if(userData) userToSessionStorage(userData)
  }, [userData])
  return (<Router>
      <Nav setUserData={setUserData} userData={userData} setTheme={setTheme} theme={theme!}/>
      <Switch>
        <Route path='/register'>
          <Register/>
        </Route>
        <Route path='/login'>
          <Login setUserData={setUserData}/>
        </Route>
        <Route path='/threads/:categoryId'>
          <Threads/>
        </Route>
        <Route path='/newThread/:categoryId'>
          <NewThread/>
        </Route>
        <Route path='/comments/:postId'>
          <Comments/>
        </Route>
        <Route path='/account'>
          <Account userData={userData}/>
        </Route>
        <Route path='/'>
          <Categories/>
        </Route>
      </Switch>
  </Router>);
}

export default App;
