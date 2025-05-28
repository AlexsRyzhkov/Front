export interface ICommit {
	id: string;
	hash: string;
	url: string;
	message: string;
	short_message: string;
	created_at: string;
}

export interface ICommitList {
	items: ICommit[];
}