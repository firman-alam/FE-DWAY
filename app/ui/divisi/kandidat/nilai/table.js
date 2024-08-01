import { useState } from "react";
import EditForm from "./form-edit";

export function TableNilai({ kriteria, data }) {
  const [isEdit, setIsEdit] = useState(false);

  console.log("is edit", isEdit);

  const handleEdit = () => {
    setIsEdit((prev) => !prev);
  };

  if (isEdit) {
    return <EditForm data={data} handleEdit={handleEdit} />;
  }

  return (
    <div className="mt-6 flow-root">
      <div className="flex items-center justify-between mb-4">
        <h1>Tabel Nilai Pegawai</h1>
        <button
          onClick={handleEdit}
          className="flex h-10 items-center rounded-lg bg-jasa-red px-4 text-sm font-medium text-white transition-colors hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
        >
          Edit nilai
        </button>
      </div>
      <div className="inline-block min-w-full align-middle">
        <div className="rounded-lg bg-gray-50 p-2 md:pt-0">
          <table className="hidden min-w-full text-gray-900 md:table">
            <thead className="rounded-lg text-left text-sm font-normal">
              <tr>
                {/* <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                  No
                </th> */}
                <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                  Tahun
                </th>
                <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                  Nama
                </th>
                {kriteria?.map((k) => (
                  <th
                    key={k.id_kriteria}
                    scope="col"
                    className="px-4 py-5 font-medium sm:pl-6"
                  >
                    {k.nama}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="bg-white">
              <tr
                key={data.id_penilaian}
                className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
              >
                {/* <td className="whitespace-nowrap px-3 py-3">{index + 1}</td> */}
                <td className="whitespace-nowrap px-3 py-3">{data.tahun}</td>
                <td className="whitespace-nowrap px-3 py-3">{data.nama}</td>
                {data.details?.map((d, index) => (
                  <td className="whitespace-nowrap px-3 py-3" key={index}>
                    {d.nilai}
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
