import React from "react";

import s from "./SIM.module.scss";

import MainPage from "../../MainComponents/MainPage/MainPage";
import SIMSearchForm from "./Components/SIMSearchForm/SIMSearchForm";
import Result from "./Components/SIMResultTable/SIMResultTable";

const SIM = () => {
	const main = (
		<>
			<div>
				<SIMSearchForm />
			</div>
			<div>
				<Result />
			</div>
		</>
	);
	return (
		<>
			<div className={s.ad}>تبلیغات</div>
			<MainPage main={main} />
		</>
	);
};

export default SIM;
