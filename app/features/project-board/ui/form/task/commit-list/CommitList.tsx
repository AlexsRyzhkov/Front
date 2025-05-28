import { ICodeRepo, IBranch, IBranchList } from "@features/project-code/model/ProjectCode";
import { useBranches } from "@features/project-code/query/useBranches";
import { useIntegrations } from "@features/project-code/query/useIntegration";
import { ICommitList } from "@features/task/model/CommitModel";
import { useCommitByBranchID } from "@features/task/query/useCommitByBranchID";
import { useParams } from "@tanstack/react-router";
import { Icon } from "@ui-kit/icon/icon";

import './CommitList.scss';
import { FC } from "react";

interface ICommitListR {
	branchID: string;
}

export const CommitList: FC<ICommitListR> = ({ branchID }) => {
	const params = useParams({
		from: "/_authentication/projects/$id/boards/$boardId",
	});

	const integrationQuery = useIntegrations({
		projectId: params.id,
	});

	const safeIntegration = integrationQuery.isError ? {} as ICodeRepo : integrationQuery.data;


	const branchesQuery = useBranches({
		projectId: params.id,
	});

	const safeBranches = branchesQuery.isError ? {} as IBranchList : branchesQuery.data;

	const currentBranch = safeBranches?.items?.find((branch) => branch.id === branchID);

	const commitsQuery = useCommitByBranchID(safeIntegration?.id || "", currentBranch?.name || "");

	const safeCommits = commitsQuery.isError ? {} as ICommitList : commitsQuery.data;

	return (
		<div className={'commit-list'}>
			{safeCommits?.items.map((commit) => {
				const date = new Date(commit.created_at);

				const datePrint = `${String(date.getDate()).padStart(2, "0")}.${String(date.getMonth() + 1).padStart(2, "0")}.${date.getFullYear()}`;

				return (
					<div className={'commit-list__item'} key={commit.id}>
						<Icon icon={'folder_data'} size={'32px'} color={'#3370cc'}/>
						<div className={'commit-list__item-info'}>
							<a href={commit.url}>{commit.hash}</a>
							<p>{datePrint}</p>
						</div>
					</div>
				);
			})}
		</div>
	);
};