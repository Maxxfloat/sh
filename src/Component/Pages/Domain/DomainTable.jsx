import React from "react";
import { useTable, usePagination } from "react-table";
import { useHistory } from "react-router-dom";

import { COLUMN } from "./DomainData";
import DATA from "../../Data/DOMAIN_MOCK_DATA.json";
import Table from "../../UI/Components/Table";
import Pagination from "../../UI/Components/Pagination";

const DomainTable = ({ wantPagination, s }) => {
	const history = useHistory();
	const columns = React.useMemo(() => COLUMN, []);
	const data = React.useMemo(() => DATA, []);

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
			history.replace(`/domain/${pageIndex + 1}`);
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

export default DomainTable;
