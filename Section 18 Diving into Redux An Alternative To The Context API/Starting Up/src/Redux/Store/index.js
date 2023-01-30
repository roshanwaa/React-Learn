import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counterStore';
import authenticatorReducer from './authStore';

const store = configureStore({
  reducer: {
    counter: counterReducer,
    authenticatorSlice: authenticatorReducer,
  },
});

export default store;
