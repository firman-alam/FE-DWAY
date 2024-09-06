"use client";

import { useGetAllUserQuery } from "@/store/api/userApi";
import { TrashIcon } from "@heroicons/react/24/outline";
import { ToastContainer } from "react-toastify";
import { UpdateUser } from "./buttons";

export default function TableUser({ search }) {
  const { data } = useGetAllUserQuery();

  return (
    <div className="mt-6 flow-root">
      <ToastContainer />
      <div className="inline-block min-w-full align-middle">
        <div className="rounded-lg bg-gray-50 p-2 md:pt-0">
          <div className="md:hidden">
            {data?.data?.map((d) => (
              <div
                key={d.id_user}
                className="mb-2 w-full rounded-md bg-white p-4"
              >
                <div className="flex flex-col gap-3 items-start justify-between border-b pb-4">
                  <p className="text-xl">{d.username}</p>
                  {/* <div className="mb-2 flex gap-2">
                    <Kriteria id={divisi.id_divisi} />
                    <Kandidat id={divisi.id_divisi} />
                  </div> */}
                </div>
                <div className="flex w-full gap-2 items-center justify-end pt-4">
                  {/* <UpdateDivisi id={divisi.id_divisi} /> */}
                  <button
                    onClick={() => handleDelete(divisi.id_user)}
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
                  Username
                </th>
                <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                  Role
                </th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {data?.data?.map((d) => (
                <tr
                  key={d.id_user}
                  className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
                >
                  <td className="whitespace-nowrap px-3 py-3">{d.username}</td>
                  <td className="whitespace-nowrap px-3 py-3">{d.role}</td>

                  <td className="whitespace-nowrap py-3 pl-6 pr-3">
                    <div className="flex justify-start gap-3">
                      <UpdateUser id_user={d.id_user} />
                      <button
                        onClick={() => handleDelete(d.id_user)}
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
