import {
  ListBulletIcon,
  PencilIcon,
  PlusIcon,
  TrashIcon,
  UserIcon,
} from '@heroicons/react/24/outline'
import Link from 'next/link'

export function CreateDivisi() {
  return (
    <Link
      href='/divisi/create'
      className='flex h-10 items-center rounded-lg bg-jasa-red px-4 text-sm font-medium text-white transition-colors hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600'
    >
      <span className='hidden md:block'>Tambah Divisi</span>{' '}
      <PlusIcon className='h-5 md:ml-4' />
    </Link>
  )
}

export function Kriteria({ id }) {
  return (
    <Link
      href={`/divisi/${id}/kriteria`}
      className='rounded-md border p-2 hover:bg-gray-100 flex flex-row items-center gap-2'
    >
      Kriteria <ListBulletIcon className='w-5' />
    </Link>
  )
}

export function Kandidat({ id }) {
  return (
    <Link
      href={`/divisi/${id}/kandidat`}
      className='rounded-md border p-2 hover:bg-gray-100 flex flex-row items-center gap-2'
    >
      Kandidat <UserIcon className='w-5' />
    </Link>
  )
}

export function UpdateDivisi({ id }) {
  return (
    <Link
      href={`/divisi/${id}/edit`}
      className='rounded-md border p-2 hover:bg-red-400 flex flex-row items-center gap-2'
    >
      Edit <PencilIcon className='w-5' />
    </Link>
  )
}
