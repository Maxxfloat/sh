import React from "react";
import { useTable, usePagination } from "react-table";

import s from "./SIMResultTable.module.scss";
import { COLUMN } from "./COLUMN";
import MOCK_DATA_2 from "../../../../Data/MOCK_DATA_2.json";

const SimResultPaggination = () => {
	const columns = React.useMemo(() => COLUMN, []);
	const data = React.useMemo(() => MOCK_DATA_2, []);

	const {
		nextPage,
		previousPage,
		canNextPage,
		canPreviousPage,
		pageOptions,
		gotoPage,
		pageCount,

		state,
	} = useTable(
		{
			columns,
			data,
		},
		usePagination
	);

	const { pageIndex } = state;

	const paggination = (
		<div className={s.paggination}>
			<span>
				{"  "}
				<strong>
					{pageIndex + 1} از {pageCount}
				</strong>
				{"  "}
			</span>
			<button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
				{"<<"}
			</button>
			<button onClick={() => previousPage()} disabled={!canPreviousPage}>
				قبلی
			</button>
			<div>
				{pageOptions.map((page) => {
					if (page === pageIndex) {
						return <strong key={page}>{page + 1}</strong>;
					} else if (page < pageIndex - 2) {
						if (page >= pageIndex - 3) {
							return <strong key={page}>{"..."}</strong>;
						}
					} else if (page > pageIndex + 2) {
						if (page <= pageIndex + 3) {
							return <strong key={page}>{"..."}</strong>;
						}
					} else {
						return (
							<button onClick={() => gotoPage(page)} key={page}>
								{page + 1}
							</button>
						);
					}
					return null;
				})}
			</div>

			<button onClick={() => nextPage()} disabled={!canNextPage}>
				بعدی
			</button>
			<button
				onClick={() => {
					return gotoPage(pageCount - 1);
				}}
				disabled={!canNextPage}
			>
				{">>"}
			</button>
		</div>
	);

	return paggination;
};

export default SimResultPaggination;
