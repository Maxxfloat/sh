import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { FiMenu } from "react-icons/fi";

import s from "./Header.module.scss";
import { headerMenu } from "../../Data/NavMenuData";

const Header = () => {
	const dispatch = useDispatch();
	const isSim = useSelector((state) => {
		const { isSim } = { ...state.isSim };
		return isSim;
	});
	const dimention = useSelector((state) => {
		const { isPhone } = { ...state.Dimention };
		return isPhone;
	});

	const [sticky, setSticky] = React.useState(false);
	const navbarRef = React.useRef(null);

	const tabs = [
		<Link
			to="/sim"
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

	const handleScroll = () => {
		const offset = window.scrollY;
		if (offset > 0) {
			setSticky(true);
		} else {
			setSticky(false);
		}
	};

	React.useEffect(() => {
		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", () => handleScroll);
		};
	}, []);

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
				<div
					ref={navbarRef}
					className={`${s.navbar} ${sticky ? s.scrolled : ""}`}
				>
					<div className={s.navbar_container}>
						<div className={s.logo}>logo</div>
						<div className={s.navbar_menu}>
							<div
								className={`${s.active_tab} ${
									isSim ? s.sim_background : s.domain_background
								}`}
							>
								{dimention ? (
									<span
										className={s.sidebarToggle}
										onClick={() => dispatch({ type: "sidebarToggleClick" })}
									>
										<FiMenu />
									</span>
								) : null}

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
