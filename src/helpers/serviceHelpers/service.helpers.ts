import { GetParams } from '../../modules/service';

export function getParams(obj: GetParams) {
	const result = [];
	let isFirst = true;
	for (const i in obj) {
		if (obj[i]) {
			const params = `${i}=${obj[i]}`;
			if (isFirst) {
				result.push('?' + params);
				isFirst = false;
			} else {
				result.push('&' + params);
			}
		}
	}
	return result.join('');
}
