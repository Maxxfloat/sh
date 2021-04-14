import React from "react";
import { useTable, usePagination } from "react-table";
import { useHistory } from "react-router-dom";

import { COLUMN } from "./SimData";
import usersData from "../../../Data/MOCK_DATA_2.json";
import Table from "../../../UI/Components/Table";
import Pagination from "../../../UI/Components/Pagination";

const SIMResultTable = ({ wantPagination, s }) => {
	const columns = React.useMemo(() => COLUMN, []);
	const data = React.useMemo(() => usersData, []);
	const history = useHistory();
	// const { pageNumber } = useParams();

	const tableInstance = useTable(
		{
			columns,
			data,
		},
		usePagination
	);

	const { state } = tableInstance;

	const { pageIndex } = state;

	React.useEffect(() => {
		if (wantPagination) {
			history.replace(`/sim/${pageIndex + 1}`);
		}
		return () => {};
	}, [history, pageIndex, wantPagination]);

	return (
		<>
			<div className={s.table}>
				<Table tableInstance={tableInstance} />
			</div>
			<div className={s.pagination}>
				{wantPagination && <Pagination tableInstance={tableInstance} />}
			</div>
		</>
	);
};

export default SIMResultTable;
