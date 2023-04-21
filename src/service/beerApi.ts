import axios from 'axios';

import { GetParams } from '../modules/service';
import { getParams } from '../helpers/serviceHelpers/service.helpers';
export const apiUrl = 'https://api.punkapi.com/v2';

export const getBeers = async (params: GetParams) => {
	try {
		const fetchParams = getParams(params);
		return await axios.get(`${apiUrl}/beers/${fetchParams}`);
	} catch (e) {
		// console.log('Fetching error');
	}
};
export const getBeerDetail = async (id: number) => {
	try {
		return await axios.get(`${apiUrl}/beers/${id}`);
	} catch (e) {
		// console.log('Fetching error');
	}
};
