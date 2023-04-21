import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Beers } from '../../../modules/beers';

export interface InitialState {
	beers: Beers[];
	beerDetails: Beers | null;
	allBeersLength: number;
	isLoading: boolean;
	error: string;
}
export const initialState: InitialState = {
	beers: [],
	beerDetails: null,
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
		beerDetailsFetchingSuccess(state, action: PayloadAction<Beers>) {
			state.beerDetails = action.payload;
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

export const { beersFetching, allBeersLengthFetchingSuccess, beersFetchingError } = beersSlice.actions;

export default beersSlice.reducer;
