"use client";

import Breadcrumbs from "@/app/ui/divisi/breadcrumbs";
import { AddKandidat } from "@/app/ui/divisi/kandidat/buttons";
import Search from "@/app/ui/divisi/kandidat/search";
import TableKandidat from "@/app/ui/divisi/kandidat/table";
import { useGetAllKandidatQuery } from "@/store/api/pegawaiApi";
import { PlusIcon } from "@heroicons/react/24/outline";
import { useParams, useRouter } from "next/navigation";

export default function KandidatPage() {
  const router = useRouter();
  const { id } = useParams();
  const { data } = useGetAllKandidatQuery({ id_divisi: id });

  return (
    <main className="w-full p-4 rounded-md bg-gray-100">
      <Breadcrumbs
        breadcrumbs={[
          { label: "Divisi", href: "/divisi" },
          {
            label: "Kandidat",
            href: "/divisi/kandidat",
            active: true,
          },
        ]}
      />
      <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
        <Search placeholder="Cari kandidat..." />
        <div
          onClick={() => router.push(`/divisi/${id}/kandidat/create`)}
          className="flex h-10 items-center cursor-pointer rounded-lg bg-jasa-red px-4 text-sm font-medium text-white transition-colors hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
        >
          <span className="hidden md:block">Tambah Kandidat</span>{" "}
          <PlusIcon className="h-5 md:ml-4" />
        </div>
      </div>

      <TableKandidat data={data} id={id} />
    </main>
  );
}
