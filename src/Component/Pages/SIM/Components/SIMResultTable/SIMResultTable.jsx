import React from "react";
import { useTable, usePagination } from "react-table";

import s from "./SIMResultTable.module.scss";
import { COLUMN } from "./COLUMN";
import MOCK_DATA_2 from "../../../../Data/MOCK_DATA_2.json";

const SIMResultTable = () => {
	const columns = React.useMemo(() => COLUMN, []);
	const data = React.useMemo(() => MOCK_DATA_2, []);

	const {
		getTableProps,
		getTableBodyProps,
		headerGroups,
		page,
		nextPage,
		previousPage,
		canNextPage,
		canPreviousPage,
		pageOptions,
		gotoPage,
		pageCount,
		prepareRow,
		state,
	} = useTable(
		{
			columns,
			data,
		},
		usePagination
	);

	const { pageIndex } = state;

	return (
		// apply the table props
		<div className={s.section}>
			<table {...getTableProps()}>
				<thead>
					{
						// Loop over the header rows
						headerGroups.map((headerGroup) => (
							// Apply the header row props
							<tr {...headerGroup.getHeaderGroupProps()}>
								{
									// Loop over the headers in each row
									headerGroup.headers.map((column) => (
										// Apply the header cell props
										<th {...column.getHeaderProps()}>
											{
												// Render the header
												column.render("Header")
											}
										</th>
									))
								}
							</tr>
						))
					}
				</thead>
				{/* Apply the table body props */}
				<tbody {...getTableBodyProps()}>
					{
						// Loop over the table rows
						page.map((row) => {
							// Prepare the row for display
							prepareRow(row);
							return (
								// Apply the row props
								<tr {...row.getRowProps()}>
									{
										// Loop over the rows cells
										row.cells.map((cell) => {
											// Apply the cell props
											return (
												<td {...cell.getCellProps()}>
													{
														// Render the cell contents
														cell.render("Cell")
													}
												</td>
											);
										})
									}
								</tr>
							);
						})
					}
				</tbody>
			</table>
			<div>
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
		</div>
	);
	// return <div></div>;
};

export default SIMResultTable;
