import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// import { setCurrentUser, setLoggedIn } from "../../App/SavingSlice/ProfileSlice";
import { clearToken, setError, setIsAdmin, setLoggedIn, setToken, setUser } from "./AuthSlice";
import Cookies from 'js-cookie';


const baseQuery=fetchBaseQuery({
  baseUrl: 'http://127.0.0.1:8000/api/V1',
  prepareHeaders: (headers,{getState}) => {
    const token =getState().authSlice.token;
   
    if (token) {
      headers.set('authorization', `Bearer ${token}`)
    }

    return headers
  },

}
)

export const Auth = createApi({
  reducerPath: "auth",
  baseQuery: async (args, api, extraOptions) => { 
   return await baseQuery(args, api, extraOptions);
  },

  endpoints: (builder) => ({
    dashboard:builder.query({
      query: () => `/dashboard`,
    }),
    authUser:builder.query({
      query: () => `/user`,
    }),
   login: builder.mutation({
        query: (credentials) => ({
          url: 'login',
          method: 'POST',
          body: credentials,
        }),
        async onQueryStarted(arg, {dispatch, queryFulfilled }) {
          try {
            const { data } = await queryFulfilled;
            const token=data?.data.token;
            const isAdmin=data?.data?.isAdmin;
            if(token){
              localStorage.setItem("token",token);
              dispatch(setUser(data?.data?.user));
              dispatch(setLoggedIn(true))
              dispatch(setToken( token))
              dispatch(setIsAdmin(isAdmin))
              Cookies.set("token",token,{ expires: 1 })
             
            }
          } catch (err) {
            dispatch(setUser({}))
            dispatch(setLoggedIn(false))
          }
        },

      }),
    register: builder.mutation({
        query: (credentials) => ({
          url: `register`,
          method: 'POST',
          body: credentials,
        }),
      }),
      logout: builder.mutation({
        query: () => {
          return {
          url: `logout`,
          method: 'POST',
        }},
        
        async onQueryStarted(arg, { dispatch, queryFulfilled }) {
          try{

            const data=await queryFulfilled;
            console.log("reach logout")
            if(data){
              dispatch(setUser(null))
              dispatch(setLoggedIn(false))
              dispatch(clearToken())
              dispatch(setIsAdmin(false))
            }
          }catch(err){
            dispatch(setError( err.message));
              
          }
        },
      }),
  })
});


export const {
  reducer: authReducer,
  useLoginMutation,
  useRegisterMutation,
  useLogoutMutation,
  useDashboardQuery,
  useAuthUserQuery
} = Auth;
 