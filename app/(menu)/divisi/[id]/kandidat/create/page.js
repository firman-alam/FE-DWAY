"use client"

import Breadcrumbs from "@/app/ui/divisi/breadcrumbs"
import Form from "@/app/ui/divisi/kandidat/create-form"
import { useParams } from "next/navigation"

export default function Page() {
  const params = useParams()

  return (
    <main className="w-full p-4 rounded-md bg-gray-100">
      <Breadcrumbs
        breadcrumbs={[
          { label: "Divisi", href: "/divisi" },
          { label: "Kandidat", href: `/divisi/${params.id}/kandidat` },
          {
            label: "Tambah Kandidat",
            href: `/divisi/${params.id}/kandidat/create`,
            active: true,
          },
        ]}
      />

      <Form />
    </main>
  )
}
