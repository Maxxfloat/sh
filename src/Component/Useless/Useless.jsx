import React from "react";

const Useless = () => {
	const numField = [];
	for (let c = 0; c <= 6; c++) {
		numField.push(
			<input
				name={`SIM.number.customNumber[${c}]`}
				ref={register({
					pattern: /^[0-9]$/,
				})}
			/>
		);
	}
	return (
		<div>
			<div className={s.input}>
				{numField.map((item, index) => {
					return <React.Fragment key={index}>{item}</React.Fragment>;
				})}
			</div>
		</div>
	);
};

export default Useless;
