import { kkpAPI } from "./api";

export const UserApi = kkpAPI.injectEndpoints({
  endpoints: (builder) => ({
    getAllUser: builder.query({
      query: () => `user`,
      providesTags: ["User"],
    }),
    getUserById: builder.query({
      query: ({ id_user }) => ({
        url: `user/${id_user}`,
      }),
      providesTags: ["User"],
    }),
    addUser: builder.mutation({
      query: ({ data }) => ({
        url: `user`,
        method: "POST",
        body: { ...data },
      }),
      invalidatesTags: ["User"],
    }),
    updateUser: builder.mutation({
      query: ({ user_id, data }) => ({
        url: `user/${user_id}`,
        method: "PUT",
        body: { ...data },
      }),
      invalidatesTags: ["User"],
    }),
    deleteUser: builder.mutation({
      query: ({ id_user }) => ({
        url: `user/${id_user}`,
        method: "DELETE",
      }),
      invalidatesTags: ["User"],
    }),
  }),
});

export const {
  useGetAllUserQuery,
  useGetUserByIdQuery,
  useAddUserMutation,
  useUpdateUserMutation,
  useDeleteUserMutation,
} = UserApi;
