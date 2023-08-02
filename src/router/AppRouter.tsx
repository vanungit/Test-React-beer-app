import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { routes } from '../constants/RoutesData';

const AppRouter = () => {
	return (
		<>
			<Router>
				<Switch>
					{routes.map((route, index) => {
						return (
							<Route key={index} path={route.path} exact={route.exact}>
								{route.component}
							</Route>
						);
					})}
				</Switch>
			</Router>
		</>
	);
};

export default AppRouter;
