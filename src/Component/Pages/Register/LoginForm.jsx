import React from "react";
import { useForm } from "react-hook-form";

import s from "./Register.module.scss";

const LoginForm = () => {
	const { register, handleSubmit } = useForm();
	return (
		<form onSubmit={handleSubmit((data) => console.log(data))}>
			<div className={s.formContainer}>
				<input
					name="login.userName"
					placeholder="نام کاربری"
					ref={register({
						required: "نام کاربری خودرا وارد کنید",
					})}
				/>
				{/* <input
					type="email"
					name="login.emailCall"
					placeholder="ایمیل"
					ref={register({
						required: "لطفا ایمیل خودرا وارد کنید",
					})}
				/> */}

				<input
					type="password"
					name="login.password"
					placeholder="رمز عبور"
					ref={register({
						required: "رمز عبور خودرا وارد کنید",
					})}
				/>

				<button type="submit">ورود</button>
			</div>
		</form>
	);
};

export default LoginForm;
