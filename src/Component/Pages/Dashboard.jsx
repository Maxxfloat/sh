import React from "react";
import { useForm } from "react-hook-form";

import s from "./Dashboard.module.scss";
import { preNumber, condition, location } from "./SIM/SIMTable/SimData";

const Dashboard = () => {
	const { handleSubmit, register } = useForm();
	return (
		<div className={s.section}>
			<div className={s.container}>
				<div className={s.title}>
					<h1>داشبورد</h1>
				</div>
				<div className={s.profile}>
					<p>لطفا ابتدا مشخصات فردی خود را کامل کنید</p>
					<form onSubmit={handleSubmit((data) => console.log(data))}>
						<label htmlFor="">شماره تماس</label>
						<input name="dashboard.phoneCall" ref={register} />
						<label>توضیحات</label>
						<textarea name="dashboard.description" ref={register} />
					</form>
				</div>
				<div className={s.cellPhone}>
					<h2>فرم افزودن سیم کارت برای فروش</h2>
					<form onSubmit={handleSubmit((data) => console.log(data))}>
						<label>شماره سیم کارت</label>
						<div className={s.number_line}>
							<label>شماره</label>
							<select
								name="sim.number.preNumber"
								defaultValue="916"
								ref={register}
							>
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
						<div className={s.kind}>
							<label>نوع سیمکارت</label>
							{/* <div> */}
							<select name="sim.kind" defaultValue="daemi" ref={register}>
								<option value="daemi">دائمی</option>
								<option value="etebari">اعتباری</option>
							</select>
							{/* </div> */}
						</div>

						<div>
							<label>مرغوبیت</label>
							<select
								name="sim.condition"
								ref={register}
								className={s.condition_dropdown}
							>
								{condition.map((option) => (
									<option key={option.condition} value={option.condition}>
										{option.name}
									</option>
								))}
							</select>
						</div>
						<div className={s.location}>
							<label>استان</label>
							<select name="sim.province" defaultValue="" ref={register}>
								{location.map((item) => (
									<option key={item.value} value={item.value}>
										{item.province}
									</option>
								))}
							</select>
						</div>
						<div className={s.btns}>
							<button type="submit">افزودن</button>
						</div>
					</form>
				</div>
				<div className={s.cellDomain}></div>
			</div>
		</div>
	);
};

export default Dashboard;
