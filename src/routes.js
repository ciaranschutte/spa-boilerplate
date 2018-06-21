import React from 'react';
import { Route, Switch } from 'react-router-dom';

const GenericNotFound = () => {
	return <p>Generic Route Not Found</p>;
};

const routes = (
  <Switch>
		<Route component={GenericNotFound} />
  </Switch>
);

export default routes;
