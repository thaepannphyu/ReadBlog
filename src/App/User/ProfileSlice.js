import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  currentUser: {
    user:null,token:null,err:null
  },
  isloggedIn:false
}

export const ProfileSlice = createSlice({
  name: 'profileSlice',
  initialState,
  reducers: {
    setCurrentUser: (state, action) => {
      state.currentUser = action.payload;
    },
    setLoggedIn:(state, action)=>{
      state.isloggedIn = action.payload;
    }
  },
})

// Action creators are generated for each case reducer function
export const 
{
  setCurrentUser,setLoggedIn} 
= ProfileSlice.actions

export default ProfileSlice.reducer