// store/authSlice.js
import { createSlice } from '@reduxjs/toolkit';


const initialState = {
    isAuthenticated: false,
    user: null,
};
const storedUser = typeof window !== 'undefined' ? JSON.parse(localStorage.getItem('user') || 'null') : null;
const storedToken = typeof window !== 'undefined' ? localStorage.getItem('token') : null;

const initialAuthState = storedUser && storedToken
    ? { isAuthenticated: true, user: storedUser, token: storedToken }
    : initialState;
const authSlice = createSlice({
    name: 'auth',
    initialState: initialAuthState,
    reducers: {
        login(state, action) {
            state.isAuthenticated = true;
            state.user = action.payload;
        },
        logout(state) {
            state.isAuthenticated = false;
            state.user = null;
        }
    }
});
export const selectUser = (state: any) => state.auth.user;

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
