import { useRef } from 'react';

export const useLatest = <Value,>(val: Value) => {
	const valueRef = useRef(val);
	valueRef.current = val;

	return valueRef;
	///dasdsda
	////asadewads
	////asadewads
};
