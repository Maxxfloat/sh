const initialState = {
	isSim: true,
};

const isSim = (state = initialState, action) => {
	switch (action.type) {
		case "switchToSim":
			return true;

		case "switchToDomain":
			return false;

		default:
			return true;
	}
};

export default isSim;
