import React from "react";

// import { useParams } from "react-router";

import s from "./SIM.module.scss";

import MainPage from "../../MainComponents/MainPage/MainPage";
import SIMSearchForm from "./SIMTable/SIMSearchForm";
import SimTable from "./SIMTable/SimTable";

const SIM = () => {
	const main = (
		<div className={s.section}>
			<div>
				<SIMSearchForm />
			</div>
			<SimTable wantPagination={true} s={s} />
		</div>
	);
	return (
		<>
			<div className={s.ad}>تبلیغات</div>
			<MainPage main={main} />
		</>
	);
};

export default SIM;
