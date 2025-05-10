import React, { FC, useState } from "react";
import { Table, Column } from "@ui-kit/table";

export const Projects: FC = () => {
	const data = [
		{
			name: "Hello world1",
		},
		{
			name: "Hello world2",
		},
		{
			name: "Hello world3",
		},
		{
			name: "Hello world4",
		},
		{
			name: "Hello world5",
		},
		{
			name: "Hello world6",
		},
	];

	const [page, setPage] = useState(1);
	const dataForTable = data.slice((page - 1) * 4, (page) * 4);

	return (
		<Table data={dataForTable} paginator={{
			page: 1,
			perPage: 4,
			totalPage: 2,
		}}
		       onChangePage={setPage}>
			<Column header={"Test"} field={"name"}/>
		</Table>
	);
};
