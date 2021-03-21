import React from "react";
// import { useForm } from "react-hook-form";

import s from "./SearchForm.module.scss";

import { preNumber } from "./SearchData";

const SearchForm = () => {
	const numField = [];
	for (let c = 0; c <= 7; c++) {
		numField.push(<input />);
	}
	// const numFieldDiv = (
	// 	<div>
	// 		{numField.map((field) => {
	// 			return field;
	// 		})}
	// 	</div>
	// );

	console.log(preNumber);
	return (
		<div className={s.container}>
			<form>
				<div className={s.number_line}>
					<select value="0916">
						<option value="">انتخاب نمی کنم</option>
						{preNumber.map((item) => {
							return (
								<option key={item} value={item}>
									{"0" + item}
								</option>
							);
						})}
					</select>
					{numField.map((item, index) => {
						return <React.Fragment key={index}>{item}</React.Fragment>;
					})}
				</div>
			</form>
		</div>
	);
};

export default SearchForm;
