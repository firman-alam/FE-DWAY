"use client";

import { ToastContainer } from "react-toastify";
import { DeleteKriteria, UpdateKriteria } from "./buttons";

export default function TableKriteria({ data, id }) {
  return (
    <div className="mt-6 flow-root">
      <ToastContainer />
      <div className="inline-block min-w-full align-middle">
        <div className="rounded-lg bg-gray-50 p-2 md:pt-0">
          <table className="hidden min-w-full text-gray-900 md:table">
            <thead className="rounded-lg text-left text-sm font-normal">
              <tr>
                <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                  Kode Kriteria
                </th>
                <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                  Nama Kriteria
                </th>
                <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                  Bobot
                </th>
                <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                  Tipe
                </th>
                <th
                  scope="col"
                  className="px-4 py-5 font-medium sm:pl-6 text-center"
                >
                  Opsi
                </th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {data?.data?.map((kriteria) => (
                <tr
                  key={kriteria.id_kriteria}
                  className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
                >
                  <td className="whitespace-nowrap px-3 py-3">
                    {kriteria.kode}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {kriteria.nama}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {kriteria.bobot}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {kriteria.tipe}
                  </td>
                  <td className="whitespace-nowrap py-3 pl-6 pr-3">
                    <div className="flex justify-center gap-3">
                      <UpdateKriteria
                        id_divisi={id}
                        id_kriteria={kriteria.id_kriteria}
                      />
                      <DeleteKriteria
                        id_divisi={id}
                        id_kriteria={kriteria.id_kriteria}
                      />
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
