import { useEffect } from 'react';
import { useParams } from 'react-router';
import { Layout } from 'antd';

import { useAppDispatch, useAppSelector } from '../../hooks/useRedux';
import { fetchBeerDetails } from '../../store/reducers/beers/BeersActionCreators';

import { getBeersSelector } from '../../store/reducers/selectors/getBeers';

import styles from './DetailsPage.module.scss';

const { Content } = Layout;

export const DetailsPage = () => {
	const dispatch = useAppDispatch();
	const beerId: number = Number(useParams<{ id?: string }>().id);
	const { beerDetails: beer, isLoading } = useAppSelector(getBeersSelector);

	useEffect(() => {
		dispatch(fetchBeerDetails(beerId));
	}, [dispatch, beerId]);

	return (
		<Layout data-testid='beers-details-page' className={styles.beerList}>
			{isLoading && <div className={styles.loading}>Loading... </div>}

			<Content className={styles.detailsPage}>
				{beer === null && <div>Loading...</div>}
				<div className={styles.detailsBlock}>{beer && <img className={styles.detailsImg} src={beer.image_url} alt='Beer' />}</div>
				<div className={styles.detailsBlock}>
					<h1>{beer && beer.name} </h1>
					<p>{beer && beer.first_brewed}</p>
					<p>{beer && beer.ibu}</p>
					<p>{beer && beer.abv}</p>
					<p>{beer && beer.description}</p>
				</div>
			</Content>
		</Layout>
	);
};
