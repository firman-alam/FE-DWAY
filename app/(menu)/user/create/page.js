import Breadcrumbs from "@/app/ui/divisi/breadcrumbs";
import Form from "@/app/ui/user/create-form";

export default function Page() {
  return (
    <main className="w-full p-4 rounded-md bg-gray-100">
      <Breadcrumbs
        breadcrumbs={[
          { label: "User", href: "/user" },
          { label: "Tambah User", href: "/user/create", active: true },
        ]}
      />

      <Form />
    </main>
  );
}
