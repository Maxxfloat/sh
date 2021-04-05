import React from "react";

import s from "./Register.module.scss";
import SignupForm from "./SingnupForm";
import LoginForm from "./LoginForm";

const Signup = () => {
	const [wantSingup, setWantSingup] = React.useState(true);
	// const { register, handleSubmit, watch, errors } = useForm();

	const gotoLogin = (
		<div className={s.goto}>
			<button onClick={() => setWantSingup(false)}>
				اگر قبلا ثبت نام کرده اید کلید کنید
			</button>
		</div>
	);
	const gotoSingup = (
		<div className={s.goto}>
			<button onClick={() => setWantSingup(true)}>
				اگر قبلا ثبت نام نکرده اید کلید کنید
			</button>
		</div>
	);

	return (
		<div className={s.section}>
			<div className={s.container}>
				<div className={s.title}>
					{wantSingup ? <h2>ثبت نام</h2> : <h2>ورود</h2>}
				</div>
				{wantSingup ? <SignupForm /> : <LoginForm />}
				{wantSingup ? gotoLogin : gotoSingup}
			</div>
		</div>
	);
};

export default Signup;
