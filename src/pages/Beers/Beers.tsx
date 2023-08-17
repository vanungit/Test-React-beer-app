import { useEffect, useState, useMemo } from 'react';
import { Pagination, Layout } from 'antd';
import { FilterOutlined } from '@ant-design/icons';
import { Spin, Empty } from 'antd';

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
	const { beers, allBeersLength, isLoading } = useAppSelector(getBeersSelector);

	const [showFilters, setShowFilters] = useState(false);

	const { handleSearch, setParams, setPagination, currentPage, params } = useSearchParams();

	useEffect(() => {
		dispatch(fetchBeers(params));
		dispatch(fetchAllBeersLength({ beer_name: params.beer_name, brewed_before: params.brewed_before, abv_gt: params.abv_gt }));
	}, [params, dispatch]);

	const handleShow = () => {
		setShowFilters(prev => {
			if (prev) {
			}
			return !prev;
		});
	};
	const beersList = useMemo((): JSX.Element => {
		if (isLoading) {
			return (
				<div className={styles.loading}>
					<Spin size='large' />
				</div>
			);
		}
		if (beers.length === 0) {
			return <Empty />;
		}
		return (
			<Content className={styles.listContainer}>
				{beers.map((element: IBeers, index: number) => (
					<BeersList element={element} key={index} />
				))}
			</Content>
		);
	}, [isLoading, beers]);

	return (
		<>
			<Content className={styles.mainPage} data-testid='beers-page'>
				<Content key='search-content'>
					<SearchC data-testid='search-input' handleSearch={handleSearch} searchClass={styles.searchName} />
					<Btn data-testid='toggle-btn' style={{ marginTop: '4px' }} onClick={handleShow} className={styles.searchName}>
						<FilterOutlined />
					</Btn>
				</Content>
				<ConnectedForm dataTestid='toggle-filters' showFilters={showFilters} setParams={setParams} />
				{beersList}
				{!isLoading && beers.length !== 0 && (
					<Pagination onChange={setPagination} current={currentPage} defaultCurrent={1} total={allBeersLength - 1} />
				)}
			</Content>
			<div>dasdsa</div>
		</>
	);
};
