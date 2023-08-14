export interface IGetParams {
	beer_name: string;
	page: number;
	per_page: number;
	brewed_before: null | string;
	abv_gt: null | number;
}
