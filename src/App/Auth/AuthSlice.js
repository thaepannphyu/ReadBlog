import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: {},
  isLoading: false,
  error: null, 
  token: localStorage.getItem('token') ,
  isAdmin:false,
  isLoggedIn:false
};


const authSlice = createSlice({
  name: 'authSlice',
  initialState,
  reducers: {
    setToken(state, action) {
      state.token = action.payload;
    },
    clearToken(state) {
      state.token = null;
      localStorage.removeItem("token");
    },
    setLoading(state, action) {
      state.isLoading = action.payload;
    },
    setError(state, action) {
      state.error = action.payload;
    },
    setUser(state, action) {
      state.user = action.payload;
    },
    setLoggedIn:(state, action)=>{
      state.isLoggedIn = action.payload;
    },
    setIsAdmin:(state, action)=>{
      state.isAdmin = action.payload;
    }
  },
});

export const { setToken, clearToken, setLoading, setError, setUser,setLoggedIn,setIsAdmin } = authSlice.actions;
export const authSliceReducer = authSlice.reducer;
