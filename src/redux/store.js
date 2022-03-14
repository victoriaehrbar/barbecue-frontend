import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import barbecueReducer from "./reducers/barbecueReducer";
import thunk from "redux-thunk";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
  barbecues: barbecueReducer,
});

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

export default store;