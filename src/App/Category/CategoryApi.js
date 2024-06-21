import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BaseQuery } from "../BaseQuery";



const initialState = {
    data: [],
    isLoading: false,
    error: null,
  };


export const CategoryApi=createApi({
    reducerPath: "categoryApi",
    initialState: initialState,
    baseQuery:fetchBaseQuery(BaseQuery),
    tagTypes: ['Category', 'SingleCat'],
    
    endpoints: (builder) => ({

            getCategories: builder.query({
                query: () => `/categories`,  
                providesTags:["Category"]
            }),

            
            getCategorieByPageLimit: builder.query({
              query: ({catLimit,...catOffset}) => {
                const queryDetails = {
                  url: '/categories',
                  params:{limit: catLimit,...catOffset},
                };
                
                return queryDetails;
              },
              providesTags:["Category"],
              
          }),

            getSingleCategory: builder.query({
              query: (id) => `/categories/${id}`,
              providesTags:["SingleCat"]
          }),

            createCategory: builder.mutation({
              query: (categoryBody) => ({
                url: `categories`,
                method: 'POST',
                body:categoryBody
              }),
              invalidatesTags:[ 'Category',"SingleCat"],
            }),


            deleteCategories:builder.mutation({
              query:(id)=>({
                url:`categories/${id}`,
                method:`DELETE`
              }),
              invalidatesTags:["Category","SingleCat"],
            })
          
        }),
  
})

export const {
    reducer:categoryReducer,
    useGetCategoriesQuery,
    useDeleteCategoriesMutation,
    useCreateCategoryMutation,
    useGetSingleCategoryQuery,
    useGetCategorieByPageLimitQuery
  } = CategoryApi;

