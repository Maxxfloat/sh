import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { FiMenu } from "react-icons/fi";

import s from "./Header.module.scss";
import { headerMenu } from "../../Data/NavMenuData";

const Header = () => {
	const location = useLocation();
	const dispatch = useDispatch();
	const isSim = useSelector((state) => {
		const { isSim } = state.isSim;
		return isSim;
	});
	const didAuth = useSelector((state) => {
		const { didAuth } = state.didAuth;
		return didAuth;
	});
	const isPhone = useSelector((state) => {
		const { isPhone } = state.dimention;
		return isPhone;
	});

	const [sticky, setSticky] = React.useState(false);
	// const navbarRef = React.useRef(null);

	const tabs = [
		<Link
			to="/sim/1"
			className={s.link}
			onClick={() => dispatch({ type: "switchToSim" })}
		>
			سیم کارت
		</Link>,
		<Link
			to="/domain/1"
			className={s.link}
			onClick={() => {
				dispatch({ type: "switchToDomain" });
			}}
		>
			دامنه
		</Link>,
	];

	// const headerSimSearchField = <div className={s.headerSimSearchField}></div>;
	// const headerDomainSearchField = (
	// 	<div className={s.headerDomainSearchField}></div>
	// );

	const registerButtons = (
		<div className={s.registerButtons}>
			<button>
				<Link to="/register/singup">ثبت نام</Link>
			</button>
			<button>
				<Link to="/register/login">ورود</Link>
			</button>
		</div>
	);

	const phoneHeader = (
		<>
			<div
				className={`${s.phoneHeader} ${
					isSim ? s.sim_background : s.domain_background
				}`}
			>
				<button>
					<Link to="/register/login">ورود</Link>
				</button>
				<div className={s.logo}>logo</div>
				<span
					className={s.sidebarToggle}
					onClick={() => {
						dispatch({ type: "sidebarToggleClick" });
					}}
				>
					<FiMenu />
				</span>
			</div>
		</>
	);

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
		if (location.pathname.includes("/domain")) {
			function switchToDomain() {
				dispatch({ type: "switchToDomain" });
			}
			switchToDomain();
		}
		return () => {
			window.removeEventListener("scroll", () => handleScroll);
		};
	}, [location.pathname, dispatch]);

	return (
		<>
			<div className={s.section}>
				{isPhone ? (
					phoneHeader
				) : (
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
				)}

				<div className={`${s.navbar} ${sticky ? s.scrolled : ""}`}>
					<div className={s.navbar_container}>
						{!isPhone && <div className={s.logo}>logo</div>}
						<div className={s.navbar_menu}>
							<div
								className={`${s.active_tab} ${
									isSim ? s.sim_background : s.domain_background
								}`}
							>
								{/* {isPhone ? (
									<span
										className={s.sidebarToggle}
										onClick={() => {
											dispatch({ type: "sidebarToggleClick" });
										}}
									>
										<FiMenu />
									</span>
								) : null} */}

								{isSim ? tabs[0] : tabs[1]}
								{!isPhone ? (
									<div className={s.active_tab_nav}>
										{didAuth ? (
											<div className={s.profile}>پروفایل</div>
										) : (
											registerButtons
										)}
									</div>
								) : null}
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
