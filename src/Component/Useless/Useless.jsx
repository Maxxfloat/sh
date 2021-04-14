import React from "react";

const Useless = () => {
	const numField = [];
	for (let c = 0; c <= 6; c++) {
		numField.push(
			<input
				name={`SIM.number.customNumber[${c}]`}
				ref={register({
					pattern: /^[0-9]$/,
				})}
			/>
		);
	}
	const f = (
		<>
			<div className={s.shortCuts}>
				<div>
					<Link className={s.link} to="/tutorial">
						راهنما
					</Link>
				</div>
				<div>
					<Link className={s.link} to="/register">
						ثبت نام
					</Link>
				</div>
				<div>
					<Link className={s.link} to="/sim/1">
						خرید سیمکارت
					</Link>
				</div>
				<div>
					<Link className={s.link} to="/domain">
						خرید دامنه
					</Link>
				</div>
			</div>
			<div className={s.vitrine}>
				<div>
					<p>ویترین</p>
				</div>
				<div className={s.vitrineContainer}>
					<Vitrine COLUMN={COLUMN} />
				</div>
			</div>
		</>
	);
	return (
		<div>
			<div className={s.input}>
				{numField.map((item, index) => {
					return <React.Fragment key={index}>{item}</React.Fragment>;
				})}
			</div>
		</div>
	);
};

export default Useless;
