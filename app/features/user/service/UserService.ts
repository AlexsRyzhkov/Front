import { UserModal } from "@features/user/model/UserModal";
import { $axios } from "@shared/http/http";

export class UserService {
	static group = '/v1/users';

	static async getCurrent() {
		const { data } = await $axios.get<UserModal>(`${UserService.group}/me`);

		return data;
	}
}