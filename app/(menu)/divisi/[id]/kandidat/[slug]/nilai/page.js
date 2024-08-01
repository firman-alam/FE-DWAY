"use client";

import Breadcrumbs from "@/app/ui/divisi/breadcrumbs";
import Form from "@/app/ui/divisi/kandidat/nilai/form";
import { useParams } from "next/navigation";

export default function NilaiPage() {
  const params = useParams();

  return (
    <main className="w-full p-4 rounded-md bg-gray-100">
      <Breadcrumbs
        breadcrumbs={[
          { label: "Divisi", href: "/divisi" },
          { label: "Kandidat", href: `/divisi/${params.id}/kandidat` },
          {
            label: "Nilai",
            href: `/divisi/${params.id}/kandidat/${params.slug}/nilai`,
            active: true,
          },
        ]}
      />

      <Form />
    </main>
  );
}
