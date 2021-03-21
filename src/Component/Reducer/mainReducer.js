import { combineReducers, createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

import sidebarReducer from "./sidebarReducer";
import isSim from "./isSimReducer";

const store = createStore(
	combineReducers({
		sidebar: sidebarReducer,
		isSim: isSim,
	}),
	composeWithDevTools(applyMiddleware(thunk))
);

export default store;
