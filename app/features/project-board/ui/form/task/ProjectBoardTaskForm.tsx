import { IColumn } from "@features/project-board/model/ProjectBoard";
import { useColumn } from "@features/project-board/query/useColumn";
import { CommentList } from "@features/project-board/ui/form/task/comment-list/CommentList";
import { CommitList } from "@features/project-board/ui/form/task/commit-list/CommitList";
import { UserView } from "@features/project-board/ui/form/task/user-view/UserView";
import { ModalAsign } from "@features/project-board/ui/modal/asign/ModalAsign";
import { ModalBranch } from "@features/project-board/ui/modal/branch/ModalBranch";
import { ModalLabel } from "@features/project-board/ui/modal/label/ModalLabel";
import { IBranch, ITask, IComment, TaskCreate } from "@features/project-code/model/ProjectCode";
import { useCommitByBranchID } from "@features/task/query/useCommitByBranchID";
import { useParams } from "@tanstack/react-router";
import { Button } from "@ui-kit/button/Button";
import { Form } from "@ui-kit/form/Form";
import { Icon } from "@ui-kit/icon/icon";
import clsx from "clsx";
import { motion, AnimatePresence } from "motion/react";
import { Input } from "@ui-kit/input";

import './ProjectBoardTaskForm.scss';
import { useState, FC } from "react";

interface IProjectBoardTaskForm {
	columnID: string;
	task?: ITask;
	onClose?: () => void;
	onSave?: (task: TaskCreate, comments: IComment[]) => void;
	isLoading: boolean;
}

export const ProjectBoardTaskForm: FC<IProjectBoardTaskForm> = ({ columnID, task, onClose, onSave, isLoading }) => {
	const params = useParams({ from: "/_authentication/projects/$id/boards/$boardId" });

	const [form, setForm] = useState<TaskCreate>({
		title: task?.title || "",
		description: task?.description || "",
		assignee_member_id: "6832f74f7d4b7267035f3220",
		column_id: columnID,
		board_id: params.boardId,
		branch_id: task?.branch_id || "",
		labels: task?.labels || [],
		priority: 1,
	});

	const [opens, setOpens] = useState({
		openSelectBoard: false,
		openDetailList: true,
	});

	const toggleSelectBoard = () => {
		setOpens(prev => ({
			...prev,
			openSelectBoard: !prev.openSelectBoard,
		}));
	};

	const toggleDetailList = () => {
		setOpens(prev => ({
			...prev,
			openDetailList: !prev.openDetailList,
		}));
	};

	const { data: columns } = useColumn({
		projectId: params.id,
		boardId: params.boardId,
	});

	const activeColumn = (columns as IColumn[]).find((column) => column.id === form.column_id);

	const otherColumns = columns?.filter((column) => column.id !== form?.column_id);

	const onSelectColumn = (column: IColumn) => {
		setForm(prev => ({
			...prev,
			column_id: column.id,
		}));
		setOpens(prev => ({
			...prev,
			openSelectBoard: false,
		}));
	};

	const onSaveLabel = (labels: string[]) => {
		setForm(prev => ({
			...prev,
			labels,
		}));
	};

	const onSaveBranch = (br: IBranch) => {
		setForm(prev => ({
			...prev,
			branch_id: br.id,
		}));
	};

	const [activity, setActivity] = useState(0);


	const [titleErr, setTitleErr] = useState('');

	const onSaveForm = () => {
		if (form.title.trim().length === 0) {
			setTitleErr("Поле должно быть заполнено");
		} else if (onSave) {
			onSave(form, []);
		}
	};

	const onChangeTitle = (e: any) => {
		setForm(prev => ({
			...prev,
			title: e.target.value,
		}));
	};

	const onChangeDescription = (e: any) => {
		setForm(prev => ({
			...prev,
			description: e.target.value,
		}));
	};

	return (
		<Form className={'task_form'}>
			<div className={'task_form__container'}>
				<div className={'task_form__info'}>
					<Input
						placeholder={"Название задачи"}
						value={form.title}
						onChange={onChangeTitle}
						error={form.title ? undefined : titleErr}
					/>
					<div className={'task_form__desc'}>
						Описание
						<textarea
							className={'task_form__desc-area'}
							rows={10}
							placeholder={"Описание"}
							value={form.description}
							onChange={onChangeDescription}
						/>
					</div>
					{task && (
						<div className={'task_form__info-dop'}>
							<p className={'task_form__info-dop-title'}>Активности</p>
							<div className={'task_form__info-dop-btn'}>
								<span>
									Коммиты
								</span>
							</div>
							<CommitList branchID={task?.branch_id || ""}/>
						</div>
					)}
				</div>
				<div className={'task_form__detail'}>
					<div className={'task_form__detail-title'}>
						<div className={'task_form__select'}>
							<div className={'task_form__select-display'} onClick={toggleSelectBoard}>
								{activeColumn?.name}
								<Icon
									icon={'arrow_back_ios'}
									color={'#2E394C'}
									size={'18px'}
									className={'task_form__select-icon'}
								/>
							</div>
							{opens.openSelectBoard && (
								<div className={'task_form__select-option'}>
									{otherColumns?.map((column) => (
										<span key={column.id}
										      onClick={() => onSelectColumn(column)}>{column.name}</span>
									))}
								</div>
							)}
						</div>
						<div className={clsx(
							'task_form__is-complete',
							activeColumn?.can_complete_task && 'task_form__is-complete--close',
						)}>
							{activeColumn?.can_complete_task ? "Решено" : "Не решено"}
						</div>
					</div>
					<div className={'task_form__detail-list'}>
						<div
							className={'task_form__info-dop-title-t'}
							onClick={toggleDetailList}
						>
							<span>Сведения</span>
							<Icon
								icon={'arrow_back_ios'}
								color={'#44546F'}
								size={'20px'}
								className={'task_form__select-icon-t'}
							/>
						</div>
						<AnimatePresence>
							{opens.openDetailList && (
								<motion.div
									initial={{ height: 0 }}
									animate={{ height: "auto" }}
									exit={{ height: 0 }}
									transition={{ duration: 0.1 }}
									style={{ overflow: 'hidden' }}
								>
									<div className={'task_form__info-drop-content'}>
										<div className={'detail-list-item__labels'}>
											<div className={'detail-list-item__name'}>
												<div className={'detail-list-item__p'}>Исполнитель</div>
												<div className={'detail-list-item__content'}>
													<ModalAsign/>
												</div>
											</div>
											<div className={'detail-list-item__name'}>
												<p className={'detail-list-item__p'}>Метки</p>
												<div className={'detail-list-item__content'}>
													<ModalLabel
														labels={form.labels}
														onSave={onSaveLabel}
													/>
												</div>
											</div>
											<div className={'detail-list-item__name'}>
												<p className={'detail-list-item__p'}>Автор</p>
												<div className={'detail-list-item__content'}>
													<UserView/>
												</div>
											</div>
											<div className={'detail-list-item__name'}>
												<p className={'detail-list-item__p'}>Ветка</p>
												<div className={'detail-list-item__content'}>
													<ModalBranch
														onSave={onSaveBranch}
														currentBranchID={form.branch_id}
													/>
												</div>
											</div>
										</div>
									</div>
								</motion.div>
							)}
						</AnimatePresence>
					</div>
				</div>
			</div>
			<div className={'task_form__btn'}>
				<Button
					variant={'cancel'}
					onClick={onClose}
				>
					Отмена
				</Button>
				<Button
					variant={'primary'}
					onClick={onSaveForm}
					disabled={isLoading}
				>
					Сохранить
				</Button>
			</div>
		</Form>
	);
};