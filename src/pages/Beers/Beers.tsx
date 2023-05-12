import React, { useCallback, useEffect, useState } from 'react';
import { Pagination, Input, Layout, Button } from 'antd';
import { FilterOutlined } from '@ant-design/icons';

import Filters from '../../components/Filters/Filters';
import { useAppDispatch, useAppSelector } from '../../hooks/useRedux';
import { fetchAllBeersLength, fetchBeers } from '../../store/reducers/beers/BeersActionCreators';
import BeersList from '../../components/BeersList/BeersList';

import { getBeersSelector } from '../../store/reducers/selectors/getBeers';

import { IBeers } from '../../modules/beers';

import { useSearchParams } from '../../hooks/useSearchParams';

import styles from './Beers.module.scss';

const { Content } = Layout;
const { Search } = Input;

export const Beers = () => {
	const dispatch = useAppDispatch();
	const { handleSearch, handleShow, onSubmitForm, setPagination, showFilters, currentPage, params } = useSearchParams();

	const { beers, allBeersLength, isLoading } = useAppSelector(getBeersSelector);

	useEffect(() => {
		dispatch(fetchBeers(params));
		dispatch(fetchAllBeersLength({ beer_name: params.beer_name, brewed_before: params.brewed_before, abv_gt: params.abv_gt }));
	}, [params, dispatch]);

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
