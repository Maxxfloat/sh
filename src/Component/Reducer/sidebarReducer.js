const initialState = {
  sidebarOpen: false,
  modarOpen: false,
};

const sidebarReducer = (state = initialState, action) => {
  switch (action.type) {
    case "sidebarToggleClick":
      return { sidebarOpen: true, modarOpen: true };
    case "sidebarCloseClick": {
      return { sidebarOpen: false, modarOpen: false };
    }
    case "modalClick": {
      return { sidebarOpen: false, modarOpen: false };
    }

    default:
      return state;
  }
};

export default sidebarReducer;
