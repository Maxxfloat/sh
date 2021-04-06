import React from "react";
import { useTable, usePagination } from "react-table";

import MOCK_DATA_2 from "../../../../Data/MOCK_DATA_2.json";

const SIMResultTable = ({ COLUMN }) => {
	const columns = React.useMemo(() => COLUMN, [COLUMN]);
	const data = React.useMemo(() => MOCK_DATA_2, []);

	const {
		getTableProps,
		getTableBodyProps,
		headerGroups,
		page,
		prepareRow,
	} = useTable(
		{
			columns,
			data,
		},
		usePagination
	);

	const table = (
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
	);

	return table;
};

export default SIMResultTable;
