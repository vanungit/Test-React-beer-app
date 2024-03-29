import { useState, useCallback } from 'react';

import { IGetParams } from '../modules/service';

export const useSearchParams = () => {
	const [params, setParams] = useState<IGetParams>({
		beer_name: '',
		page: 1,
		per_page: 10,
		brewed_before: null,
		abv_gt: null,
	});
	const [currentPage, setCurrentPage] = useState<number>(1);

	const handleSearch = useCallback((name: string) => {
		setParams((prev: IGetParams) => {
			return { ...prev, beer_name: name, brewed_before: null, abv_gt: null };
		});
	}, []);

	const setPagination = useCallback((value: number) => {
		setParams((prev: IGetParams) => {
			return { ...prev, page: value };
		});
		setCurrentPage(value);
	}, []);

	return { handleSearch, setPagination, setParams, currentPage, params };
};
