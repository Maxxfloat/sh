import React from "react";

import s from "./Domain.module.scss";
import MainPage from "../../MainComponents/MainPage/MainPage.jsx";
import SearchForm from "./DomainSearchForm";

const Domain = () => {
	const main = (
		<div className={s.section}>
			<div className={s.ad}></div>
			<SearchForm />
		</div>
	);
	return <MainPage main={main} />;
};

export default Domain;
