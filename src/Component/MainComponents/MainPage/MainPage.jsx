import React from "react";

import s from "./MainPage.module.scss";

const MainPage = (props) => {
	return (
		<div className={s.section}>
			<div className={s.main_section}>
				<div className={s.rightbar}>{props.rightbar}</div>
				<div className={s.main}>{props.main}</div>
				<div className={s.leftbar}>{props.leftbar}</div>
			</div>
		</div>
	);
};

export default MainPage;
