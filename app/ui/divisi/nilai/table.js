"use client";

export function TableNilai({ kriteria, data }) {
  return (
    <div className="mt-6 flow-root">
      <h1>Tabel Matriks Nilai Pegawai</h1>
      <div className="inline-block min-w-full align-middle">
        <div className="rounded-lg bg-gray-50 p-2 md:pt-0">
          <table className="hidden min-w-full text-gray-900 md:table">
            <thead className="rounded-lg text-left text-sm font-normal">
              <tr>
                <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                  No
                </th>
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
              {data?.map((n, index) => (
                <tr
                  key={n.id_penilaian}
                  className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
                >
                  <td className="whitespace-nowrap px-3 py-3">{index + 1}</td>
                  <td className="whitespace-nowrap px-3 py-3">{n.tahun}</td>
                  <td className="whitespace-nowrap px-3 py-3">{n.nama}</td>
                  {n.details?.map((d, index) => (
                    <td className="whitespace-nowrap px-3 py-3" key={index}>
                      {d.nilai}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export function TableMatriks({ kriteria, data }) {
  return (
    <div className="mt-6 flow-root">
      <h1>Tabel Matriks Nilai Pegawai</h1>
      <div className="inline-block min-w-full align-middle">
        <div className="rounded-lg bg-gray-50 p-2 md:pt-0">
          <table className="hidden min-w-full text-gray-900 md:table">
            <thead className="rounded-lg text-left text-sm font-normal">
              <tr>
                <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                  Kode Alternatif
                </th>
                {kriteria?.map((k) => (
                  <th
                    key={k.id_kriteria}
                    scope="col"
                    className="px-4 py-5 font-medium sm:pl-6"
                  >
                    {k.kode}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="bg-white">
              {data?.map((n, index) => (
                <tr
                  key={n.id_kandidat}
                  className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
                >
                  <td className="whitespace-nowrap px-3 py-3">
                    {n.alternatif}
                  </td>
                  {n.details?.map((d, index) => (
                    <td className="whitespace-nowrap px-3 py-3" key={index}>
                      {d.nilai}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export function TableNormalisasi({ kriteria, data }) {
  return (
    <div className="mt-6 flow-root">
      <h1>Tabel Nilai Preferensi Pegawai</h1>
      <div className="inline-block min-w-full align-middle">
        <div className="rounded-lg bg-gray-50 p-2 md:pt-0">
          <table className="hidden min-w-full text-gray-900 md:table">
            <thead className="rounded-lg text-left text-sm font-normal">
              <tr>
                <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                  Kode Alternatif
                </th>
                {kriteria?.map((k) => (
                  <th
                    key={k.id_kriteria}
                    scope="col"
                    className="px-4 py-5 font-medium sm:pl-6"
                  >
                    {k.kode}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="bg-white">
              {data?.map((n, index) => (
                <tr
                  key={n.id_kandidat}
                  className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
                >
                  <td className="whitespace-nowrap px-3 py-3">
                    {n.alternatif}
                  </td>
                  {n.details?.map((d, index) => (
                    <td className="whitespace-nowrap px-3 py-3" key={index}>
                      {d.preferensi}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
