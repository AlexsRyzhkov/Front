import GitIcon from '@ui-kit/icon/assert/git-icon.svg?react';
import TelegramIcon from '@ui-kit/icon/assert/telegram-icon.svg?react';
import ListIcon from '@ui-kit/icon/assert/list-icon.svg?react';

import Hight2Icon from '@ui-kit/icon/assert/hight-2-priority-icon.svg?react';
import Hight1Icon from '@ui-kit/icon/assert/hight-1-priority-icon.svg?react';
import MiddleIcon from '@ui-kit/icon/assert/middle-priority-icon.svg?react';
import Low1Icon from '@ui-kit/icon/assert/low-1-priority-icon.svg?react';
import Low2Icon from '@ui-kit/icon/assert/low-2-priority-icon.svg?react';

import GitflicIcon from '@ui-kit/icon/assert/gitflic-icon.svg?react';
import GitlabIcon from '@ui-kit/icon/assert/gitlab-icon.svg?react';

export const icons: Record<string, typeof GitIcon> = {
	"git-icon": GitIcon,
	"telegram-icon": TelegramIcon,
	"list-icon": ListIcon,

	'hight-2-icon': Hight2Icon,
	'hight-1-icon': Hight1Icon,
	'middle-icon': MiddleIcon,
	'low-1-icon': Low1Icon,
	'low-2-icon': Low2Icon,

	'gitflic-icon': GitflicIcon,
	'gitlab-icon': GitlabIcon,
};