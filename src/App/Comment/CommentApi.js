import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BaseQuery } from "../BaseQuery";

export const CommentApi=createApi({
    reducerPath:"CommentApi",
    baseQuery:fetchBaseQuery(BaseQuery),
    tagTypes: ['comments'],
    endpoints:(builder)=>({
        getComments:builder.query({
            query:(blogId)=>`/blogs/${blogId}/comments`,
            providesTags:["comments"]
        }),
        getCommentCount:builder.query({
            query:(id)=>`/blogs/${id}/comment-count`,
            providesTags:["comments"]
        }),
        createComment: builder.mutation({
            query: ({blogId,...comment}) => ({
              url: `/blogs/${blogId}/comment`,
              method: 'POST',
              body:comment
            }),
            invalidatesTags:[ "comments"],
          }),
    })
})

export const {
    useGetCommentsQuery,
    useGetCommentCountQuery,
    useCreateCommentMutation
  } = CommentApi;