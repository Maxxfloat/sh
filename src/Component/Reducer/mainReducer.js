import { combineReducers, createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

import sidebarReducer from "./sidebarReducer";
import isSim from "./isSimReducer";
import dimention from "./DimentionReducer";

const store = createStore(
	combineReducers({
		sidebar: sidebarReducer,
		isSim: isSim,
		dimention: dimention,
	}),
	composeWithDevTools(applyMiddleware(thunk))
);

export default store;
