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
  class="ant-input css-dev-only-do-not-override-1mqg3i0"
  data-testid="search-input"
  placeholder="Name here"
  type="text"
  value=""
/>
`);
		expect(btn).toMatchInlineSnapshot(`
<button
  class="ant-btn css-dev-only-do-not-override-1mqg3i0 ant-btn-default"
  data-testid="toggle-btn"
  name="toggle"
  style="margin-top: 4px;"
  type="button"
>
  <span
    aria-label="filter"
    class="anticon anticon-filter"
    role="img"
  >
    <svg
      aria-hidden="true"
      data-icon="filter"
      fill="currentColor"
      focusable="false"
      height="1em"
      viewBox="64 64 896 896"
      width="1em"
    >
      <path
        d="M880.1 154H143.9c-24.5 0-39.8 26.7-27.5 48L349 597.4V838c0 17.7 14.2 32 31.8 32h262.4c17.6 0 31.8-14.3 31.8-32V597.4L907.7 202c12.2-21.3-3.1-48-27.6-48zM603.4 798H420.6V642h182.9v156zm9.6-236.6l-9.5 16.6h-183l-9.5-16.6L212.7 226h598.6L613 561.4z"
      />
    </svg>
  </span>
</button>
`);
	});
});
