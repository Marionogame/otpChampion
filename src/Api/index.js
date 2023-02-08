import axios from "axios";
/* import { API_START, API_END, API_ERROR, API_FAILURE } from "@Actions/types";  */
const API_START = "";
const API_END = "";
const API_ERROR = "";
const API_FAILURE = "";
const Api = axios.create({
	baseURL: process.env.REACT_APP_API_URL,
	headers: {
		common: {
			Authorization: "Bearer ",
			platform: "web",
		},
	},
});

export default Api;

export const apiStart = () => {
	return {
		type: API_START,
	};
};

export const apiEnd = () => {
	return {
		type: API_END,
	};
};

export const apiError = (data, type = API_ERROR) => {
	return {
		type,
		payload: { data },
	};
};

export function requestSuccess(type, data = null) {
	return { type, payload: { data } };
}

export function requestFail(data) {
	return { type: API_FAILURE, payload: { data } };
}
