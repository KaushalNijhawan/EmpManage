import {combineReducers} from "redux";
import AuthReducers from "./AuthReducers";
import EmployeeReducer from "./EmployeeReducer";
import EmployeeFetchReducer from "./EmployeeFetchReducer";

export default combineReducers({
    auth: AuthReducers,
    emp : EmployeeReducer,
    empFetch : EmployeeFetchReducer
})