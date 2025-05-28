import { TaskCreate, ITask, TaskUpdate } from "@features/project-code/model/ProjectCode";
import { $axios } from "@shared/http/http";

export class TaskService {

	static group = '/v1/tasks';


	static async createTask(task: TaskCreate) {
		const { data } = await $axios.post(`${TaskService.group}`, task);

		return data;
	}

	static async getByColumnID(columnID: string) {
		const { data } = await $axios.get<ITask[]>(`${TaskService.group}/column/${columnID}`);

		return data;
	}

	static async updateTask(param: { id: string, task: TaskUpdate }) {
		const { data } = await $axios.put(`${TaskService.group}/${param.id}`, param.task);

		return data;
	}
}