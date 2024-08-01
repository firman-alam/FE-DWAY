import { kkpAPI } from "./api";

export const divisiApi = kkpAPI.injectEndpoints({
  endpoints: (builder) => ({
    getAllDivisi: builder.query({
      query: ({ search = "" }) => `divisi?search=${search}`,
      providesTags: ["Divisi"],
    }),
    getDivisi: builder.query({
      query: ({ id = 1 }) => `divisi/${id}`,
      providesTags: ["Divisi"],
    }),
    addDivisi: builder.mutation({
      query: (data) => ({
        url: `divisi`,
        method: "POST",
        body: { ...data },
      }),
      invalidatesTags: ["Divisi"],
    }),
    updateDivisi: builder.mutation({
      query: (data) => ({
        url: `divisi`,
        method: "PATCH",
        body: { ...data },
      }),
      invalidatesTags: ["Divisi"],
    }),
    deleteDivisi: builder.mutation({
      query: ({ id }) => ({
        url: `divisi/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Divisi"],
    }),
  }),
});

export const {
  useGetAllDivisiQuery,
  useGetDivisiQuery,
  useAddDivisiMutation,
  useUpdateDivisiMutation,
  useDeleteDivisiMutation,
} = divisiApi;
