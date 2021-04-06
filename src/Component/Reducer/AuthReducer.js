const initialState = {
	auth: false,
};

const authReducer = (state = initialState, action) => {
	switch (action.type) {
		case "didSignup":
			return {
				auth: true,
			};
		case "didLogin": {
			return {
				auth: true,
			};
		}

		default:
			return state;
	}
};

export default authReducer;
