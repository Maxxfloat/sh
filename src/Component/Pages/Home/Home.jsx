import React from "react";
import { Link } from "react-router-dom";

import s from "./Home.module.scss";
// import Vitrine from "../SIM/Components/SIMResultTable/SIMResultTable";
// import { COLUMN } from "./homeColumn";

const Home = () => {
	return (
		<div>
			<div className={s.banner}>
				<div className={s.container}></div>
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
					<Link className={s.link} to="/sim">
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
