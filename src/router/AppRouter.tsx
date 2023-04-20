import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import { Beers } from '../pages/Beers/Beers';
import { DetailsPage } from '../pages/DetailsPage/DetailsPage';

const AppRouter = () => {
	return (
		<>
			<Router>
				<Switch>
					<Route path='/beers' exact>
						<Beers />
					</Route>
					<Route path='/beers/:id' exact>
						<DetailsPage />
					</Route>
					<Route exact path='*'>
						<Redirect to='/beers' />
					</Route>
				</Switch>
			</Router>
		</>
	);
};

export default AppRouter;
