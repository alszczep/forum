import React, { FC } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Categories from './components/Categories';
import Login from './components/Login';
import Nav from './components/shared/Nav';
import Thread from './components/Thread';
import Register from './components/Register';
import Threads from './components/Threads';

const App: FC = (): JSX.Element => {
  let theme = window.localStorage.getItem('theme');
  if(theme)
    document.body.classList.add(theme);
  else
    document.body.classList.add('day');

  return (<Router>
      <Nav/>
      <Switch>
        <Route path='/register'>
          <Register/>
        </Route>
        <Route path='/login'>
          <Login/>
        </Route>
        <Route path='/threads/:categoryId'>
          <Threads/>
        </Route>
        <Route path='/thread/:postId'>
          <Thread/>
        </Route>
        <Route path='/'>
          <Categories/>
        </Route>
      </Switch>
  </Router>);
}

export default App;
