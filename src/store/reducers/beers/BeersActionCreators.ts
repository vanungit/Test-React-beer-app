import { AppDispatch } from '../../store';
import { getBeerDetail, getBeers } from '../../../service/beerApi';
import { IGetParams } from '../../../modules/service';

import { beersActions } from './BeersSlice';

export const fetchBeers = (params: IGetParams) => (dispatch: AppDispatch) => {
	try {
		dispatch(beersActions.beersFetching());
		(async () => {
			const fetch = await getBeers(params);
			if (fetch) dispatch(beersActions.beersFetchingSuccess(fetch.data));
		})();
	} catch (e) {
		dispatch(beersActions.beersFetchingError('fetching error'));
	}
};
export const fetchBeerDetails = (id: number) => (dispatch: AppDispatch) => {
	try {
		dispatch(beersActions.beersFetching());
		(async () => {
			const fetch = await getBeerDetail(id);
			if (fetch) dispatch(beersActions.beerDetailsFetchingSuccess(fetch.data[0]));
		})();
	} catch (e) {
		dispatch(beersActions.beersFetchingError('fetching error'));
	}
};
export const fetchAllBeersLength = (params: IGetParams) => (dispatch: AppDispatch) => {
	try {
		dispatch(beersActions.beersFetching());
		(async () => {
			const fetch = await getBeers(params);
			if (fetch) dispatch(beersActions.allBeersLengthFetchingSuccess(fetch.data.length));
		})();
	} catch (e) {
		dispatch(beersActions.beersFetchingError('fetching error'));
	}
};
