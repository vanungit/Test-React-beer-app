import React, { useCallback, useEffect, useState } from 'react';
import { Pagination, Input, Layout, Button } from 'antd';
import { FilterOutlined } from '@ant-design/icons';
import moment from 'moment';

import Filters from '../../components/Filters/Filters';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { fetchAllBeersLength, fetchBeers } from '../../store/reducers/beers/BeersActionCreators';
import BeersList from '../../components/BeersList/BeersList';
import { IGetParams } from '../../modules/service';
import { IFiltersValue } from '../../modules/filters';

import { getBeersSelector } from '../../store/reducers/selectors/getBeers';

import { IBeers } from '../../modules/beers';

import styles from './Beers.module.scss';

const { Content } = Layout;
const { Search } = Input;

export const Beers = () => {
	const dispatch = useAppDispatch();

	const [currentPage, setCurrentPage] = useState<number>(1);
	const [showFilters, setShowFilters] = useState<boolean>(false);

	const { beers, allBeersLength, isLoading } = useAppSelector(getBeersSelector);

	const [params, setParams] = useState<IGetParams>({
		beer_name: '',
		page: 1,
		per_page: 10,
		brewed_before: null,
		abv_gt: null,
	});

	useEffect(() => {
		dispatch(fetchBeers(params));
		dispatch(fetchAllBeersLength({ beer_name: params.beer_name, brewed_before: params.brewed_before, abv_gt: params.abv_gt }));
	}, [params, dispatch]);

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

	return (
		<Layout data-testid='beers-page'>
			<div className={styles.mainPage}>
				<Content key='search-content'>
					<Search data-testid='search-input' className={styles.searchName} placeholder='Name here' onSearch={handleSearch} />
					<Button data-testid='toggle-btn' name='toggle' onClick={handleShow} style={{ marginTop: '4px' }}>
						<FilterOutlined />
					</Button>
				</Content>

				{showFilters && (
					<div data-testid='toggle-filters'>
						<Filters onSubmitForm={onSubmitForm} />
					</div>
				)}
				{isLoading && <div className={styles.loading}>Loading... </div>}

				<Content className={styles.listContainer}>
					{beers.map((element: IBeers, index: number) => (
						<BeersList element={element} key={index} />
					))}
				</Content>
				{allBeersLength >= 1 && <Pagination onChange={setPagination} current={currentPage} defaultCurrent={1} total={allBeersLength - 1} />}
			</div>
		</Layout>
	);
};
