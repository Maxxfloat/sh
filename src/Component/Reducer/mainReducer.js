import { combineReducers, createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

import sidebar from "./sidebarReducer";
import isSim from "./isSimReducer";
import dimention from "./DimentionReducer";
import didAuth from "./AuthReducer";

const store = createStore(
	combineReducers({
		sidebar,
		isSim,
		dimention,
		didAuth,
	}),
	composeWithDevTools(applyMiddleware(thunk))
);

export default store;
