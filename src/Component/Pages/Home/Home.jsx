import React from "react";
import { Link } from "react-router-dom";

import s from "./Home.module.scss";
import Vitrine from "../SIM/Components/SIMResultTable/SIMResultTable";

const Home = () => {
	return (
		<div>
			<div className={s.banner}>
				<div className={s.cardContainer}>
					<div className={s.cardSim}>
						<div>
							<h1>سیم کارت</h1>
							<h1>خرید و فروش مستقیم بدون هیچگونه واسطه</h1>
							<p>بدون هزینه</p>
						</div>
					</div>
					<div className={s.cardDomain}>
						<div>
							<h1>دامنه</h1>
							<h2>خرید و فروش دامنه</h2>
							<h2>صدها دامنه آماده انتخاب</h2>
						</div>
					</div>
					<div className={s.cardInfo}>
						<div>
							<h1>خرید و فروش بدون واسطه و بصورت مستقیم</h1>
							<button>
								<Link className={s.link} to="/signup">
									ثبت نام
								</Link>
							</button>
						</div>
					</div>
				</div>
			</div>
			<div className={s.shortCuts}>
				<div>
					<Link className={s.link} to="/tutorial">
						راهنما
					</Link>
				</div>
				<div>
					<Link className={s.link} to="/tutorial">
						ثبت نام
					</Link>
				</div>
				<div>
					<Link className={s.link} to="/tutorial">
						خرید سیمکارت
					</Link>
				</div>
				<div>
					<Link className={s.link} to="/tutorial">
						خرید دامنه
					</Link>
				</div>
			</div>
			<div className={s.vitrine}>
				<Vitrine />
			</div>
		</div>
	);
};

export default Home;
