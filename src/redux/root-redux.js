import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk";
import sortReducer from "./sortReducer";
import settingsReducer from "./settingsReducer";
import authReducer from "./authReducer";
import {reducer as formReducer} from "redux-form";
import messageReducer from "./messageReducer";
import courseReducer from "./courseReducer";

let rootReducer = combineReducers({
	sortReducer: sortReducer,
	settingsReducer: settingsReducer,
	authReducer: authReducer,
	messageReducer: messageReducer,
	courseReducer: courseReducer,
	form: formReducer
});
let store = createStore(rootReducer, applyMiddleware(thunk));

window.store = store;

export default store;