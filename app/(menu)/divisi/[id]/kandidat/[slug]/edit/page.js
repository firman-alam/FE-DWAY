'use client'

import Breadcrumbs from '@/app/ui/divisi/breadcrumbs'
import Form from '@/app/ui/divisi/kandidat/edit-form'
import { useGetKandidatByIdQuery } from '@/store/api/pegawaiApi'
import { useParams } from 'next/navigation'

export default function Page() {
  const params = useParams()
  const { data } = useGetKandidatByIdQuery({
    id_divisi: params.id,
    id_kandidat: params.slug,
  })

  return (
    <main className='w-full p-4 rounded-md bg-gray-100'>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Divisi', href: '/divisi' },
          { label: 'Kandidat', href: `/divisi/${params.id}/kandidat` },
          {
            label: 'Edit Kandidat',
            href: `/divisi/${params.id}/kandidat/${params.slug}/edit`,
            active: true,
          },
        ]}
      />

      {data && <Form data={data} />}
    </main>
  )
}
