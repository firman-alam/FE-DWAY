'use client'

import Breadcrumbs from '@/app/ui/divisi/breadcrumbs'
import Form from '@/app/ui/divisi/kriteria/create-form'
import { useParams } from 'next/navigation'

export default function Page() {
  const params = useParams()

  return (
    <main className='w-full p-4 rounded-md bg-gray-100'>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Divisi', href: '/divisi' },
          { label: 'Kriteria', href: `/divisi/${params.id}/kriteria` },
          {
            label: 'Tambah Kriteria',
            href: `/divisi/${params.id}/kriteria/create`,
            active: true,
          },
        ]}
      />

      <Form />
    </main>
  )
}
