"use client";

import { kkpAPI } from "./api";

export const criteriaApi = kkpAPI.injectEndpoints({
  endpoints: (builder) => ({
    getAllCriteria: builder.query({
      query: ({ id_divisi }) => `divisi/${id_divisi}/kriteria`,
      providesTags: ["Divisi"],
    }),
    getCriteriaById: builder.query({
      query: ({ id_divisi, id_kriteria }) => ({
        url: `divisi/${id_divisi}/kriteria/${id_kriteria}`,
      }),
      providesTags: ["Divisi"],
    }),
    addCriteria: builder.mutation({
      query: ({ id_divisi, data }) => ({
        url: `divisi/${id_divisi}/kriteria`,
        method: "POST",
        body: { ...data },
      }),
      invalidatesTags: ["Divisi"],
    }),
    updateCriteria: builder.mutation({
      query: ({ id_divisi, id_kriteria, data }) => ({
        url: `divisi/${id_divisi}/kriteria/${id_kriteria}`,
        method: "PATCH",
        body: { ...data },
      }),
      invalidatesTags: ["Divisi"],
    }),
    deleteCriteria: builder.mutation({
      query: ({ id_divisi, id_kriteria }) => ({
        url: `divisi/${id_divisi}/kriteria/${id_kriteria}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Divisi"],
    }),
  }),
});

export const {
  useGetAllCriteriaQuery,
  useLazyGetAllCriteriaQuery,
  useGetCriteriaByIdQuery,
  useLazyGetCriteriaByIdQuery,
  useAddCriteriaMutation,
  useUpdateCriteriaMutation,
  useDeleteCriteriaMutation,
} = criteriaApi;
