import React from "react";

import s from "./Card.module.scss";

const Card = (props) => {
	return (
		<div>
			<div className={s.container}>{props.children}</div>
		</div>
	);
};

export default Card;
