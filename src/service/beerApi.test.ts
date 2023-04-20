import { apiUrl, getBeers } from './beerApi';

const axios = require('axios');

jest.mock('axios');

describe('fetchUsers', () => {
	const response = {
		id: 11,
		name: 'Misspent Youth',
		tagline: 'Milk & Honey Scotch Ale.',
		first_brewed: '04/2013',
		description: 'The brainchild of our small batch brewer, George Woods. A dangerously drinkable milk sugar- infused Scotch Ale.',
		image_url: 'https://images.punkapi.com/v2/keg.png',
		abv: 7.3,
		ibu: 30,
		target_fg: 1020,
		target_og: 1079,
		ebc: 120,
		srm: 60,
		ph: 4.4,
		attenuation_level: 74.7,
		volume: {
			value: 20,
			unit: 'litres',
		},
		boil_volume: {
			value: 25,
			unit: 'litres',
		},
		method: {
			mash_temp: [
				{
					temp: {
						value: 67,
						unit: 'celsius',
					},
					duration: 75,
				},
			],
			fermentation: {
				temp: {
					value: 19,
					unit: 'celsius',
				},
			},
			twist: 'See honey and lactose additions',
		},
		ingredients: {
			malt: [
				{
					name: 'Pale Ale',
					amount: {
						value: 2.18,
						unit: 'kilograms',
					},
				},
				{
					name: 'Caramalt',
					amount: {
						value: 0.3,
						unit: 'kilograms',
					},
				},
				{
					name: 'Dark Crystal',
					amount: {
						value: 0.3,
						unit: 'kilograms',
					},
				},
				{
					name: 'Smoked Weyermann',
					amount: {
						value: 1.8,
						unit: 'kilograms',
					},
				},
				{
					name: 'Flaked Oats',
					amount: {
						value: 0.6,
						unit: 'kilograms',
					},
				},
				{
					name: 'Brown',
					amount: {
						value: 0.6,
						unit: 'kilograms',
					},
				},
				{
					name: 'Amber',
					amount: {
						value: 0.1,
						unit: 'kilograms',
					},
				},
				{
					name: 'Chocolate',
					amount: {
						value: 0.05,
						unit: 'kilograms',
					},
				},
				{
					name: 'Munich',
					amount: {
						value: 0.6,
						unit: 'kilograms',
					},
				},
				{
					name: 'Crystal 150',
					amount: {
						value: 0.2,
						unit: 'kilograms',
					},
				},
			],
			hops: [
				{
					name: 'First Gold',
					amount: {
						value: 25,
						unit: 'grams',
					},
					add: 'start',
					attribute: 'bitter',
				},
				{
					name: 'Fuggles',
					amount: {
						value: 25,
						unit: 'grams',
					},
					add: 'start',
					attribute: 'bitter',
				},
				{
					name: 'Honey',
					amount: {
						value: 250,
						unit: 'grams',
					},
					add: 'middle',
					attribute: 'Flavour',
				},
				{
					name: 'Lactose',
					amount: {
						value: 375,
						unit: 'grams',
					},
					add: 'middle',
					attribute: 'Flavour',
				},
				{
					name: 'First Gold',
					amount: {
						value: 10,
						unit: 'grams',
					},
					add: 'end',
					attribute: 'aroma',
				},
				{
					name: 'Fuggles',
					amount: {
						value: 10,
						unit: 'grams',
					},
					add: 'end',
					attribute: 'aroma',
				},
			],
			yeast: 'Wyeast 1056 - American Ale™',
		},
		food_pairing: ['Roasted garlic and chilli infused camembert cheese', 'Korean style chicken wings', 'Chocolate milk shake'],
		brewers_tips: 'Lots of malt in this one. Mash-in in stages, and spread the pale ale malt throughout the mash to ',
		contributed_by: 'Sam Mason <samjbmason>',
	};
	describe('when API call is successful', () => {
		it('should return users list', async () => {
			axios.get.mockResolvedValueOnce(response);
			const result = await getBeers(11);

			expect(axios.get).toHaveBeenCalledWith(`${apiUrl}/beers/11`);
			expect(result).toEqual(response);
		});
	});

	describe('when API call fails', () => {
		it('should return empty users list', async () => {
			const message = 'Network Error';
			axios.get.mockRejectedValueOnce(new Error(message));

			const result = await getBeers(11);

			expect(axios.get).toHaveBeenCalledWith(`${apiUrl}/beers/11`);
			expect(result).toEqual(undefined);
		});
	});
});
