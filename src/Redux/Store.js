import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import RootReducer from "./Reducer/RootReducer";

export default createStore(RootReducer, applyMiddleware(thunk));
