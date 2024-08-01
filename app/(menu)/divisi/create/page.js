import Breadcrumbs from "@/app/ui/divisi/breadcrumbs"
import Form from "@/app/ui/divisi/create-form"

export default function Page() {
  return (
    <main className="w-full p-4 rounded-md bg-gray-100">
      <Breadcrumbs
        breadcrumbs={[
          { label: "Divisi", href: "/divisi" },
          { label: "Tambah Divisi", href: "/divisi/create", active: true },
        ]}
      />

      <Form />
    </main>
  )
}
