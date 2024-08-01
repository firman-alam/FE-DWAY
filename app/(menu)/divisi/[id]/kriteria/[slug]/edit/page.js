'use client'

import Breadcrumbs from '@/app/ui/divisi/breadcrumbs'
import Form from '@/app/ui/divisi/kriteria/edit-form'
import { useGetCriteriaByIdQuery } from '@/store/api/criteriaApi'
import { useParams } from 'next/navigation'

export default function Page() {
  const params = useParams()
  const { data } = useGetCriteriaByIdQuery({
    id_divisi: params.id,
    id_kriteria: params.slug,
  })
  console.log(data)

  return (
    <main className='w-full p-4 rounded-md bg-gray-100'>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Divisi', href: '/divisi' },
          { label: 'Kriteria', href: `/divisi/${params.id}/kriteria` },
          {
            label: 'Edit Kriteria',
            href: `/divisi/${params.id}/kriteria/${params.slug}/edit`,
            active: true,
          },
        ]}
      />

      {data && <Form data={data} />}
    </main>
  )
}
