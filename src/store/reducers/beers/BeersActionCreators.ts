import { AppDispatch } from '../../store';
import { getBeerDetail, getBeers } from '../../../service/beerApi';
import { IGetParams } from '../../../modules/service';

import { beersActions } from './BeersSlice';

export const fetchBeers = (params: IGetParams) => async (dispatch: AppDispatch) => {
	try {
		dispatch(beersActions.beersFetching());
		const fetch = await getBeers(params);
		if (!(fetch instanceof Error)) dispatch(beersActions.beersFetchingSuccess(fetch.data));
	} catch (e) {
		dispatch(beersActions.beersFetchingError('fetching error'));
	}
};
export const fetchBeerDetails = (id: number) => async (dispatch: AppDispatch) => {
	try {
		dispatch(beersActions.beersFetching());

		const fetch = await getBeerDetail(id);
		if (!(fetch instanceof Error)) dispatch(beersActions.beerDetailsFetchingSuccess(fetch.data[0]));
	} catch (e) {
		dispatch(beersActions.beersFetchingError('fetching error'));
	}
};
export const fetchAllBeersLength = (params: Omit<IGetParams, 'per_page' | 'page'>) => async (dispatch: AppDispatch) => {
	try {
		dispatch(beersActions.beersFetching());

		const fetch = await getBeers(params);
		if (!(fetch instanceof Error)) dispatch(beersActions.allBeersLengthFetchingSuccess(fetch.data.length));
	} catch (e) {
		dispatch(beersActions.beersFetchingError('fetching error'));
	}
};
