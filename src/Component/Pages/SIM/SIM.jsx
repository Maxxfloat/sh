import React from "react";
import { useTable, usePagination } from "react-table";
import { useParams } from "react-router";

import s from "./SIM.module.scss";

import { COLUMN } from "./Components/SIMResultTable/COLUMN";
import usersData from "../../Data/MOCK_DATA_2.json";
import MainPage from "../../MainComponents/MainPage/MainPage";
import SIMSearchForm from "./Components/SIMSearchForm/SIMSearchForm";
import Result from "./Components/SIMResultTable/SIMResultTable";
import Paggination from "./Components/SIMResultTable/SimPaggination";

const SIM = () => {
	const columns = React.useMemo(() => COLUMN, []);
	const data = React.useMemo(() => usersData, []);

	const { pageNumber } = useParams();

	const tableInstance = useTable(
		{
			columns,
			data,
			initialState: { pageIndex: Number(pageNumber) - 1 },
		},
		usePagination
	);

	const main = (
		<>
			<div>
				<SIMSearchForm />
			</div>
			<div className={s.result}>
				<Result tableInstance={tableInstance} />
				<Paggination tableInstance={tableInstance} />
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
