import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isLoading: false,
}

export const LoadingSlice = createSlice({
  name: 'loadingSlice',
  initialState,
  reducers: {
    setLoading: (state, action) => {
      state.query = action.payload;
    },
  },
})

// Action creators are generated for each case reducer function
export const { setLoading} = LoadingSlice.actions

export default LoadingSlice.reducer