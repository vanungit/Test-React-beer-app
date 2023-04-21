import { screen, render } from '@testing-library/react';

import { MemoryRouter } from 'react-router-dom';

import App from '../App';

import { renderWithStore } from '../helpers/renderWithStoreHelpers/renderWidthStore';

describe('testing routes', () => {
	it('testing beers wrong', () => {
		render(
			renderWithStore(
				<MemoryRouter initialEntries={['/asdasdasdas']}>
					<App />
				</MemoryRouter>
			)
		);
		expect(screen.getByTestId('beers-page')).toBeInTheDocument();
	});
	it('testing beers correct', () => {
		render(
			renderWithStore(
				<MemoryRouter initialEntries={['/beers']}>
					<App />
				</MemoryRouter>
			)
		);
		expect(screen.getByTestId('beers-page')).toBeInTheDocument();
	});
});
