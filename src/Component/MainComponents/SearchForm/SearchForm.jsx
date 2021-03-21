import React from "react";
import { useForm } from "react-hook-form";

import s from "./SearchForm.module.scss";

const SearchForm = () => {
	return (
		<div className={s.container}>
			<form>
				<label>اوپراتون</label>
				<select>
					<option value="hamrahaval">همراه اول</option>
					<option value="irancel">ایرانسل</option>
					<option value="ritel">رایتل</option>
				</select>
				<input />
			</form>
		</div>
	);
};

export default SearchForm;
