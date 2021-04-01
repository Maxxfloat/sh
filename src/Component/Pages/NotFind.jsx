import React from "react";
import { Link } from "react-router-dom";

import s from "./NotFind.module.scss";
import MainPage from "../MainComponents/MainPage/MainPage";

const NotFind = () => {
	const main = (
		<div className={s.section}>
			<div>
				<strong>404</strong>
				<p>صفحه مورد نظر پیدا نشد</p>
				<button>
					<Link className={s.link} to="/">
						صفحه اصلی
					</Link>
				</button>
			</div>
		</div>
	);

	return <MainPage main={main} />;
};

export default NotFind;
