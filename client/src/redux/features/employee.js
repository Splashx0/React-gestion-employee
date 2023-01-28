import { createSlice } from "@reduxjs/toolkit";

export const employeeSlice = createSlice({
  name: "employee",
  initialState: { employees: [] },
  reducers: {
    SET_EMPLOYEES: (state, action) => {
      state.employees = action.payload;
    },
    CREATE_EMPLOYEE: (state, action) => {
      state.employees = [...state.employees, action.payload];
    },
  },
});

// Action creators are generated for each case reducer function
export const { SET_EMPLOYEES, CREATE_EMPLOYEE } = employeeSlice.actions;

export default employeeSlice.reducer;
