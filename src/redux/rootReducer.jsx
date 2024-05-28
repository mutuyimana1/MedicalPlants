import { combineReducers } from "redux";
// import utilsSlice from "./slices/utilsSlice/utilsSlice";

// import usersSlice from "./slices/usersSlice/usersSlice";
import loggedInSlice from "./slices/loggedInSlice/loggedInSlice";

const RootReducer = combineReducers({
  // utils: utilsSlice,
  loggedIn: loggedInSlice,
  // users: usersSlice,
});

export default RootReducer;
