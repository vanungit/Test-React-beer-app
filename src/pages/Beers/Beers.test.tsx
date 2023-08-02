import { screen, render } from '@testing-library/react';

import { renderWithStore } from '../../helpers/renderWithStoreHelpers/renderWidthStore';

import { Beers } from './Beers';

describe('render beers component and snapshot', () => {
	it('testing render, snapshot', () => {
		render(renderWithStore(<Beers />));
		const btn = screen.getByTestId('toggle-btn');
		const searchInput = screen.getByTestId('search-input');
		expect(btn).toBeInTheDocument();
		expect(searchInput).toBeInTheDocument();
		expect(screen.queryByTestId('toggle-filters')).toBeNull();
		expect(searchInput).toMatchInlineSnapshot(`
<input
  class="ant-input css-dev-only-do-not-override-ed5zg0"
  data-testid="search-input"
  placeholder="Name here"
  type="text"
  value=""
/>
`);
	});
});
