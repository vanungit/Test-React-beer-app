import { combineReducers, configureStore } from '@reduxjs/toolkit';

import beersReducer from './reducers/beers/BeersSlice';

const rootReducer = combineReducers({
	beersReducer,
});

export const setupStore = () => {
	return configureStore({
		reducer: rootReducer,
		middleware: (getDefaultMiddleware) => getDefaultMiddleware({ immutableCheck: false, serializableCheck: false }),
	});
};

// ---------- types ---------//
export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
