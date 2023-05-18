import { useEffect } from 'react';
import { Redirect, useHistory, useParams } from 'react-router';
import { Layout } from 'antd';

import { useAppDispatch, useAppSelector } from '../../hooks/useRedux';
import { fetchBeerDetails } from '../../store/reducers/beers/BeersActionCreators';

import { getBeersSelector } from '../../store/reducers/selectors/getBeers';

import styles from './DetailsPage.module.scss';

const { Content } = Layout;

const DetailsPage = () => {
	const dispatch = useAppDispatch();
	const history = useHistory();
	const beerId: number = Number(useParams<{ id?: string }>().id);
	const { beerDetails: beer, isLoading } = useAppSelector(getBeersSelector);

	useEffect(() => {
		dispatch(fetchBeerDetails(beerId));
	}, [dispatch, beerId]);

	if (!beer) {
		history.push('/not-found');
	}
	return (
		beer && (
			<Layout data-testid='beers-details-page' className={styles.beerList}>
				<Content className={styles.detailsPage}>
					<div className={styles.detailsBlock}>{<img className={styles.detailsImg} src={beer.image_url} alt='Beer' />}</div>
					<div className={styles.detailsBlock}>
						<h1>{beer.name} </h1>
						<p>{beer.first_brewed}</p>
						<p>{beer.ibu}</p>
						<p>{beer.abv}</p>
						<p>{beer.description}</p>
					</div>
				</Content>
			</Layout>
		)
	);
};

export default DetailsPage;
