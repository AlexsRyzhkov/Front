import { UserService } from "@features/user/service/UserService";
import { useQuery } from "@tanstack/react-query";

export const useCurrentUser = () => {
	return useQuery({
		queryKey: ['user-me'],
		queryFn: UserService.getCurrent,
	});
};