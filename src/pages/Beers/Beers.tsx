import React, { useEffect } from 'react';
import { Pagination, Layout } from 'antd';
import { FilterOutlined } from '@ant-design/icons';

import { useAppDispatch, useAppSelector } from '../../hooks/useRedux';
import { fetchAllBeersLength, fetchBeers } from '../../store/reducers/beers/BeersActionCreators';
import BeersList from '../../components/BeersList/BeersList';

import { getBeersSelector } from '../../store/reducers/selectors/getBeers';

import { IBeers } from '../../modules/beers';

import { useSearchParams } from '../../hooks/useSearchParams';

import { Btn, ConnectedForm, SearchC } from '../../components';

import styles from './Beers.module.scss';

const { Content } = Layout;

export const Beers = () => {
	const dispatch = useAppDispatch();
	const { handleSearch, handleShow, setParams, setPagination, showFilters, currentPage, params } = useSearchParams();

	const { beers, allBeersLength, isLoading } = useAppSelector(getBeersSelector);

	useEffect(() => {
		dispatch(fetchBeers(params));
		dispatch(fetchAllBeersLength({ beer_name: params.beer_name, brewed_before: params.brewed_before, abv_gt: params.abv_gt }));
	}, [params, dispatch]);

	return (
		<>
			<div className={styles.mainPage}>
				<Content key='search-content'>
					<SearchC data-testid='search-input' handleSearch={handleSearch} searchClass={styles.searchName} />
					<Btn data-testid='search-input' style={{ marginTop: '4px' }} onClick={handleShow} className={styles.searchName}>
						<FilterOutlined />
					</Btn>
				</Content>
				<ConnectedForm dataTestid='toggle-filters' showFilters={showFilters} setParams={setParams} />
				{isLoading && <div className={styles.loading}>Loading... </div>}
				<Content className={styles.listContainer}>
					{beers.map((element: IBeers, index: number) => (
						<BeersList element={element} key={index} />
					))}
				</Content>
				{allBeersLength >= 1 && <Pagination onChange={setPagination} current={currentPage} defaultCurrent={1} total={allBeersLength - 1} />}
			</div>
		</>
	);
};
