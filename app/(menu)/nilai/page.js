"use client";

import {
  TableMatriks,
  TableNilai,
  TableNormalisasi,
} from "@/app/ui/divisi/nilai/table";
import { lato } from "@/app/ui/fonts";
import { useLazyGetAllCriteriaQuery } from "@/store/api/criteriaApi";
import { useGetAllDivisiQuery } from "@/store/api/divisiApi";
import {
  useLazyGetAllMatriksQuery,
  useLazyGetAllNilaiQuery,
} from "@/store/api/matrixApi";
import { useEffect } from "react";

export default function NilaiPage() {
  const { data } = useGetAllDivisiQuery({ search: "" });
  console.log(data);
  const [getNilai, { data: nilai }] = useLazyGetAllNilaiQuery();
  const [getMatriks, { data: matriks }] = useLazyGetAllMatriksQuery();
  const [getKriteria, { data: criterias }] = useLazyGetAllCriteriaQuery();

  useEffect(() => {
    if (data !== undefined) {
      getNilai({ id_divisi: data?.[0]?.id_divisi });
      getMatriks({ id_divisi: data?.[0]?.id_divisi });
      getKriteria({ id_divisi: data?.[0]?.id_divisi });
    }
  }, [data]);

  return (
    <div className="w-full p-4 rounded-md bg-gray-100">
      <div className="flex w-full items-center justify-between">
        <h1 className={`${lato.className} text-xl`}>Nilai</h1>
      </div>

      <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
        <div className="relative flex flex-col flex-1 gap-2 flex-shrink-0">
          <h1 className={`${lato.className} text-lg`}>Divisi</h1>
          <select
            id="customer"
            name="customerId"
            className="peer block w-full cursor-pointer rounded-md border border-gray-200  py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
            defaultValue={1}
            aria-describedby="customer-error"
            onChange={(e) => {
              getNilai({ id_divisi: e.target.value });
              getMatriks({ id_divisi: e.target.value });
              getKriteria({ id_divisi: e.target.value });
            }}
          >
            {data?.map((divisi) => (
              <option key={divisi.id_divisi} value={divisi.id_divisi}>
                {divisi.nama_divisi}
              </option>
            ))}
          </select>
        </div>
      </div>

      <TableNilai kriteria={criterias?.data} data={nilai} />
      <TableMatriks kriteria={criterias?.data} data={matriks} />
      <TableNormalisasi kriteria={criterias?.data} data={matriks} />
    </div>
  );
}
