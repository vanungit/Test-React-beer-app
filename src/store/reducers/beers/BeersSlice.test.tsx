import beersReducer, { allBeersLengthFetchingSuccess, beersFetching, initialState, beersFetchingError } from './BeersSlice';

describe('testing beers reducer', () => {
	it('testing beersFetching action', () => {
		expect(beersReducer(initialState, beersFetching())).toEqual({
			beers: [],
			beerDetails: null,
			allBeersLength: 0,
			isLoading: true,
			error: '',
		});
	});
	it('testing beersFetchingError action', () => {
		expect(beersReducer(initialState, beersFetchingError('error'))).toEqual({
			beers: [],
			beerDetails: null,
			allBeersLength: 0,
			isLoading: false,
			error: 'error',
		});
	});
	it('testing beers action allBeersLengthFetchingSuccess', () => {
		expect(beersReducer(initialState, allBeersLengthFetchingSuccess(12))).toEqual({
			beers: [],
			beerDetails: null,
			allBeersLength: 12,
			isLoading: false,
			error: '',
		});
	});
});
