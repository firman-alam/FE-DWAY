"use client";

import { Button } from "@/app/ui/button";
import { useGetAllCriteriaQuery } from "@/store/api/criteriaApi";
import {
  useAddNilaiMutation,
  useGetNilaiByIdQuery,
} from "@/store/api/matrixApi";
import {
  CalendarIcon,
  DocumentChartBarIcon,
} from "@heroicons/react/24/outline";
import { useParams, useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { TableNilai } from "./table";

export default function Form() {
  const router = useRouter();
  // const [isInForm, setIsInForm] = useState(second);
  const { id, slug } = useParams();
  const { data: criterias } = useGetAllCriteriaQuery({ id_divisi: id });
  const { data: nilai } = useGetNilaiByIdQuery({
    id_divisi: id,
    id_kandidat: slug,
  });
  console.log(nilai);

  const [addNilai] = useAddNilaiMutation();

  const {
    register,
    handleSubmit,
    getValues,
    setValue,
    formState: { errors },
  } = useForm({
    nilai: [],
  });

  const onSubmit = (value) => {
    addNilai({ data: value, id_divisi: id, id_kandidat: slug })
      .unwrap()
      .then((payload) => {
        if (payload.status) {
          toast.success(payload.message);

          setTimeout(() => {
            router.push(`/divisi/${id}/kandidat`);
          }, 2000);
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

  if (nilai !== undefined && criterias !== undefined) {
    return <TableNilai data={nilai.data} kriteria={criterias.data} />;
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <ToastContainer />
      <div className="rounded-md bg-gray-50 p-4 md:p-6">
        <div className="mb-4">
          <label
            htmlFor="no_telepon"
            className="mb-2 block text-sm font-medium"
          >
            Tahun
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="tahun"
                type="date"
                placeholder="Masukkan tahun"
                aria-describedby="tahun-error"
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                {...register("tahun", {
                  required: "Tahun harus diisi",
                })}
              />
              <CalendarIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
            </div>
            <div id="tahun-error" aria-live="polite" aria-atomic="true">
              {errors.tahun && (
                <p className="mt-2 text-sm text-red-500">
                  {errors.tahun.message}
                </p>
              )}
            </div>
          </div>
        </div>

        {criterias?.data?.map((data) => {
          const optionsValue = generateOptions(data?.maks_nilai);

          return (
            <div className="mb-4" key={data.id_kriteria}>
              <label
                htmlFor="customer"
                className="mb-2 block text-sm font-medium"
              >
                {data.nama}
              </label>
              <div className="relative mt-2 rounded-md">
                <div className="relative">
                  <select
                    id="nilai"
                    className="peer block w-full cursor-pointer rounded-md border border-gray-200  py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                    defaultValue={1}
                    aria-describedby="customer-error"
                    onChange={(e) => {
                      handleSelectChange(data.id_kriteria, e.target.value);
                    }}
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
            onClick={() => router.push(`/divisi/${id}/kandidat`)}
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
