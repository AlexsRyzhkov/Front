import { useCurrentUser } from "@features/user/query/useCurrentUser";
import { Icon } from "@ui-kit/icon/icon";

import '@pages/profile/ui/ProfilePage.scss';

export const ProfilePage = () => {
	const { data } = useCurrentUser();

	return (
		<div className={'profile-page'}>
			<div className={'profile-page__avatar'}>
				AD
			</div>
			<span>Сведения</span>
			<div className={'profile-page__info'}>
				<div className={'profile-page__field'}>
					<Icon icon={'badge'} size={'32px'}/>
					{data?.username}
				</div>
				<div className={'profile-page__field'}>
					<Icon icon={'alternate_email'} size={'32px'}/>
					{data?.email}
				</div>
			</div>
		</div>
	);
};