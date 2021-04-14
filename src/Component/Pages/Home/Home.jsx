import React from "react";

import s from "./Home.module.scss";
import SimTable from "../SIM/SIMTable/SimTable";
import DomainTable from "../Domain/DomainTable";

const Home = () => {
	return (
		<div>
			<div className={s.banner}>
				<div className={s.bannerContainer}>
					<div className={s.bannerTitle}>
						<h1>سیم کارت</h1>
						<p>
							«اسم سایت» بدون هزینه و بدون واسطه سیم کارت کار کرده خودرا بفروشید
							و یا از بین صدها سیم کارت شماره مورد علاقه خودرا پیدا کنید
						</p>
					</div>
					<div className={s.simTable}>
						<SimTable wantPagination={false} s={s} />
					</div>
					<div className={s.bannerTitle}>
						<h1>دامنه</h1>
					</div>
					<div className={s.domainTable}>
						<DomainTable wantPagination={false} s={s} />
					</div>
				</div>
			</div>
			<div className={s.store}></div>
		</div>
	);
};

export default Home;
