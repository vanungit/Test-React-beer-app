import React from 'react';
import { Link } from 'react-router-dom';
import { RightOutlined } from '@ant-design/icons';
import { Layout } from 'antd';

import styles from './BeersList.module.scss';

const { Content } = Layout;

interface Props {
	element: any;
}

export const BeersList: React.FC<Props> = ({ element }) => {
	return (
		<Content key={`beer${element.index}`} className={styles.beerElementDiv}>
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
export default BeersList;
