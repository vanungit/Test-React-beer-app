import { IBeers } from '../../modules/beers';
import { apiUrl, getBeerDetail } from '../../service/beerApi';
import { testExample } from '../../utils/test.utils';

const axios = require('axios');

jest.mock('axios');

describe('testing Details Page', () => {
	let response: IBeers;
	beforeEach(() => {
		response = testExample;
	});

	it('testing fetchBeerDetails should return users list', async () => {
		axios.get.mockResolvedValueOnce(response);
		const result = await getBeerDetail(11);

		expect(axios.get).toHaveBeenCalledWith(`${apiUrl}/beers/11`);
		expect(result).toEqual(response);
	});

	it('testing wrong should return empty users list', async () => {
		const message = 'Network Error';
		axios.get.mockRejectedValueOnce(new Error(message));

		const result = await getBeerDetail(11);

		expect(axios.get).toHaveBeenCalledWith(`${apiUrl}/beers/11`);
		expect(result).toEqual(undefined);
	});
});
