"use client";

import {
  ArrowDownCircleIcon,
  ArrowUpCircleIcon,
  AtSymbolIcon,
  DocumentChartBarIcon,
  DocumentPlusIcon,
  ScaleIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import { Button } from "../../button";
import { useParams, useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useUpdateCriteriaMutation } from "@/store/api/criteriaApi";

export default function Form({ data }) {
  const router = useRouter();
  const { id, slug } = useParams();
  const [updateKriteria] = useUpdateCriteriaMutation();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      kode: data?.kode,
      tipe: data?.tipe,
      bobot: data?.bobot,
      nama: data?.nama,
      maks_nilai: data?.maks_nilai,
    },
  });

  const onSubmit = (value) => {
    updateKriteria({ data: value, id_divisi: id, id_kriteria: slug })
      .unwrap()
      .then((payload) => {
        if (payload.status) {
          toast.success(payload.message);

          setTimeout(() => {
            router.push(`/divisi/${id}/kriteria`);
          }, 2000);
        }
      })
      .catch((err) => {
        toast.error(err.data.message);
      });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <ToastContainer />
      <div className="rounded-md bg-gray-50 p-4 md:p-6">
        {/* Kode */}
        <div className="mb-4">
          <label htmlFor="kode" className="mb-2 block text-sm font-medium">
            Kode Kriteria
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="kode"
                name="kode"
                type="text"
                placeholder="Masukkan kode kriteria"
                aria-describedby="kode-error"
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                {...register("kode", { required: "Kode harus diisi" })}
              />
              <AtSymbolIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
            </div>
            <div id="name-error" aria-live="polite" aria-atomic="true">
              {errors.kode && (
                <p className="mt-2 text-sm text-red-500">
                  {errors.kode.message}
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Nama */}
        <div className="mb-4">
          <label htmlFor="name" className="mb-2 block text-sm font-medium">
            Nama Kriteria
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Masukkan nama kriteria"
                aria-describedby="name-error"
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                {...register("nama", { required: "Nama harus diisi" })}
              />
              <DocumentPlusIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
            </div>
            <div id="name-error" aria-live="polite" aria-atomic="true">
              {errors.nama && (
                <p className="mt-2 text-sm text-red-500">
                  {errors.nama.message}
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Bobot */}
        <div className="mb-4">
          <label htmlFor="bobot" className="mb-2 block text-sm font-medium">
            Bobot Kriteria
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="bobot"
                name="bobot"
                type="number"
                step="0.01"
                placeholder="Masukkan bobot kriteria"
                aria-describedby="bobot-error"
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                {...register("bobot", { required: "Bobot harus diisi" })}
              />
              <ScaleIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
            </div>
            <div id="name-error" aria-live="polite" aria-atomic="true">
              {errors.bobot && (
                <p className="mt-2 text-sm text-red-500">
                  {errors.bobot.message}
                </p>
              )}
            </div>
          </div>
        </div>

        <div className="mb-4">
          <label htmlFor="nilai" className="mb-2 block text-sm font-medium">
            Maksimum Nilai
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="maks_nilai"
                name="maks_nilai"
                type="number"
                step="0.01"
                placeholder="Masukkan maksimum nilai"
                aria-describedby="maks_nilai-error"
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                {...register("maks_nilai", {
                  required: "Maksimum nilai harus diisi",
                })}
              />
              <DocumentChartBarIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
            </div>
            <div id="maks_nilai-error" aria-live="polite" aria-atomic="true">
              {errors.maks_nilai && (
                <p className="mt-2 text-sm text-red-500">
                  {errors.maks_nilai.message}
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Tipe */}
        <fieldset>
          <legend className="mb-2 block text-sm font-medium">
            Tipe Kriteria
          </legend>
          <div className="rounded-md border border-gray-200 bg-white px-[14px] py-3">
            <div className="flex gap-4">
              <div className="flex items-center">
                <input
                  id="benefit"
                  name="status"
                  type="radio"
                  value="benefit"
                  aria-describedby="status-error"
                  className="h-4 w-4 cursor-pointer border-gray-300 bg-gray-100 text-gray-600 focus:ring-2"
                  {...register("tipe", { required: "Pilih tipe kriteria" })}
                />
                <label
                  htmlFor="benefit"
                  className="ml-2 flex cursor-pointer items-center gap-1.5 rounded-full bg-green-500 px-3 py-1.5 text-xs font-medium text-gray-600"
                >
                  Benefit <ArrowUpCircleIcon className="h-4 w-4" />
                </label>
              </div>
              <div className="flex items-center">
                <input
                  id="cost"
                  name="status"
                  type="radio"
                  value="cost"
                  aria-describedby="status-error"
                  className="h-4 w-4 cursor-pointer border-gray-300 bg-gray-100 text-gray-600 focus:ring-2"
                  {...register("tipe", { required: "Pilih tipe kriteria" })}
                />
                <label
                  htmlFor="cost"
                  className="ml-2 flex cursor-pointer items-center gap-1.5 rounded-full bg-orange-500 px-3 py-1.5 text-xs font-medium text-white"
                >
                  Cost <ArrowDownCircleIcon className="h-4 w-4" />
                </label>
              </div>
            </div>
          </div>
          {errors.status && (
            <p className="mt-2 text-sm text-red-500">{errors.status.message}</p>
          )}
        </fieldset>
      </div>

      <div className="mt-6 flex justify-end gap-4">
        <Link
          href={`/divisi/${id}/kriteria`}
          className="flex h-10 items-center rounded-lg bg-white px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
        >
          Batal
        </Link>
        <Button type="submit">Edit Kriteria</Button>
      </div>
    </form>
  );
}
