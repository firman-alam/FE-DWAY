export default function TableLaporan({ data }) {
  return (
    <div className="mt-6 flow-root">
      <div className="inline-block min-w-full align-middle">
        <div className="rounded-lg bg-gray-50 p-2 md:pt-0">
          <table className="hidden min-w-full text-gray-900 md:table">
            <thead className="rounded-lg text-left text-sm font-normal">
              <tr>
                <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                  Kode
                </th>
                <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                  Tahun
                </th>
                <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                  NIK
                </th>
                <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                  Nama
                </th>
                <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                  Hasil
                </th>
                <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                  Rank
                </th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {data?.map((rank, index) => (
                <tr
                  key={rank.id_kandidat}
                  className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
                >
                  <td className="whitespace-nowrap px-3 py-3">
                    {rank.alternatif}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">{rank.tahun}</td>
                  <td className="whitespace-nowrap px-3 py-3">{rank.nik}</td>
                  <td className="whitespace-nowrap px-3 py-3">{rank.nama}</td>
                  <td className="whitespace-nowrap px-3 py-3">{rank.total}</td>
                  <td className="whitespace-nowrap px-3 py-3">{index + 1}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
