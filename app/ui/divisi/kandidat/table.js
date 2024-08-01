import { ToastContainer } from "react-toastify";
import { DeleteKandidat, Nilai, UpdateKandidat } from "./buttons";

export default function TableKandidat({ data, id }) {
  return (
    <div className="mt-6 flow-root">
      <ToastContainer />
      <div className="inline-block min-w-full align-middle">
        <div className="rounded-lg bg-gray-50 p-2 md:pt-0">
          <table className="hidden min-w-full text-gray-900 md:table">
            <thead className="rounded-lg text-left text-sm font-normal">
              <tr>
                <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                  NIK
                </th>
                <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                  Nama Kandidat
                </th>
                <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                  Jenis Kelamin
                </th>
                <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                  No. Telepon
                </th>
                <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                  Alamat
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
              {data?.map((kandidat) => (
                <tr
                  key={kandidat.id_kandidat}
                  className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
                >
                  <td className="whitespace-nowrap px-3 py-3">
                    {kandidat.nik}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {kandidat.nama}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {kandidat.gender}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {kandidat.no_telepon}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {kandidat.alamat}
                  </td>
                  <td className="whitespace-nowrap py-3 pl-6 pr-3">
                    <div className="flex justify-center gap-3">
                      <Nilai
                        id_divisi={id}
                        id_kandidat={kandidat.id_kandidat}
                      />
                      <UpdateKandidat
                        id_divisi={id}
                        id_kandidat={kandidat.id_kandidat}
                      />
                      <DeleteKandidat
                        id_divisi={id}
                        id_kandidat={kandidat.id_kandidat}
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
