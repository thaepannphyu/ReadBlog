import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  query: '',
}

export const BlogQueryFilterSlice = createSlice({
  name: 'blogQueryFilterSlice',
  initialState,
  reducers: {
    setQuery: (state, action) => {
      state.query = action.payload;
    },
  },
})

// Action creators are generated for each case reducer function
export const {setQuery} = BlogQueryFilterSlice.actions

export default BlogQueryFilterSlice.reducer