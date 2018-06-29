import React from 'react';
import { Route, Switch } from 'react-router-dom';

import NavBar from './components/Navbar';
import Menu from './components/Menu';

import Home from './pages/home';
import Todos from './pages/todos';
import Allo from './pages/allo';

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
    <DefaultLayoutRoute path='/' exact component={Home}/>
    <DefaultLayoutRoute path='/todos' component={Todos}/>
    <DefaultLayoutRoute path='/allo' component={Allo}/>
		<Route component={GenericNotFound} />
  </Switch>
);

export default routes;
