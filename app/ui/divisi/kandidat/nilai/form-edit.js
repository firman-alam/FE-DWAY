"use client";

import { Button } from "@/app/ui/button";
import { useGetAllCriteriaQuery } from "@/store/api/criteriaApi";
import {
  useAddNilaiMutation,
  useGetNilaiByIdQuery,
  useUpdateNilaiMutation,
} from "@/store/api/matrixApi";
import {
  CalendarIcon,
  DocumentChartBarIcon,
} from "@heroicons/react/24/outline";
import { useParams, useRouter } from "next/navigation";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function EditForm({ data, handleEdit }) {
  const { id: id_divisi, slug: id_kandidat } = useParams();
  const { data: criterias } = useGetAllCriteriaQuery({ id_divisi: id_divisi });

  const [updateNilai] = useUpdateNilaiMutation();

  const {
    handleSubmit,
    getValues,
    setValue,
    formState: { errors },
    watch,
  } = useForm({
    details: data?.details || [],
  });
  console.log(watch("details"));

  const onSubmit = (value) => {
    let transformedDetails = {};
    if (value == null || value == undefined) {
      data.details.forEach((detail) => {
        transformedDetails[detail.id_kriteria] = detail.nilai;
      });
      value = transformedDetails;
    }

    if (criterias?.data?.length !== Object.keys(value.details).length) {
      toast.error("Semua kriteria harus diisi nilai");
      return;
    }

    updateNilai({
      data: value,
      id_penilaian: data?.id_penilaian,
      id_divisi: id_divisi,
      id_kandidat: id_kandidat,
    })
      .unwrap()
      .then((payload) => {
        if (payload.status) {
          toast.success(payload.message);

          setTimeout(() => {
            handleEdit();
          }, 1500);
        } else {
          toast.error(payload.message);
        }
      })
      .catch((err) => console.log(err));
  };

  const handleSelectChange = (criterionId, selectedValue) => {
    setValue("details", {
      ...getValues("details"),
      [criterionId]: selectedValue,
    });
  };

  useEffect(() => {
    if (data) {
      let transformedDetails = {};
      data.details.forEach((detail) => {
        transformedDetails[detail.id_kriteria] = detail.nilai;
      });
      setValue("details", transformedDetails);
    }
  }, [data, setValue]);

  const details = watch("details") || {};

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <ToastContainer />
      <div className="rounded-md bg-gray-50 p-4 md:p-6">
        {criterias?.data?.map((criteria) => {
          const optionsValue = generateOptions(criteria?.maks_nilai);
          const nilai = details[criteria.id_kriteria] || 1;

          return (
            <div className="mb-4" key={criteria.id_kriteria}>
              <label
                htmlFor="customer"
                className="mb-2 block text-sm font-medium"
              >
                {criteria.nama}
              </label>
              <div className="relative mt-2 rounded-md">
                <div className="relative">
                  <select
                    id="nilai"
                    className="peer block w-full cursor-pointer rounded-md border border-gray-200  py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                    defaultValue={nilai}
                    aria-describedby="customer-error"
                    onChange={(e) => {
                      handleSelectChange(criteria.id_kriteria, e.target.value);
                    }}
                    value={nilai}
                  >
                    {optionsValue?.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.value}
                      </option>
                    ))}
                  </select>
                  <DocumentChartBarIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
                </div>
                {/* <div id='nama-error' aria-live='polite' aria-atomic='true'>
                {errors.nama && (
                  <p className='mt-2 text-sm text-red-500'>
                    {errors.nama.message}
                  </p>
                )}
              </div> */}
              </div>
            </div>
          );
        })}

        <div className="mt-6 flex justify-end gap-4">
          <button
            onClick={handleEdit}
            className="flex h-10 cursor-pointer items-center rounded-lg bg-white px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
          >
            Batal
          </button>
          <Button type="submit">Simpan Nilai</Button>
        </div>
      </div>
    </form>
  );
}

function generateOptions(range) {
  const optionsValue = [];
  for (let i = 1; i <= range; i++) {
    optionsValue.push({ value: i, label: i });
  }
  return optionsValue;
}
