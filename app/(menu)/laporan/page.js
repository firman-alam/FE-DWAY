"use client";

import TableLaporan from "@/app/ui/divisi/laporan/table";
import { lato } from "@/app/ui/fonts";
import { useGetAllDivisiQuery } from "@/store/api/divisiApi";
import { useLazyGetRanksQuery } from "@/store/api/matrixApi";
import { DocumentIcon } from "@heroicons/react/24/outline";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function LaporanPage() {
  const router = useRouter();
  const { data } = useGetAllDivisiQuery({});
  const [getRanks, { data: ranks }] = useLazyGetRanksQuery();
  const [today, setToday] = useState("");
  const [query, setQuery] = useState({
    tahun: today,
    id_divisi: data?.[0]?.id_divisi,
  });

  const handleExport = () => {
    router.push(
      `/pdf?id_divisi=${
        query.id_divisi || data?.[0]?.id_divisi
      }&method=laporan&tahun=${query.tahun || today}`
    );
  };

  useEffect(() => {
    const currentDate = new Date().toISOString().split("T")[0]; // Get today's date in YYYY-MM-DD format
    setToday(currentDate);
    setQuery((prev) => ({ tahun: currentDate, ...prev })); // Set the default value to today's date
  }, []);

  useEffect(() => {
    getRanks({
      id_divisi: data?.[0]?.id_divisi,
      tahun: query.tahun || today,
      size: 25,
    });
  }, [data]);

  return (
    <div className="w-full p-4 rounded-md bg-gray-100">
      <div className="flex w-full items-center justify-between">
        <h1 className={`${lato.className} text-xl`}>Laporan</h1>
        <button
          onClick={handleExport}
          className="flex h-10 items-center rounded-lg bg-jasa-red px-4 text-sm font-medium text-white transition-colors hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
        >
          Export Data <DocumentIcon className="w-5" />
        </button>
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
              getRanks({
                id_divisi: e.target.value,
                tahun: query.tahun || today,
                size: 25,
              });
              setQuery((prev) => ({ ...prev, id_divisi: e.target.value }));
            }}
          >
            {data?.map((divisi) => (
              <option key={divisi.id_divisi} value={divisi.id_divisi}>
                {divisi.nama_divisi}
              </option>
            ))}
          </select>
        </div>
        <div className="relative flex flex-col gap-2">
          <h1 className={`${lato.className} text-lg`}>Tanggal</h1>
          <input
            className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
            placeholder={"Masukkan tahun"}
            type="date"
            value={query.tahun || today}
            onChange={(e) =>
              setQuery((prev) => ({ tahun: e.target.value, ...prev }))
            }
          />
        </div>
      </div>

      <TableLaporan data={ranks} />
    </div>
  );
}
