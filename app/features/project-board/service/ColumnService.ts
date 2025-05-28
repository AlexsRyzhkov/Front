import { IColumn } from "@features/project-board/model/ProjectBoard";
import { $axios } from "@shared/http/http";

export class ColumnService {
	static group = '/v1/columns';

	static async getAll(params: {
		projectId: string;
		boardId: string
	}) {
		const { data } = await $axios.get<IColumn[]>(`${ColumnService.group}`, {
			params: {
				project_id: params.projectId,
				board_id: params.boardId,
			},
		});

		return data;
	};

	static async create(params: {
		name: string;
		projectId: string;
		boardId: string
	}) {
		const { data } = await $axios.post<any>(`${ColumnService.group}`, {
			name: params.name,
		}, {
			params: {
				project_id: params.projectId,
				board_id: params.boardId,
			},
		});

		return data;
	}

	static async delete(params: { id: string }) {
		const { data } = await $axios.delete(`${ColumnService.group}/${params.id}`);

		return data;
	}

	static async reorder(params: {
		columnId: string;
		boardId: string;
		order: number;
	}) {
		const { data } = await $axios.patch(`${ColumnService.group}/reorder/${params.columnId}`, {
			order: params.order,
		}, {
			params: {
				board_id: params.boardId,
			},
		});

		return data;
	}

	static async update(params: { columnID: string, name: string }) {
		const { data } = await $axios.put(`${ColumnService.group}/${params.columnID}`, {
			name: params.name,
		});

		return data;
	}

}