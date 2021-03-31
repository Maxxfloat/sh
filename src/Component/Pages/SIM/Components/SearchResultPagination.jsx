import React from "react";
import ReactPaginate from "react-paginate";
import axios from "axios";

import s from "./SearchResultPagination.module.scss";

const SearchResult = () => {
	const [apiSearchResult, setApiSearchResult] = React.useState([]);
	React.useEffect(() => {
		const multiIt = [];
		const getData = async () => {
			const res = await axios
				.get("https://jsonplaceholder.typicode.com/users")
				.catch("dataResultFalse");
			const data = await res.data;
			if (data) {
				for (let i = 0; i < 5; i++) {
					multiIt.push(...data);
				}
			}
			setApiSearchResult(multiIt);
		};
		getData();
	}, []);

	const [pageNumber, setPageNumber] = React.useState(0);
	const userPerPage = 10;
	const pageVisited = userPerPage * pageNumber;

	const pageCount = Math.ceil(apiSearchResult.length / userPerPage);
	const changePage = ({ selected }) => {
		setPageNumber(selected);
	};

	const displayUser = apiSearchResult
		.slice(pageVisited, pageVisited + userPerPage)
		.map((user, index) => {
			return (
				<div key={`${user.id}${index}`}>
					<h1>{user.name}</h1>
					<h2>{user.phone}</h2>
				</div>
			);
		});

	return (
		<div className={s.section}>
			{displayUser}
			<ReactPaginate
				previousLabel={"قبلی"}
				nextLabel={"بعدی"}
				pageCount={pageCount}
				onPageChange={changePage}
				containerClassName={s.pagination_btns}
				pageClassName={s.pagination_li}
				pageLinkClassName={s.pagination_a}
				activeClassName={s.active_btns}
			/>
		</div>
	);
};

export default SearchResult;
