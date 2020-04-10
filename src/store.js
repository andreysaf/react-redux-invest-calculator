import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './features/counter/counterSlice';
import mortgageReducer from './features/mortgageCalc/mortgageSlice';

export default configureStore({
  reducer: {
    counter: counterReducer,
    mortgage: mortgageReducer,
  },
});
