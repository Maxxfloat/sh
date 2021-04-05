import React from "react";
import { useForm } from "react-hook-form";

import s from "./Register.module.scss";

const SingnupForm = () => {
	const { register, handleSubmit, watch, errors } = useForm();
	const password = watch("password", "");
	return (
		<form onSubmit={handleSubmit((data) => console.log(data))}>
			<div className={s.formContainer}>
				<p>لطفا نام و نام خانوادگی خودرا به فارسی وارد کنید</p>
				<input
					name="reg.name"
					placeholder="نام و نام خانوادگی"
					ref={register({
						required: "لطفا نام خودرا وارد",
						pattern: {
							value: /^[آابپتثجچحخدذرزژسشصضطظعغفقکگلمنوهی]+$/,
							message: "لطفا زبان فارسی استفاده کنید",
						},
					})}
				/>
				<p>لطفا یک نام کاربری با حروف انگلیسی وارد کنید</p>
				<input
					name="reg.userName"
					placeholder="نام کاربری"
					ref={register({
						required: "لطفا یک نام کاربری وارد کنید",
						pattern: {
							value: /^[A-Za-z][A-Za-z0-9]*$/,
							message: "لطفا فقط از حروف و اعداد انگلیسی استفاده کنید",
						},
					})}
				/>
				<p>یک ایمیل معتبر وارد کنید</p>
				<input
					type="email"
					name="reg.emailCall"
					placeholder="ایمیل"
					ref={register({
						required: "لطفا ایمیل خودرا وارد کنید",
					})}
				/>
				<p>
					{
						"لطفا یک رمز عبور که شامل حداقل ۸ کاراکتر،حداقل یک حرف بزرگ،حداقل یک حرف کوچک،حداقل یک عدد انگلیسی می‌باشد وارد کنید"
					}
				</p>
				<input
					type="password"
					name="reg.password"
					placeholder="رمز عبور"
					ref={register({
						required: "لطفا یک رمز عبور دلخواهتان را وارد کنید",
						pattern: {
							value: /(?=^.{8,}$)(?=.*\d)(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/i,
							message:
								"رمز عبور باید دارای حداقل ۸ کاراکتر،حداقل یک حرف بزرگ،حداقل یک حرف کوچک،حداقل یک عدد انگلیسی باشد",
						},
					})}
				/>
				{errors.password && <p>{errors.password.message}</p>}
				<p>رمز عبور خودرا تکرار کنید</p>
				<input
					type="password"
					name="reg.passwordConfirm"
					placeholder="تکرار رمز عبور"
					ref={register({
						required: "لطفا عبور خودرا تکرار کنید",
						validate: (value) =>
							value === password || "رمز عبور با تکرار آن مطابقت ندارد",
					})}
				/>
				{errors.passwordConfirm && <p>{errors.passwordConfirm.message}</p>}

				<button type="submit">ثبت</button>
			</div>
		</form>
	);
};

export default SingnupForm;
