import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { Layout } from 'antd';

import { getBeers } from '../../service/beerApi';

import styles from './DetailsPage.module.scss';

const { Content } = Layout;

export const DetailsPage = () => {
	const beerId: number = Number(useParams<{ id?: string }>().id);
	const [beer, setBeer] = useState<any>(null);

	useEffect(() => {
		const fetchData = async () => {
			const fetchedData = await getBeers(beerId);
			return fetchedData;
		};
		fetchData().then((res: any) => {
			setBeer(res.data[0]);
		});
	}, [beerId]);

	return (
		<Layout data-testid='beers-details-page' className={styles.beerList}>
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
