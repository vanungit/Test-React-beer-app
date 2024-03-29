import { SetStateAction, useCallback } from 'react';

import moment from 'moment';

import * as filters from '../../modules/filters';
import { IGetParams } from '../../modules/service';

import Filters from './Filters';

interface FilterProps {
	showFilters: boolean;
	dataTestid: string;
	setParams: (val: SetStateAction<IGetParams>) => void;
}

export const ConnectedForm = (props: FilterProps) => {
	const { showFilters, dataTestid, setParams } = props;

	const onSubmitForm = useCallback(
		(values: filters.IFiltersValue) => {
			const result = { ...values, brewed_before: String(moment(values.brewed_before).format('MM-YYYY')) };
			setParams((prev: IGetParams) => {
				return { ...prev, ...result };
			});
		},
		[setParams]
	);

	return showFilters ? <Filters dataTestid={dataTestid} onSubmitForm={onSubmitForm} /> : <></>;
};
