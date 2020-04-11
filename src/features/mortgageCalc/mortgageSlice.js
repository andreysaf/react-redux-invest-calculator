import { createSlice } from '@reduxjs/toolkit';

export const slice = createSlice({
  name: 'mortgage',
  initialState: {
    paymentAmount: 0,
    frq: 12,
    startAmount: 0,
    years: 0
  },
  reducers: {
    storeValues: (state, action) => {
      state.paymentAmount = action.payload.paymentAmount;
      state.frq = action.payload.frq;
      state.startAmount = action.payload.startAmount;
      state.years = action.payload.years;
    },
  },
});

export const selectPaymentAmount = state => state.mortgage.paymentAmount;
export const selectFrq = state => state.mortgage.frq;
export const selectStartAmount = state => state.mortgage.startAmount;
export const selectYears = state => state.mortgage.years;
export const { storeValues } = slice.actions;

export default slice.reducer;

