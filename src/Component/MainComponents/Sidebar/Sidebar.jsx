import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { AiOutlineCloseSquare } from "react-icons/ai";

import s from "./Sidebar.module.scss";
import { headerMenu } from "../../Assets/Data";

const Sidebar = () => {
	const dispatch = useDispatch();

	const sidebarOpen = useSelector((state) => {
		let { sidebar } = state;
		return sidebar.sidebarOpen;
	});

	return (
		<div className={sidebarOpen ? s.section : `${s.section} ${s.close}`}>
			<div
				className={s.close_toggle}
				onClick={() => dispatch({ type: "sidebarCloseClick" })}
			>
				<AiOutlineCloseSquare />
			</div>
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
	);
};

export default Sidebar;
