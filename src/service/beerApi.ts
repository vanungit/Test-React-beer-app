import axios from 'axios';

import { GetParams } from '../modules/service';
import { getParams } from '../helpers/serviceHelpers/service.helpers';
export const apiUrl = 'https://api.punkapi.com/v2';

export const getBeers = async (params: GetParams | number) => {
	try {
		let fetchParams;
		if (typeof params !== 'number') {
			fetchParams = getParams(params);
		} else {
			fetchParams = params;
		}
		return await axios.get(`${apiUrl}/beers/${fetchParams}`);
	} catch (e) {
		console.log('Fetching error');
	}
};
