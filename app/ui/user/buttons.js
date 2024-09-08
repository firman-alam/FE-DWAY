import { PencilIcon, PlusIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

export function UpdateUser({ id_user }) {
  return (
    <Link
      href={`/user/${id_user}/edit`}
      className="rounded-md border p-2 hover:bg-gray-100 flex flex-row items-center gap-2"
    >
      Edit <PencilIcon className="w-5" />
    </Link>
  );
}

export function AddUser() {
  return (
    <Link
      href="/user/create"
      className="flex h-10 items-center rounded-lg bg-jasa-red px-4 text-sm font-medium text-white transition-colors hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
    >
      <span className="hidden md:block">Tambah User</span>{" "}
      <PlusIcon className="h-5 md:ml-4" />
    </Link>
  );
}
