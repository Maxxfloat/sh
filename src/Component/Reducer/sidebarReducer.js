const initialState = {
	sidebarOpen: false,
	modalOpen: false,
};

const sidebarReducer = (state = initialState, action) => {
	switch (action.type) {
		case "sidebarToggleClick":
			return { sidebarOpen: true, modalOpen: true };
		case "sidebarCloseClick": {
			return { sidebarOpen: false, modalOpen: false };
		}
		case "modalClick": {
			return { sidebarOpen: false, modalOpen: false };
		}

		default:
			return state;
	}
};

export default sidebarReducer;
