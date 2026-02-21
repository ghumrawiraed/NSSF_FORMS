import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import tripService from "../../../services/tripService";
import { toast } from "react-toastify";
const initialState = {
  employee: null,
  emplyees: [],
  isLoading: false,
  isSuccess: false,
  isError: null,
  message: "",
};

// GET ALL EMPLOYEES
export const fetchEmployees = createAsyncThunk(
  "emplyees/getAll",
  async (_, thunkAPI) => {
    try {
      return await tripService.getEmployees();
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      console.log(message);
      return thunkAPI.rejectWithValue(message);
    }
  },
);

// DELETE A EMPLOYEE

export const deleteEmployee = createAsyncThunk(
  "emplyees/delete",
  async (id, thunkAPI) => {
    try {
      console.log("deleteEmployee Slice :", id);
      return await tripService.deleteEmployee(id);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      console.log(message);
      return thunkAPI.rejectWithValue(message);
    }
  },
);

// get a single employee
export const getEmployee = createAsyncThunk(
  "emplyees/getEmployee",
  async (id, thunkAPI) => {
    try {
      return await tripService.getEmployee(id);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      console.log(message);
      return thunkAPI.rejectWithValue(message);
    }
  },
);

// UPDATE A EMPLOYEE

export const updateEmployee = createAsyncThunk(
  "emplyees/updateEmployee",
  async ({ id, formData }, thunkAPI) => {
    try {
      return await tripService.updateEmployee(id, formData);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      console.log(message);
      return thunkAPI.rejectWithValue(message);
    }
  },
);

const tripSlice = createSlice({
  name: "employee",
  initialState,
  reducers: {
    SAVE_EMPLOYEE(state, action) {
      const profile = action.payload;
      state.employee.title = profile.title;
    },
  },

  // extraReducers will store responses that comes from createAsyncThunk
  extraReducers: (builder) => {
    builder

      // getemplyees  in progress case
      .addCase(fetchEmployees.pending, (state) => {
        state.isLoading = true;
      })
      // get emplyees sucessfull  case
      .addCase(fetchEmployees.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        console.log(action.payload);
        state.emplyees = action.payload;
      })
      //  error getting emplyees case
      .addCase(fetchEmployees.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        toast.error(action.payload);
      })

      // gettrip  in progress case
      .addCase(getEmployee.pending, (state) => {
        state.isLoading = true;
      })
      // get employee sucessfull  case
      .addCase(getEmployee.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.employee = action.payload;
      })
      //  error getting employee case
      .addCase(getEmployee.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        toast.error(action.payload);
      })

      // update employee  in progress case
      .addCase(updateEmployee.pending, (state) => {
        state.isLoading = true;
      })
      // update employee sucessfull  case
      .addCase(updateEmployee.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        console.log(action.payload);
        state.employee = action.payload;
      })
      //  error updating employee case
      .addCase(updateEmployee.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        toast.error(action.payload);
      })

      // delete employee  in progress case
      .addCase(deleteEmployee.pending, (state) => {
        state.isLoading = true;
      })
      // delete emplyees sucessfull  case
      .addCase(deleteEmployee.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.emplyees = state.emplyees.filter(
          (employee) => employee.id !== action.payload.id,
        );
        toast.success("Employee Deleted Sucessfully");
      })
      //  error deleting employee case
      .addCase(deleteEmployee.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        toast.error(action.payload);
      });
  },
});

export const selectIsLoading = (state) => state.employee.isLoading;
export const selectEmployee = (state) => state.employee.employee;

export const { SAVE_EMPLOYEE } = tripSlice.actions;

export default tripSlice.reducer;
