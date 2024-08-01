import { useDeleteCriteriaMutation } from "@/store/api/criteriaApi";
import { PencilIcon, PlusIcon, TrashIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { toast } from "react-toastify";

export function AddKriteria({ id }) {
  return (
    <Link
      href={`/divisi/${id}/kriteria/create`}
      className="flex h-10 items-center rounded-lg bg-jasa-red px-4 text-sm font-medium text-white transition-colors hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
    >
      <span className="hidden md:block">Tambah Kriteria</span>{" "}
      <PlusIcon className="h-5 md:ml-4" />
    </Link>
  );
}

export function UpdateKriteria({ id_divisi, id_kriteria }) {
  return (
    <Link
      href={`/divisi/${id_divisi}/kriteria/${id_kriteria}/edit`}
      className="rounded-md border p-2 hover:bg-gray-100 flex flex-row items-center gap-2"
    >
      Edit <PencilIcon className="w-5" />
    </Link>
  );
}

export function DeleteKriteria({ id_divisi, id_kriteria }) {
  const [deleteData] = useDeleteCriteriaMutation();

  const handleDelete = () => {
    deleteData({ id_divisi, id_kriteria })
      .unwrap()
      .then((payload) => {
        toast.success(payload.message);
        console.log(payload);
      });
  };

  return (
    <button
      className="rounded-md border p-2 hover:bg-gray-100"
      onClick={handleDelete}
    >
      <span className="sr-only">Hapus</span>
      <TrashIcon className="w-5" />
    </button>
  );
}
