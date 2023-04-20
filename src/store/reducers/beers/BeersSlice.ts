import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Beers } from '../../../modules/beers';

interface InitialState {
	beers: Beers[];
	allBeersLength: number;
	isLoading: boolean;
	error: string;
}
const initialState: InitialState = {
	beers: [],
	allBeersLength: 0,
	isLoading: false,
	error: '',
};
export const beersSlice = createSlice({
	name: 'beers',
	initialState,
	reducers: {
		beersFetching(state) {
			state.isLoading = true;
		},
		beersFetchingSuccess(state, action: PayloadAction<Beers[]>) {
			state.beers = action.payload;
			state.isLoading = false;
		},
		allBeersLengthFetchingSuccess(state, action: PayloadAction<number>) {
			state.allBeersLength = action.payload;
			state.isLoading = false;
		},

		beersFetchingError(state, action: PayloadAction<string>) {
			state.isLoading = false;
			state.error = action.payload;
		},
	},
});

export default beersSlice.reducer;
