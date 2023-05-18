import React from 'react';
import { Button } from 'antd';
import { ButtonProps } from 'antd/lib/button';

interface IProps extends ButtonProps {}
const Btn: React.FC<IProps> = props => {
	const { onClick, className, children, ...others } = props;
	return (
		<>
			<Button {...others} onClick={onClick}>
				{children}
			</Button>
		</>
	);
};
export default Btn;
