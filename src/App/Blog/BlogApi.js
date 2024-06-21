import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BaseQuery } from "../BaseQuery";


const initialState = {
  data: [],
  isLoading: false,
  error: null,
};



export const BlogApi = createApi({
  reducerPath: "blogApi",
  tagTypes:["Blog","SingleBlog"],
  baseQuery:fetchBaseQuery(BaseQuery),
  endpoints: (builder) => ({

    getBlogs: builder.query({
      query: () => `blogs`,
      providesTags:() => ["Blog"]
    }),

    getSingleBlog: builder.query({
      query: (id) => `blogs/${id}`,
      providesTags:() => ["SingleBlog"]
    }),

    getBlogsByPage: builder.query({
      query: (page) => `blogs?page=${page}`,
      providesTags:() => ["Blog"]
    }),

    searchBlogs: builder.query({
      query: (payload) => `/blogs?search=${payload}`,
      providesTags:() => ["Blog"]
    }),

    filterBlogs: builder.query({
      query: (queryParams) => {
        const queryDetails = {
          url: '/blogs',
          params: queryParams,
        };
      
        return queryDetails;
      },
      invalidatesTags:["Blog"],
      
    }
   ),

   
    createBlogs: builder.mutation({
      query: (blogBody) => ({
        url: `blogs`,
        method: 'POST',
        body:blogBody
      }),
      invalidatesTags:["Blog"],
    }),
  
    updateBlogs: builder.mutation({
      query: ({ id, ...data }) => ({
        url: `blogs/${id}`,
        method: 'PATCH',
        body: data 
      }),
      invalidatesTags:["Blog","SingleBlog"],
    }),

    deleteBlogs: builder.mutation({
      query: (id) => ({
        url: `blogs/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags:["SingleBlog","Blog"],
    }),
  }),

  initialState: initialState,
});


export const {
  reducer: blogApiReducer,
  useGetBlogsQuery,
  useGetBlogsByPageQuery,
  useSearchBlogsQuery,
  useDeleteBlogsMutation,
  useCreateBlogsMutation,
  useUpdateBlogsMutation,
  useGetSingleBlogQuery,
  useFilterBlogsQuery
} = BlogApi;
