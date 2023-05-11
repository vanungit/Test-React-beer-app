import { AppDispatch } from '../../store';
import { getBeerDetail, getBeers } from '../../../service/beerApi';
import { IGetParams } from '../../../modules/service';

import { beersSlice } from './BeersSlice';

export const fetchBeers = (params: IGetParams) => (dispatch: AppDispatch) => {
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
export const fetchBeerDetails = (id: number) => (dispatch: AppDispatch) => {
	try {
		dispatch(beersSlice.actions.beersFetching());
		(async () => {
			const fetch = await getBeerDetail(id);
			if (fetch) dispatch(beersSlice.actions.beerDetailsFetchingSuccess(fetch.data[0]));
		})();
	} catch (e) {
		dispatch(beersSlice.actions.beersFetchingError('fetching error'));
	}
};
export const fetchAllBeersLength = (params: IGetParams) => (dispatch: AppDispatch) => {
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
