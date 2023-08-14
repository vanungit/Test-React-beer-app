import React from 'react';
import _debounce from 'lodash/debounce';

import { Input } from 'antd';

interface Props {
	handleSearch(values: string): void;
	searchClass: string | undefined;
}
const SearchC: React.FC<Props> = props => {
	const { handleSearch, searchClass, ...rest } = props;

	const handleDebounceFn = (e: React.ChangeEvent<HTMLInputElement>) => {
		handleSearch(e.target.value);
	};

	const debounceFn = React.useCallback(_debounce(handleDebounceFn, 600), []);

	return (
		<>
			<Input placeholder='Name here' className={searchClass} {...rest} onChange={debounceFn} />
		</>
	);
};
export default SearchC;
