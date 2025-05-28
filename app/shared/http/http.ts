import axios from "axios";

import { IAuthResponse } from "@entities/auth/model/AuthModel";

const BACKEND_URL = "http://localhost:8000/";

export const $axios = axios.create({
	baseURL: BACKEND_URL,
	withCredentials: true,
});

$axios.interceptors.request.use((config) => {
	const token = localStorage.getItem('access_token');

	if (token) {
		config.headers.Authorization = `Bearer ${token}`;
	}

	return config;
});

$axios.interceptors.response.use(response => response, async (error) => {
	const originalConfig = error.config;

	if (error.response?.status === 401 && !originalConfig._retry) {
		console.log(originalConfig._retry);

		originalConfig._retry = true;


		try {
			const refreshResponse = await axios.post<IAuthResponse>(`${BACKEND_URL}v1/auth/refresh`, {}, {
				withCredentials: true,
			});

			localStorage.setItem('access_token', refreshResponse.data.access_token);

			return $axios(originalConfig);
		} catch (e) {
			localStorage.removeItem('access_token');

			window.location.href = '/';

			return Promise.reject(e);
		}
	}

	return Promise.reject(error);
});