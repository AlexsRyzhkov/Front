import { IAuthResponse, ICodeResponse } from "@entities/auth/model/AuthModel";
import { $axios } from "@shared/http/http";

export class AuthService {
	static group = '/v1/auth';

	static async login(params: { email: string }) {
		return $axios.post<ICodeResponse>(`${AuthService.group}/login`, params);
	}

	static async register(params: { email: string, username: string }) {
		return $axios.post<ICodeResponse>(`${AuthService.group}/register`, params);
	}

	static async logout() {
		return $axios.post(`${AuthService.group}/logout`);
	}

	static async resendCode(params: { email: string }) {
		return $axios.post<ICodeResponse>(`${AuthService.group}/resend-code`, {}, {
			params: {
				email: params.email,
			},
		});
	}

	static async verifyCode(params: { codeToken: string, code: string }) {
		return $axios.post<IAuthResponse>(`${AuthService.group}/verify-code`, {}, {
			params: {
				code_token: params.codeToken,
				code: params.code,
			},
		});
	}
}