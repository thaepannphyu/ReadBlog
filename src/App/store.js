import { configureStore } from '@reduxjs/toolkit'
import { BlogApi, blogApiReducer } from './Blog/BlogApi.js'
import BlogQueryFilterSliceReducer from "./Blog/BlogQueryFilterSlice.js"
import {  Auth,  authReducer } from './Auth/Auth.js'
// import ProfileSliceReducer from './SavingSlice/ProfileSlice.js'
import { authSliceReducer } from './Auth/AuthSlice.js'
import { CategoryApi, categoryReducer } from './Category/CategoryApi.js'
import { UserApi} from './User/UserApi.js'
import { CommentApi } from './Comment/CommentApi.js'
import LoadingSlice from './LoadingSlice.js'







export const store = configureStore({
  reducer: {
    blogApi:blogApiReducer,
    blogQueryFilter:BlogQueryFilterSliceReducer,
    loadingSlice:LoadingSlice,
    auth:authReducer,
    authSlice:authSliceReducer,
    categoryApi:categoryReducer,

    [UserApi.reducerPath]: UserApi.reducer,
    [CommentApi.reducerPath]:CommentApi.reducer
  }, 
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware().concat(
    BlogApi.middleware,
    CategoryApi.middleware,
    CommentApi.middleware,
    Auth.middleware,
    UserApi.middleware),
})