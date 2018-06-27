import React from 'react';
import { Route, Switch } from 'react-router-dom';

import NavBar from './components/navbar';
import Menu from './components/menu';

import Home from './pages/home';
import Todos from './pages/todos';

const GenericNotFound = () => (
  <p>Generic Route Not Found</p>
);

const MainLayout = ({ children, ...rest }) => (
  <div className='layout-container'>
    <header>
      <NavBar/>
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
