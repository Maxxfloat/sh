import React from "react";
import { useForm } from "react-hook-form";

import s from "./SIMSearchForm.module.scss";

import {
	preNumber,
	// operator,
	condition,
	location,
	// priceOffer,
} from "./SearchData";

const SIMSearchForm = () => {
	const { register, handleSubmit, reset } = useForm();
	// const province = watch("SIM.province");

	return (
		<div className={s.container}>
			<div className={s.title}>
				<h2>فرم جست و جو</h2>
			</div>
			<form onSubmit={handleSubmit((data) => console.log(data))}>
				<div className={s.number_line}>
					<label>شماره</label>
					<select name="SIM.number.preNumber" defaultValue="" ref={register}>
						<option value="">فرقی ندارد</option>
						{preNumber.map((item) => {
							return (
								<option key={item} value={item}>
									{"0" + item}
								</option>
							);
						})}
					</select>
					<input
						name="sim.customNum"
						ref={register({
							pattern: {},
						})}
					/>
				</div>
				{/* <div className={s.formContainer}> */}
				<div className={s.kind}>
					<label>نوع سیمکارت</label>
					{/* <div> */}
					<select name="SIM.kind" defaultValue="" ref={register}>
						<option value="">فرقی ندارد</option>
						<option value="daemi">دائمی</option>
						<option value="etebari">اعتباری</option>
					</select>
					{/* </div> */}
				</div>
				{/* <div>
						<label>اپراتور</label>
						<select name="SIM.operator" ref={register}>
							<option value="">فرقی ندارد</option>
							{operator.map((item) => (
								<option key={item.operator} value={item.operator}>
									{item.name}
								</option>
							))}
						</select>
					</div> */}
				<div>
					<label>مرغوبیت</label>
					<select
						name="SIM.condition"
						ref={register}
						className={s.condition_dropdown}
					>
						<option value="">فرقی نمی کند</option>
						{condition.map((option) => (
							<option key={option.condition} value={option.condition}>
								{option.name}
							</option>
						))}
					</select>
				</div>
				{/* <div>
						<label>فروشنده</label>
						<select name="SIM.seller" defaultValue="" ref={register}>
							<option value="">فرقی ندارد</option>
							<option value="store">فروشگاه</option>
							<option value="personal">شخصی</option>
						</select>
					</div> */}
				<div className={s.rondKind}>
					<label>نوع رند</label>
					<select name="SIM.rond_kind" defaultValue="" ref={register}>
						<option value="">فرقی نمی کند</option>
						<option value="49">رند حروفی</option>
						<option value="42">رند 7 رقم یکی</option>
						<option value="41">رند 6 رقم یکی از آخر</option>
						<option value="34">رند 6 رقم یکی از اول</option>
						<option value="31">رند میلیونی</option>
						<option value="30">رند ده هزاری از آخر</option>
						<option value="28">رند ده هزاری از اول</option>
						<option value="46">رند 3 جفت از آخر</option>
						<option value="24">رند 3 جفت از اول</option>
						<option value="55">رند متشکل از دو رقم</option>
						<option value="40">رند 5 رقم یکی از آخر</option>
						<option value="33">رند 5 رقم یکی از اول</option>
						<option value="51">رند صد صدی</option>
						<option value="26">رند گفتاری</option>
						<option value="29">رند هزاری از آخر</option>
						<option value="27">رند هزاری از اول</option>
						<option value="39">رند 4 رقم یکی از آخر</option>
						<option value="32">رند 4 رقم یکی از اول</option>
						<option value="37">رند 5 رقم یکی از وسط</option>
						<option value="47">رند ده دهی از آخر</option>
						<option value="25">رند ده دهی از اول</option>
						<option value="52">رند کد پایین</option>
						<option value="56">رند 3 پله</option>
						<option value="45">رند جفت جفت از آخر</option>
						<option value="23">رند جفت جفت از اول</option>
						<option value="48">رند 3 رقم یکی از اول</option>
						<option value="21">رند تکرار پیش شماره</option>
						<option value="18">رند ترازویی</option>
						<option value="43">رند پله ای از آخر</option>
						<option value="17">رند پله ای از اول</option>
						<option value="36">رند 4 رقم یکی از وسط</option>
						<option value="38">رند 3 رقم یکی از آخر</option>
						<option value="44">رند ترتیبی از آخر</option>
						<option value="20">رند ترتیبی از اول</option>
						<option value="19">رند تاریخ تولدی</option>
						<option value="16">رند آینه ای</option>
						<option value="35">رند 3 رقم یکی از وسط</option>
						<option value="22">رند تکرار 2 رقم یکی</option>
						<option value="9">رند (ساير)</option>
					</select>
				</div>
				<div className={s.location}>
					<label>استان</label>
					<select name="SIM.province" defaultValue="" ref={register}>
						<option value="">فرقی ندارد</option>
						{location.map((item) => (
							<option key={item.value} value={item.value}>
								{item.province}
							</option>
						))}
					</select>
					{/* <label>شهر</label>
						<select name="SIM.city" defaultValue="" ref={register}>
							<option value="">فرقی ندارد</option>
							{location.map((item) => {
								let result;
								if (item.value === province) {
									result = item.cities.map((city) => {
										return (
											<option key={city.value} value={city.value}>
												{city.name}
											</option>
										);
									});
									return result;
								}
								return result;
							})}
						</select> */}
				</div>
				{/* <div>
						<label>قیمت</label>
						<select name="SIM.priceOffer" defaultValue="" ref={register}>
							<option value="">فرقی ندارد</option>
							{priceOffer.map((item) => {
								return (
									<option key={item.value} value={item.value}>
										{item.name}
									</option>
								);
							})}
						</select>
					</div> */}
				<div className={s.price}>
					<div>
						<label>قیمت از</label>
						<input
							name="SIM.price.as"
							ref={register({
								pattern: {
									value: /^[0-9]*$/,
									message: "لطفا یک عدد وارد کنید",
								},
							})}
						/>
						<span>تومان</span>
					</div>
					<div>
						<label>قیمت تا</label>
						<input
							name="SIM.price.to"
							ref={register({
								pattern: {
									value: /^[0-9]*$/,
									message: "لطفا یک عدد وارد کنید",
								},
							})}
						/>
						<span>تومان</span>
					</div>
				</div>
				<div className={s.btns}>
					<button className={s.submitBtn} type="submit">
						جستجو
					</button>
					<button className={s.resetBtn} onClick={() => reset()}>
						پاک کردن
					</button>
				</div>
				{/* </div> */}
			</form>
		</div>
	);
};

export default SIMSearchForm;
