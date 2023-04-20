import { getParams } from './service.helpers';

describe('testing service', () => {
	it('testing service function getParams', () => {
		expect(getParams({ param1: 1, param2: 2, param3: 3 })).toBe('?param1=1&param2=2&param3=3');
		expect(getParams({ param1: null, param2: 2, param3: null })).toBe('?param2=2');
		expect(getParams({ param1: null, param2: 2, param3: 3 })).toBe('?param2=2&param3=3');
	});
});
