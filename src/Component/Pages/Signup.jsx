import React from "react";
import { useForm } from "react-hook-form";

import s from "./Signup.module.scss";

const Signup = () => {
	const { register, handleSubmit, watch, errors } = useForm();
	const password = watch("password", "");
	return (
		<div className={s.page}>
			<div className={s.section}>
				<form onSubmit={handleSubmit((data) => console.log(data))}>
					<label>نام و نام خانوادگی</label>
					<input
						name="reg.name"
						ref={register({
							required: "لطفا نام خودرا وارد",
							pattern: {
								value: /^[آابپتثجچحخدذرزژسشصضطظعغفقکگلمنوهی]+$/,
								message: "لطفا زبان فارسی استفاده کنید",
							},
						})}
					/>
					<label>نام کاربری</label>
					<input
						name="reg.userName"
						ref={register({
							required: "لطفا یک نام کاربری وارد کنید",
							pattern: {
								value: /^[A-Za-z][A-Za-z0-9]*$/,
								message: "لطفا فقط از حروف و اعداد انگلیسی استفاده کنید",
							},
						})}
					/>
					<label>ایمیل</label>
					<input
						type="email"
						name="reg.emailCall"
						ref={register({
							required: "لطفا ایمیل خودرا وارد کنید",
						})}
					/>
					<label>رمز عبور</label>
					<input
						type="password"
						name="reg.password"
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
					<input
						type="password"
						name="reg.passwordConfirm"
						ref={register({
							required: "لطفا عبور خودرا تکرار کنید",
							validate: (value) =>
								value === password || "تکرار رمز عبور اشتباه است",
						})}
					/>
					{errors.passwordConfirm && <p>{errors.passwordConfirm.message}</p>}
				</form>
			</div>
		</div>
	);
};

export default Signup;
