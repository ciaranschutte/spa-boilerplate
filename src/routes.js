import React from 'react';
import { Route, Switch } from 'react-router-dom';

import NavBar from './components/Navbar';
import Menu from './components/Menu';

import Home from './pages/home';
import Todos from './pages/todos';

import { navItems } from './mocks/nav';

const GenericNotFound = () => (
  <p>Generic Route Not Found</p>
);

const MainLayout = ({ children, ...rest }) => (
  <div className='layout-container'>
    <header>
      <NavBar items={navItems}/>
    </header>
    <Menu/>
    { children }
  </div>
);


const DefaultLayoutRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => (
    <MainLayout>
      <Component {...props}/>
    </MainLayout>
  )}/>
);



const routes = (
  <Switch>
    <DefaultLayoutRoute path='/' component={Home}/>
    <DefaultLayoutRoute path='/todos' component={Todos}/>
		<Route component={GenericNotFound} />
  </Switch>
);

export default routes;
