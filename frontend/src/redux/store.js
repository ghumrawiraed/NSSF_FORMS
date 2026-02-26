import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../redux/auth/authSlice";
import employeeReducer from "../redux/employee/employeeSlice";
import employeeFilterReducer from "../redux/employee/employeeFilterSlice";
import establishmentReducer from "../redux/establishment/establishmentSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    employee: employeeReducer,
    employeeFilter: employeeFilterReducer,
    establishment: establishmentReducer,
  },
});
