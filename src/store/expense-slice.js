const { createSlice } = require("@reduxjs/toolkit");

export const expenseSlice = createSlice({
  name: "expeneceSlice",
  initialState: {
    expenseList: [12, 34, 5],
  },
  reducers: {
    addExpenseAction: (currectSlice, action) => {
      console.log("addExpense" + action.payload);
      currectSlice.expenseList.push(action.payload);
    },
  },
});

export const { addExpenseAction } = expenseSlice.actions;
