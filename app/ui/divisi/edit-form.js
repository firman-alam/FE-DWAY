'use client'

import { DocumentPlusIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import { Button } from '../button'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/navigation'
import { useUpdateDivisiMutation } from '@/store/api/divisiApi'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export default function Form({ divisi }) {
  const router = useRouter()
  const [updateDivisi] = useUpdateDivisiMutation()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      id_divisi: divisi?.id_divisi,
      nama_divisi: divisi?.nama_divisi,
    },
  })

  const onSubmit = (value) => {
    updateDivisi(value)
      .unwrap()
      .then((payload) => {
        if (payload.status) {
          toast.success(payload.message)

          setTimeout(() => {
            router.push('/divisi')
          }, 2000)
        } else {
          toast.error(payload.message)
        }
      })
      .catch((err) => console.log(err))
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <ToastContainer />
      <div className='rounded-md bg-gray-50 p-4 md:p-6'>
        {/* Nama Divisi */}
        <div className='mb-4'>
          <label htmlFor='name' className='mb-2 block text-sm font-medium'>
            Nama Divisi
          </label>
          <div className='relative mt-2 rounded-md'>
            <div className='relative'>
              <input
                id='nama_divisi'
                type='text'
                placeholder='Masukkan nama divisi'
                aria-describedby='nama_divisi-error'
                className='peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500'
                {...register('nama_divisi', { required: 'Nama harus diisi' })}
              />
              <DocumentPlusIcon className='pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900' />
            </div>
            <div id='nama_divisi-error' aria-live='polite' aria-atomic='true'>
              {errors.nama_divisi && (
                <p className='mt-2 text-sm text-red-500'>
                  {errors.nama_divisi.message}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className='mt-6 flex justify-end gap-4'>
        <Link
          href='/divisi'
          className='flex h-10 items-center rounded-lg bg-gray-50 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200'
        >
          Batal
        </Link>
        <Button type='submit'>Edit Divisi</Button>
      </div>
    </form>
  )
}
