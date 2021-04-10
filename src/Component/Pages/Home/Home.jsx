import React from "react";
import { Link } from "react-router-dom";
import { useTable, usePagination } from "react-table";

import s from "./Home.module.scss";
import { COLUMN } from "../SIM/Components/SIMResultTable/COLUMN";
import usersData from "../../Data/MOCK_DATA_2.json";
import SIMResultTable from "../SIM/Components/SIMResultTable/SIMResultTable";

const Home = () => {
	const columns = React.useMemo(() => COLUMN, []);
	const data = React.useMemo(() => usersData, []);

	console.log("columns: ", columns);
	console.log("data: ", data);

	const tableInstance = useTable(
		{
			columns,
			data,
		},
		usePagination
	);

	return (
		<div>
			<div className={s.banner}>
				<div className={s.container}>
					<SIMResultTable tableInstance={tableInstance} />
				</div>
			</div>
			<div className={s.shortCuts}>
				<div>
					<Link className={s.link} to="/tutorial">
						راهنما
					</Link>
				</div>
				<div>
					<Link className={s.link} to="/register">
						ثبت نام
					</Link>
				</div>
				<div>
					<Link className={s.link} to="/sim/1">
						خرید سیمکارت
					</Link>
				</div>
				<div>
					<Link className={s.link} to="/domain">
						خرید دامنه
					</Link>
				</div>
			</div>
			<div className={s.vitrine}>
				<div>
					<p>ویترین</p>
				</div>
				{/* <div className={s.vitrineContainer}>
					<Vitrine COLUMN={COLUMN} />
				</div> */}
			</div>
		</div>
	);
};

export default Home;
