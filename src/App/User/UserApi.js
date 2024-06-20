import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BaseQuery } from "../BaseQuery";


export const UserApi=createApi(
    {
        reducerPath:"UserApi",
        baseQuery:fetchBaseQuery(BaseQuery),
        tagTypes: ['Users'],
        endpoints:(builder)=>({
            getUsers:builder.query({
                query:()=>"/users",
                providesTags:["users"]
            }),
            
            createAdminUser:builder.mutation({
                query:(adminCredential)=>({
                    url:`/users/make_admin`,
                    method:"POST",
                    body:adminCredential
                }),
                invalidatesTags:["users"]
            }),

            updateUser:builder.mutation({
                query:({ id, ...data })=>({
                    url:`/users/${id}/update`,
                    method:"PATCH",
                    body:data
                }),
                invalidatesTags:["users"]
            })
        })
    }
);


export const {
useGetUsersQuery,
useUpdateUserMutation,
useCreateAdminUserMutation
}=UserApi;

export default UserApi;