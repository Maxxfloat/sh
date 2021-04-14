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

const COLUMN = [
	// {
	// 	Header: "Id",
	// 	accessor: "id",
	// },
	{
		Header: "Phone Number",
		accessor: "phone_number",
	},
	{
		Header: "Phone Call",
		accessor: "phone_call",
	},
	{
		Header: "Price",
		accessor: "price",
	},
	// {
	// 	Header: "Update",
	// 	accessor: "update",
	// },
	{
		Header: "Position",
		accessor: "position",
	},
	{
		Header: "Condition",
		accessor: "condition",
	},
	// {
	// 	Header: "Code",
	// 	accessor: "code",
	// },
	{
		Header: "City",
		accessor: "country",
	},
	// {
	// 	Header: "View",
	// 	accessor: "view",
	// },
];

export { preNumber, operator, condition, location, priceOffer, COLUMN };
