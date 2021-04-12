import React from "react";
import { useForm } from "react-hook-form";

import s from "./DomainSearchForm.module.scss";
import { categoryOptions, suffix } from "./DomainArray.js";

const DomainSearchForm = () => {
	const { register, handleSubmit, reset } = useForm();

	return (
		<div className={s.container}>
			<form onSubmit={handleSubmit((data) => console.log(data))}>
				<div className={s.customDomain}>
					<label>دامنه</label>

					<input
						name="domain.customDomain"
						ref={register({
							// pattern : {
							// 	value:
							// }
						})}
					/>
					<select name="domain.category" ref={register}>
						{suffix.map((option, index) => (
							<React.Fragment key={index}>{option}</React.Fragment>
						))}
					</select>
				</div>
				<div className={s.mid}>
					<div>
						<label>دسته بندی</label>
						<select name="domain.category" ref={register}>
							{categoryOptions.map((option, index) => {
								return <React.Fragment key={index}>{option}</React.Fragment>;
							})}
						</select>
					</div>
					<div>
						<label>تعداد کاراکتر</label>
						<div className={s.character}>
							<input
								placeholder="از"
								name="domain.character[as]"
								ref={register({
									pattern: {
										value: /^[0-9]*$/,
										message: "فقط عدد انگلیسی وارد کنید",
									},
								})}
							/>
							<input
								placeholder="تا"
								name="domain.character[to]"
								ref={register({
									pattern: {
										value: /^[0-9]*$/,
										message: "فقط عدد انگلیسی وارد کنید",
									},
								})}
							/>
						</div>
					</div>
				</div>
				<div className={s.price}>
					<div>
						<label>قیمت از</label>
						<input
							name="domain.price[as]"
							ref={register({
								pattern: {
									value: /^[0-9]*$/,
									message: "فقط عدد انگلیسی وارد کنید",
								},
							})}
						/>
					</div>
					<div>
						<label>قیمت تا</label>
						<input
							name="domain.price[to]"
							ref={register({
								pattern: {
									value: /^[0-9]*$/,
									message: "فقط عدد انگلیسی وارد کنید",
								},
							})}
						/>
					</div>
					<div className={s.btns}>
						<button className={s.btnSubmit} type="submit">
							جستجو
						</button>
						<button className={s.btnReset} onClick={() => reset()}>
							پاک کردن
						</button>
					</div>
				</div>
			</form>
		</div>
	);
};

export default DomainSearchForm;
