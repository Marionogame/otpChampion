import { isEmpty, isNaN } from "lodash";

export function phoneFormat(string) {
	if (!isEmpty(string)) {
		const cleanString = string.replace(/[^\d]/g, "");
		if (cleanString.length === 10) {
			return cleanString.replace(/(\d{3})(\d{3})(\d{4})/, "($1) $2-$3");
		}
		if (cleanString.length === 11) {
			return cleanString.replace(/(\d{1})(\d{3})(\d{3})(\d{4})/, "$1 ($2) $3-$4");
		}
		return cleanString;
	}
	return "";
}

export function padWithZero(number) {
	if (isNaN(number)) return "";
	const string = number.toString();
	if (number < 10) {
		return `0${string}`;
	}
	return string;
}
