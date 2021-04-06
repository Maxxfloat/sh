import React from "react";

import s from "./SIM.module.scss";

import { COLUMN } from "./Components/SIMResultTable/COLUMN";
import MainPage from "../../MainComponents/MainPage/MainPage";
import SIMSearchForm from "./Components/SIMSearchForm/SIMSearchForm";
import Result from "./Components/SIMResultTable/SIMResultTable";
import Paggination from "./Components/SIMResultTable/SimResultPaggination";

const SIM = () => {
	const main = (
		<>
			<div>
				<SIMSearchForm />
			</div>
			<div className={s.result}>
				<Result COLUMN={COLUMN} />
				<Paggination />
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
