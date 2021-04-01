const initialState = { isSim: true };

const isSim = (state = initialState, action) => {
	switch (action.type) {
		case "switchToSim":
			return { isSim: true };

		case "switchToDomain":
			return { isSim: false };

		default:
			return state;
	}
};

export default isSim;
