import React from 'react';
import { Button, DatePicker, Form, InputNumber, Space } from 'antd';

import { IFiltersValue } from '../../modules/filters';

interface Props {
	onSubmitForm(values: IFiltersValue): void;
}
const Filters: React.FC<Props> = ({ onSubmitForm }) => {
	const onFinish = (values: IFiltersValue) => onSubmitForm(values);

	return (
		<>
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
					<Button type='primary' htmlType='submit'>
						Search
					</Button>
				</Form.Item>
			</Form>
		</>
	);
};
export default Filters;
