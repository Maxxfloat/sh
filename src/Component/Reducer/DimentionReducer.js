const width = window.innerWidth;
let isPhone = null;

if (Number(width) < 600) {
	isPhone = true;
} else {
	isPhone = false;
}

const initialState = {
	isPhone: isPhone,
};

const DimentionReducer = (state = initialState, action) => {
	switch (action.type) {
		case "resize": {
			const width = window.innerWidth;
			if (Number(width) < 600) {
				return { isPhone: true };
			} else {
				return { isPhone: false };
			}
		}
		default:
			return state;
	}
};

export default DimentionReducer;
