import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  filteredEmployees: [],
};

const employeeFilterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    FILTER_EMPLOYEES(state, action) {
      console.log("FROM FILTER SLICE:",action.payload)
      const { employees, search } = action.payload;
      const tempEmployees = employees.filter((emp) =>        
       emp.first_name?.toLowerCase().includes(search.toLowerCase()) ||
       emp.family_name?.toLowerCase().includes(search.toLowerCase()) ||
       emp.nssf_no?.toString().includes(search)
      );
      
      console.log("tempemployees:",tempEmployees)
      
      state.filteredEmployees = tempEmployees;
    },
  },
});

export const { FILTER_EMPLOYEES } = employeeFilterSlice.actions;

export const selectFilteredEmployees = (state) => state.employeeFilter.filteredEmployees;

export default employeeFilterSlice.reducer;
