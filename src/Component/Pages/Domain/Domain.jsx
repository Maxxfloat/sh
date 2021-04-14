import React from "react";

import s from "./Domain.module.scss";
import MainPage from "../../MainComponents/MainPage/MainPage.jsx";
import SearchForm from "./DomainSearchForm";
import DomainTable from "./DomainTable";

const Domain = () => {
	const main = (
		<div className={s.section}>
			<div className={s.ad}></div>
			<SearchForm />
			<div className={s.table}>
				<DomainTable s={s} wantPagination={true} />
			</div>
		</div>
	);
	return <MainPage main={main} />;
};

export default Domain;
