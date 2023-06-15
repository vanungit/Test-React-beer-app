import React from 'react';

import { Input, InputRef } from 'antd';
import { SearchProps } from 'antd/es/input/Search';

const { Search } = Input;

interface Props {
	handleSearch(values: any): void;
	searchClass: string;
}
const SearchC: React.FC<Props> = props => {
	const { handleSearch, searchClass, ...rest } = props;
	return (
		<>
			<Search placeholder='Name here' className={searchClass} {...rest} onSearch={handleSearch} />
		</>
	);
};
export default SearchC;
