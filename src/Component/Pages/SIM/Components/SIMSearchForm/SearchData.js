const num = [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 90, 91, 92, 93];
const preNumber = [];
num.map((item) => preNumber.push("9" + item));

// const operators = ["همراه اول", "ایرانسل", "رایتل", "اپراتور مجازی", "تالیا"];

const operator = [
	{ name: "همراه اول", operator: "hamrah" },
	{ name: "ایرانسل", operator: "iran" },
	{ name: "رایتل", operator: "rightel" },
	{ name: "تالیا", operator: "taliya" },
	{ name: "اپراتور مجازی", operator: "majazi" },
];

const condition = [
	{
		name: "نو",
		condition: "new",
	},
	{
		name: "در حد نو",
		condition: "like_new",
	},
	{ name: "کارکرده", condition: "used" },
];

const location = [
	{
		province: "خوزستان",
		value: "23",
		cities: [
			{ name: "اهواز", value: "10" },
			{ name: "شوش", value: "12" },
		],
	},
];

const priceOffer = [
	{
		name: "بالاترین قیمت",
		value: "topPrice",
	},
	{
		name: "تماس بگیرید",
		value: "call",
	},

	{
		name: "توافقی",
		value: "convince",
	},
];

export { preNumber, operator, condition, location, priceOffer };
