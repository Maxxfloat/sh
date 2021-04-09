import React from "react";

import s from "./Tutorial.module.scss";

const Tutorial = () => {
	return (
		<div>
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
			</div>
		</div>
	);
};

export default Tutorial;
