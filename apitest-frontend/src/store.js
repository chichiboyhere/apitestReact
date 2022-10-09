import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { userLoginReducer, 
         userRegisterReducer 
} from "./reducers/userReducers";

import {
  postResultReducer,
  fetchResultReducer,
} from "./reducers/resultReducers";

import{
  postQuantitativeSpsecReducer,
  fetchQuantitativeSpsecReducer,
} from "./reducers/quantitativeReducers";

import{
  postVerbalSpsecReducer,
  fetchVerbalSpsecReducer,
} from "./reducers/verbalReducers";

import { postContactMessageReducer, fetchContactMessageReducer } from "./reducers/contactReducers"
const reducer = combineReducers({
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  postResult:postResultReducer,
  resultList: fetchResultReducer,
  postQuantitative: postQuantitativeSpsecReducer,
  fetchQuantitative: fetchQuantitativeSpsecReducer,
  postVerbal: postVerbalSpsecReducer,
  fetchVerbal: fetchVerbalSpsecReducer,
  postContactMessage: postContactMessageReducer,
  fetchContactMessage: fetchContactMessageReducer 
});

const userInfoFromStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;
const initialState = { userLogin: { userInfo: userInfoFromStorage } };

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  applyMiddleware(...middleware)
);

export default store;
