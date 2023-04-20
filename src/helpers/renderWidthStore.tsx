import React from 'react';
import { Provider } from 'react-redux';

import { setupStore } from '../store/store';

const store = setupStore();

export const renderWithStore = (component: React.ReactNode) => {
	return <Provider store={store}>{component}</Provider>;
};
