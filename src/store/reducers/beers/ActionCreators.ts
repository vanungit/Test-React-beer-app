import { AppDispatch } from '../../store';
import { getBeers } from '../../../service/beerApi';
import { GetParams } from '../../../modules/service';

import { beersSlice } from './BeersSlice';

export const fetchBeers = (params: GetParams) => (dispatch: AppDispatch) => {
	try {
		dispatch(beersSlice.actions.beersFetching());
		(async () => {
			const fetch = await getBeers(params);
			if (fetch) dispatch(beersSlice.actions.beersFetchingSuccess(fetch.data));
		})();
	} catch (e) {
		dispatch(beersSlice.actions.beersFetchingError('fetching error'));
	}
};
export const fetchAllBeersLength = (params: GetParams) => (dispatch: AppDispatch) => {
	try {
		dispatch(beersSlice.actions.beersFetching());
		(async () => {
			const fetch = await getBeers(params);
			if (fetch) dispatch(beersSlice.actions.allBeersLengthFetchingSuccess(fetch.data.length));
		})();
	} catch (e) {
		dispatch(beersSlice.actions.beersFetchingError('fetching error'));
	}
};
