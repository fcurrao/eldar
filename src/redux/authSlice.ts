 
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AuthState } from '../Interfaces/AuthState';  


const initialState: AuthState = {
  user: {
    role: null,
    token: null,
  },
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action: PayloadAction<{ role: 'user' | 'admin'; token: string }>) => {
      state.user.role = action.payload.role;
      state.user.token = action.payload.token;
    },
    logout: (state) => {
      state.user.role = null;
      state.user.token = null;
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
