'use client'

import Breadcrumbs from '@/app/ui/divisi/breadcrumbs'
import Form from '@/app/ui/divisi/edit-form'
import { useGetDivisiQuery } from '@/store/api/divisiApi'

export default function Page({ params }) {
  const id = params.id
  const { data } = useGetDivisiQuery({ id })

  return (
    <main className='w-full p-4 rounded-md bg-gray-100'>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Divisi', href: '/divisi' },
          {
            label: 'Edit Divisi',
            href: `/divisi/${params.id}/edit`,
            active: true,
          },
        ]}
      />

      {data && <Form divisi={data?.data} />}
    </main>
  )
}
