import React from 'react';
import { DatePicker, Form, InputNumber, Space } from 'antd';

import { IFiltersValue } from '../../modules/filters';
import Btn from '../Btn/Btn';

const Filters: React.FC<any> = ({ onSubmitForm, showFilters, dataTestid }) => {
	const onFinish = (values: IFiltersValue) => onSubmitForm(values);

	return (
		<div data-testid={dataTestid}>
			{showFilters && (
				<Form name='complex-form' onFinish={onFinish} labelCol={{ span: 4 }} wrapperCol={{ span: 16 }} style={{ maxWidth: 650, marginTop: 15 }}>
					<h2>Filters</h2>

					<Form.Item label='Hard Komb %'>
						<Space>
							<Form.Item name='abv_gt' noStyle>
								<InputNumber style={{ width: 255 }} min={1} max={20} />
							</Form.Item>
						</Space>
					</Form.Item>

					<Form.Item label='Brewed before'>
						<Space>
							<Form.Item name='brewed_before' noStyle>
								<DatePicker style={{ width: 255 }} />
							</Form.Item>
						</Space>
					</Form.Item>

					<Form.Item label=' ' colon={false}>
						<Btn type='primary' htmlType='submit'>
							Search
						</Btn>
					</Form.Item>
				</Form>
			)}
		</div>
	);
};
export default Filters;
