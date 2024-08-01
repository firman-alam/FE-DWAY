"use client";

import { kkpAPI } from "./api";

export const matrixApi = kkpAPI.injectEndpoints({
  endpoints: (builder) => ({
    getAllNilai: builder.query({
      query: ({ id_divisi }) => `divisi/${id_divisi}/nilai`,
      providesTags: ["Divisi"],
    }),
    getNilaiById: builder.query({
      query: ({ id_divisi, id_kandidat }) => ({
        url: `divisi/${id_divisi}/kandidat/${id_kandidat}/nilai`,
      }),
      providesTags: ["Divisi"],
    }),
    getAllMatriks: builder.query({
      query: ({ id_divisi }) => `divisi/${id_divisi}/matriks`,
      providesTags: ["Divisi"],
    }),
    addNilai: builder.mutation({
      query: ({ data, id_divisi, id_kandidat }) => ({
        url: `divisi/${id_divisi}/kandidat/${id_kandidat}/nilai`,
        method: "POST",
        body: { ...data },
      }),
      invalidatesTags: ["Divisi"],
    }),
    updateNilai: builder.mutation({
      query: ({ data, id_penilaian, id_divisi, id_kandidat }) => ({
        url: `divisi/${id_divisi}/kandidat/${id_kandidat}/nilai`,
        method: "PATCH",
        body: { ...data, id_penilaian: id_penilaian },
      }),
      invalidatesTags: ["Divisi"],
    }),
    deleteNilai: builder.mutation({
      query: ({ id_divisi, id_kandidat }) => ({
        url: `divisi/${id_divisi}/kandidat/${id_kandidat}/nilai`,
        method: "Delete",
      }),
      invalidatesTags: ["Nilai"],
    }),
    getRanks: builder.query({
      query: ({ id_divisi, tahun = 2024 }) =>
        `divisi/${id_divisi}/ranks?tahun=${tahun}`,
      providesTags: ["Divisi"],
    }),
  }),
});

export const {
  useGetAllNilaiQuery,
  useLazyGetAllNilaiQuery,
  useLazyGetNilaiQuery,
  useGetAllMatriksQuery,
  useLazyGetAllMatriksQuery,
  useAddNilaiMutation,
  useUpdateNilaiMutation,
  useDeleteNilaiMutation,
  useGetRanksQuery,
  useLazyGetRanksQuery,
  useGetNilaiByIdQuery,
  useLazyGetNilaiByIdQuery,
} = matrixApi;
