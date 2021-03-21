import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import s from "./Header.module.scss";
import { headerMenu } from "../../Assets/Data";

const Header = () => {
	const dispatch = useDispatch();
	const isSim = useSelector((state) => state.isSim);

	const tabs = [
		<Link
			to="/"
			className={s.link}
			onClick={() => dispatch({ type: "switchToSim" })}
		>
			سیم کارت
		</Link>,
		<Link
			to="/domain"
			className={s.link}
			onClick={() => {
				dispatch({ type: "switchToDomain" });
			}}
		>
			دامنه
		</Link>,
	];

	return (
		<>
			<div className={s.section}>
				<div className={s.header}>
					<ul>
						{headerMenu.map((item, index) => (
							<li key={index}>
								<Link className={s.link} to={item.link}>
									{item.name}
								</Link>
							</li>
						))}
					</ul>
				</div>
				<div className={s.navbar}>
					<div className={s.navbar_container}>
						<div className={s.logo}>logo</div>
						<div className={s.navbar_menu}>
							<div
								className={`${s.active_tab} ${
									isSim ? s.sim_background : s.domain_background
								}`}
							>
								{isSim ? tabs[0] : tabs[1]}
							</div>
							<div
								className={`${s.inactive_tab} 
								${!isSim ? s.sim_background : s.domain_background}`}
							>
								{!isSim ? tabs[0] : tabs[1]}
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Header;
