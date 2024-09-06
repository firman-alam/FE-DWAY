import { PencilIcon } from "@heroicons/react/24/outline";
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
