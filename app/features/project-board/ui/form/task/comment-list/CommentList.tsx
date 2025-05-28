import './CommentList.scss';

export const CommentList = () => {
	return (
		<div className={'comment-list'}>
			<div className={'comment-list__form'}>
				<div className={'comment-list__dp'}>
					AC
				</div>
				<textarea className={'task_form__desc-area'} rows={5} placeholder={"Добавить комментарий"}/>
			</div>
			<div className={'comment-list__list'}>
				<div className={'comment-list__item'}>
					<div className={'comment-list__item-info-dp'}>
						AC
					</div>
					<div className={'comment-list__item-info'}>
						<div className={'comment-list__item-info-text'}>
							<div>Александр Рыжков</div>
							<div>05.05.2024</div>
						</div>
						<div className={'comment-list__item-msg'}>
							Пример комментария
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};