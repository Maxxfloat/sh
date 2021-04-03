import React from "react";
import { useForm } from "react-hook-form";

const Signup = () => {
	const { register, handleSubmit } = useForm();
	return (
		<div>
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
			</form>
		</div>
	);
};

export default Signup;
