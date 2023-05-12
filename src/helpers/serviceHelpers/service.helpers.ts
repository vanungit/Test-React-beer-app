import { IGetParams } from '../../modules/service';

export function getParams(params: IGetParams) {
	const urlParams = new URLSearchParams();
	Object.entries(params).forEach((param) => {
		if (param[1]) {
			urlParams.append(param[0], `${param[1]}`);
		}
	});
	return urlParams;
}
