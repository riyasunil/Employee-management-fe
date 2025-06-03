import baseApi from "../api"

export const employeeApi = baseApi.injectEndpoints({
    endpoints:(builder) => ({
        getEmployeeList : builder.query({
            query : () => '/employee',
            providesTags : ['EMPLOYEES'],
        }),
        deleteEmployee : builder.mutation({
            query : ({id}) => ({
                url: `/employee/${id}`,
                method : 'DELETE'
            }),
            invalidatesTags: ['EMPLOYEES']
        }),
        createEmployee : builder.mutation({
            query : (createBody) => ({
                url :  '/employee',
                method : 'POST',
                body : createBody,
            }),
            invalidatesTags: ['EMPLOYEES']
        }),
        updateEmployee : builder.mutation({
            query : ({id, updateBody}) => ({
                url :  `/employee/${id}`,
                method : 'PUT',
                body : updateBody,
            }),
            invalidatesTags: ['EMPLOYEES']
        })
    })
})

export const { useGetEmployeeListQuery, useDeleteEmployeeMutation, useUpdateEmployeeMutation, useCreateEmployeeMutation } = employeeApi;