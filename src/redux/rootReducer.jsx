import { combineReducers } from "redux";
// import utilsSlice from "./slices/utilsSlice/utilsSlice";

// import usersSlice from "./slices/usersSlice/usersSlice";
import loggedInSlice from "./slices/loggedInSlice/loggedInSlice";
import categorySlice from "./slices/category/categorySlice";

const RootReducer = combineReducers({
  // utils: utilsSlice,
  loggedIn: loggedInSlice,
  category: categorySlice,
});

export default RootReducer;
