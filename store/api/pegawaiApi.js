"use client";

import { kkpAPI } from "./api";

export const kandidatApi = kkpAPI.injectEndpoints({
  endpoints: (builder) => ({
    getAllKandidat: builder.query({
      query: ({ id_divisi }) => `divisi/${id_divisi}/kandidat`,
      providesTags: ["Divisi"],
    }),
    getKandidatById: builder.query({
      query: ({ id_divisi, id_kandidat }) => ({
        url: `divisi/${id_divisi}/kandidat/${id_kandidat}`,
      }),
      providesTags: ["Divisi"],
    }),
    addKandidat: builder.mutation({
      query: ({ id_divisi, data }) => ({
        url: `divisi/${id_divisi}/kandidat`,
        method: "POST",
        body: { ...data },
      }),
      invalidatesTags: ["Divisi"],
    }),
    updateKandidat: builder.mutation({
      query: ({ id_divisi, data, id_kandidat }) => ({
        url: `divisi/${id_divisi}/kandidat/${id_kandidat}`,
        method: "PATCH",
        body: { ...data },
      }),
      invalidatesTags: ["Divisi"],
    }),
    deleteKandidat: builder.mutation({
      query: ({ id_divisi, id_kandidat }) => ({
        url: `divisi/${id_divisi}/kandidat/${id_kandidat}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Divisi"],
    }),
  }),
});

export const {
  useAddKandidatMutation,
  useDeleteKandidatMutation,
  useGetAllKandidatQuery,
  useGetKandidatByIdQuery,
  useLazyGetAllKandidatQuery,
  useLazyGetKandidatByIdQuery,
  useUpdateKandidatMutation,
} = kandidatApi;
