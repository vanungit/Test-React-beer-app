import React, { useState, useCallback } from 'react';

import moment from 'moment';

import { IGetParams } from '../modules/service';
import { IFiltersValue } from '../modules/filters';

export const useSearchParams = () => {
	const [params, setParams] = useState<IGetParams>({
		beer_name: '',
		page: 1,
		per_page: 10,
		brewed_before: null,
		abv_gt: null,
	});
	const [showFilters, setShowFilters] = useState<boolean>(false);
	const [currentPage, setCurrentPage] = useState<number>(1);

	const handleSearch = useCallback((name: string) => {
		setParams((prev: IGetParams) => {
			return { ...prev, beer_name: name, brewed_before: null, abv_gt: null };
		});
		setShowFilters(false);
	}, []);

	const setPagination = useCallback((value: number) => {
		setParams((prev: IGetParams) => {
			return { ...prev, page: value };
		});
		setCurrentPage(value);
	}, []);

	const handleShow = useCallback(() => setShowFilters(prev => !prev), []);

	const onSubmitForm = useCallback((values: IFiltersValue) => {
		const result = { ...values, brewed_before: moment(values.brewed_before).format('MM-YYYY') };
		setParams((prev: IGetParams) => {
			return { ...prev, ...result };
		});
	}, []);
	return { handleSearch, handleShow, onSubmitForm, setPagination, showFilters, currentPage, params };
};
