import React from 'react';
import { Link } from 'react-router-dom';
import { RightOutlined } from '@ant-design/icons';
import { Layout } from 'antd';

import { IBeers } from '../../modules/beers';

import styles from './BeersList.module.scss';

const { Content } = Layout;

interface Props {
	element: IBeers;
}

const BeersList: React.FC<Props> = ({ element }) => {
	return (
		<Content data-testid={'beers-item'} key={`beer${element.id}`} className={styles.beerElementDiv}>
			<div className={styles.beerImage}>
				<img src={element.image_url} alt='Beer' />
			</div>
			<div className={styles.text}>
				<p>{element.name}</p>
				<p>{element.description.substring(0, 150)}...</p>
			</div>
			<div className={styles.arrow}>
				<Link className={styles.link} to={`/beers/${element.id}`}>
					<RightOutlined />
				</Link>
			</div>
		</Content>
	);
};
export default React.memo(BeersList);
