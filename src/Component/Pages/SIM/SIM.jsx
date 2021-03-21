import React from "react";

import s from "./SIM.module.scss";

import MainPage from "../../MainComponents/MainPage/MainPage";
import Card from "../../UI/Components/Card";
import SearchForm from "../../MainComponents/SearchForm/SearchForm";

const SIM = () => {
	const rightbar = (
		<div>
			<SearchForm />
		</div>
	);
	return (
		<>
			<div className={s.ad}>تبلیغات</div>
			<MainPage rightbar={rightbar} main={rightbar} leftbar={rightbar} />
		</>
	);
};

export default SIM;
