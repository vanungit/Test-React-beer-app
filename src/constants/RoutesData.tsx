import React from 'react';
import { BrowserRouter as Route, Redirect } from 'react-router-dom';

import { Beers, DetailsPage } from '../pages';

interface IRoutes {
	path: string;
	exact: boolean;
	component: JSX.Element;
}

export const routes: IRoutes[] = [
	{
		path: '/beers',
		exact: true,
		component: <Beers />,
	},
	{
		path: '/beers/:id',
		exact: true,
		component: <DetailsPage />,
	},
	{
		path: '*',
		exact: false,
		component: <Redirect to='/beers' />,
	},
];
