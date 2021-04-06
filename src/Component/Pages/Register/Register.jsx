import React from "react";
import { Link, useParams } from "react-router-dom";

import s from "./Register.module.scss";
import SignupForm from "./SingnupForm";
import LoginForm from "./LoginForm";

const Signup = () => {
	const [wantSignup, setWantSignup] = React.useState(true);
	// const { register, handleSubmit, watch, errors } = useForm();
	let { k } = useParams();

	React.useEffect(() => {
		if (k === "singup") {
			setWantSignup(true);
		} else if (k === "login") {
			setWantSignup(false);
		} else {
			setWantSignup(true);
		}
		return () => {};
	}, [k]);

	const gotoLogin = (
		<div className={s.goto}>
			<button onClick={() => setWantSignup(false)}>
				<Link to="/register/login">اگر قبلا ثبت نام کرده اید کلید کنید</Link>
			</button>
		</div>
	);
	const gotoSignup = (
		<div className={s.goto}>
			<button onClick={() => setWantSignup(true)}>
				<Link to="/register/signup">اگر قبلا ثبت نام نکرده اید کلید کنید</Link>
			</button>
		</div>
	);

	return (
		<div className={s.section}>
			<div className={s.container}>
				<div className={s.title}>
					{wantSignup ? <h2>ثبت نام</h2> : <h2>ورود</h2>}
				</div>
				{wantSignup ? <SignupForm /> : <LoginForm />}
				{wantSignup ? gotoLogin : gotoSignup}
			</div>
		</div>
	);
};

export default Signup;
