import React from "react";

import s from "./Home.module.scss";

const Home = () => {
	return (
		<div>
			<div className={s.banner}>
				<div className={s.cardContainer}>
					<div className={s.CardSim}>CardSim</div>
					<div className={s.CardDomain}>CardDomain</div>
					<div className={s.CardInfo}>CardInfo</div>
				</div>
			</div>
		</div>
	);
};

export default Home;
