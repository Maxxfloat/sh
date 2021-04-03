import React from "react";
import { useForm } from "react-hook-form";

const Signup = () => {
	const { register, handleSubmit } = useForm();
	return (
		<div>
			<form onSubmit={handleSubmit((data) => console.log(data))}>
				<label>نام</label>
				<input
					name="reg.firstName"
					ref={register({
						required: "لطفا نام خودرا وارد",
						pattern: {
							value: /^[آابپتثجچحخدذرزژسشصضطظعغفقکگلمنوهی]+$/,
							message: "لطفا زبان فارسی استفاده کنید",
						},
					})}
				/>
				<label>نام خانوادگی</label>
				<input
					name="reg.LastName"
					ref={register({
						required: "لطفا نام خانوادگی خودرا وارد",
						pattern: {
							value: /^[آابپتثجچحخدذرزژسشصضطظعغفقکگلمنوهی]+$/,
							message: "لطفا زبان فارسی استفاده کنید",
						},
					})}
				/>
			</form>
		</div>
	);
};

export default Signup;
