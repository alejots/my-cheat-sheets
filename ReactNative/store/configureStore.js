import { createStore, combineReducers, compose } from "redux";

import placesReducer from "./reducers/places";

const rootReduce = combineReducers({
  places: placesReducer
});

// To allow Redux debugginh with react-native-debugger
// Find out more: https://github.com/jhen0409/react-native-debugger/blob/master/docs/redux-devtools-integration.md
let composeEnhancers = compose;

if (__DEV__) {
  composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
}

const configureStore = () => {
  return createStore(rootReduce, composeEnhancers());
};

export default configureStore;
