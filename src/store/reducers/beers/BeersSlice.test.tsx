// import { allBeersLengthFetchingSuccess, beersFetching, initialState, beersFetchingError, BeersReducer } from './BeersSlice';
import { initialState } from './BeersSlice';

import { beersActions, beersReducer } from './BeersSlice';

describe('testing beers reducer', () => {
	it('testing beersFetching action', () => {
		expect(beersReducer(initialState, beersActions.beersFetching())).toEqual({
			beers: [],
			beerDetails: null,
			allBeersLength: 0,
			isLoading: true,
			error: '',
		});
	});
	it('testing beersFetchingError action', () => {
		expect(beersReducer(initialState, beersActions.beersFetchingError('error'))).toEqual({
			beers: [],
			beerDetails: null,
			allBeersLength: 0,
			isLoading: false,
			error: 'error',
		});
	});
	it('testing beers action allBeersLengthFetchingSuccess', () => {
		expect(beersReducer(initialState, beersActions.allBeersLengthFetchingSuccess(12))).toEqual({
			beers: [],
			beerDetails: null,
			allBeersLength: 12,
			isLoading: false,
			error: '',
		});
	});
});
