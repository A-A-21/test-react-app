import { combineReducers } from "redux";
import cardReducer from "./cardReducer";
import loadingReducer from "./loadingReducer";

const rootReducer = combineReducers({ cards: cardReducer, isLoading: loadingReducer });

export default rootReducer;
