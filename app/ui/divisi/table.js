"use client";

import {
  useDeleteDivisiMutation,
  useGetAllDivisiQuery,
} from "@/store/api/divisiApi";
import { Kandidat, Kriteria, UpdateDivisi } from "./buttons";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { TrashIcon } from "@heroicons/react/24/outline";

export default function TableDivisi({ search }) {
  const { data } = useGetAllDivisiQuery({ search: search });
  const [deleteDivisi] = useDeleteDivisiMutation();

  const handleDelete = (id) => {
    deleteDivisi({ id })
      .unwrap()
      .then((payload) => {
        if (payload.status) {
          toast.success(payload.message);
        } else {
          toast.error(payload.message);
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="mt-6 flow-root">
      <ToastContainer />
      <div className="inline-block min-w-full align-middle">
        <div className="rounded-lg bg-gray-50 p-2 md:pt-0">
          <div className="md:hidden">
            {data?.map((divisi) => (
              <div
                key={divisi.id_divisi}
                className="mb-2 w-full rounded-md bg-white p-4"
              >
                <div className="flex flex-col gap-3 items-start justify-between border-b pb-4">
                  <p className="text-xl">{divisi.nama_divisi}</p>
                  <div className="mb-2 flex gap-2">
                    <Kriteria id={divisi.id_divisi} />
                    <Kandidat id={divisi.id_divisi} />
                  </div>
                </div>
                <div className="flex w-full gap-2 items-center justify-end pt-4">
                  <UpdateDivisi id={divisi.id_divisi} />
                  <button
                    onClick={() => handleDelete(divisi.id_divisi)}
                    className="rounded-md border p-2 hover:bg-gray-100 flex flex-row items-center gap-2"
                  >
                    Hapus
                    <TrashIcon className="w-5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
          <table className="hidden min-w-full text-gray-900 md:table">
            <thead className="rounded-lg text-left text-sm font-normal">
              <tr>
                <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                  Nama Divisi
                </th>
                <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                  Menu
                </th>
                <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                  Opsi
                </th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {data?.map((divisi) => (
                <tr
                  key={divisi.id_divisi}
                  className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
                >
                  <td className="whitespace-nowrap px-3 py-3">
                    {divisi.nama_divisi}
                  </td>
                  <td className="whitespace-nowrap py-3 pl-6 pr-3">
                    <div className="flex justify-start gap-3">
                      <Kriteria id={divisi.id_divisi} />
                      <Kandidat id={divisi.id_divisi} />
                    </div>
                  </td>
                  <td className="whitespace-nowrap py-3 pl-6 pr-3">
                    <div className="flex justify-start gap-3">
                      <UpdateDivisi id={divisi.id_divisi} />
                      <button
                        onClick={() => handleDelete(divisi.id_divisi)}
                        className="rounded-md border p-2 hover:bg-gray-100 flex flex-row items-center gap-2"
                      >
                        Hapus
                        <TrashIcon className="w-5" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
