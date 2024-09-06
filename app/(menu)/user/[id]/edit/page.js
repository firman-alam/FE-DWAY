"use client";

import Breadcrumbs from "@/app/ui/divisi/breadcrumbs";
import Form from "@/app/ui/user/edit-form";
import { useGetUserByIdQuery } from "@/store/api/userApi";

export default function Page({ params }) {
  const id = params.id;
  const { data } = useGetUserByIdQuery({ id_user: id });

  return (
    <main className="w-full p-4 rounded-md bg-gray-100">
      <Breadcrumbs
        breadcrumbs={[
          { label: "User", href: "/user" },
          { label: "Edit User", href: `/user/${id}/edit`, active: true },
        ]}
      />

      {data && <Form data={data} />}
    </main>
  );
}
