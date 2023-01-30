import { createSlice } from '@reduxjs/toolkit';

const initialAuthState = { isAuthenticated: false };

const authenticatorSlice = createSlice({
  name: 'authentication',
  initialState: initialAuthState,
  reducers: {
    login(state) {
      state.isAuthenticated = true;
    },
    logOut(state) {
      state.isAuthenticated = false;
    },
  },
});

export const authenticatorAction = authenticatorSlice.actions;

export default authenticatorSlice.reducer;
