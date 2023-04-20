export interface Beers {
	id: number;
	name: string;
	tagline: string;
	first_brewed: string;
	description: string;
	image_url: string;
	abv: number;
	ibu: number;
	target_fg: number;
	target_og: number;
	ebc: number;
	srm: number;
	ph: number;
	attenuation_level: number;
	volume: BoilVolume;
	boil_volume: BoilVolume;
	method: Method;
	ingredients: Ingredients;
	food_pairing: string[];
	brewers_tips: string;
	contributed_by: string;
}

export interface BoilVolume {
	value: number;
	unit: Unit | string;
}

export enum Unit {
	Celsius = 'celsius',
	Grams = 'grams',
	Kilograms = 'kilograms',
	Litres = 'litres',
}

export interface Ingredients {
	malt: Malt[];
	hops: Hop[];
	yeast: string;
}

export interface Hop {
	name: string;
	amount: BoilVolume;
	add: string;
	attribute: string;
}

export interface Malt {
	name: string;
	amount: BoilVolume;
}

export interface Method {
	mash_temp: MashTemp[];
	fermentation: Fermentation;
	twist: null | string;
}

export interface Fermentation {
	temp: BoilVolume;
}

export interface MashTemp {
	temp: BoilVolume;
	duration: number | null;
}
