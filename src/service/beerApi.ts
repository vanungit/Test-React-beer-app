import axios from 'axios';

import { IGetParams } from '../modules/service';
import { getParams } from '../helpers';
export const apiUrl = 'https://api.punkapi.com/v2';

export const getBeers = async (params: IGetParams) => {
	try {
		const fetchParams = getParams(params);
		return await axios.get(`${apiUrl}/beers/`, { params: fetchParams });
	} catch (e) {
		return new Error((e as Error).message);
	}
};
export const getBeerDetail = async (id: number) => {
	try {
		return await axios.get(`${apiUrl}/beers/${id}`);
	} catch (e) {
		return new Error((e as Error).message);
	}
};
