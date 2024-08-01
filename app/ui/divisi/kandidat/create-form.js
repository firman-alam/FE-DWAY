'use client'

import {
  AtSymbolIcon,
  FingerPrintIcon,
  HomeIcon,
  PhoneIcon,
  UserIcon,
} from '@heroicons/react/24/outline'
import { useParams, useRouter } from 'next/navigation'
import { Button } from '../../button'
import { useForm } from 'react-hook-form'
import { useAddKandidatMutation } from '@/store/api/pegawaiApi'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export default function Form() {
  const router = useRouter()
  const { id } = useParams()
  const [addKandidat] = useAddKandidatMutation()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = (value) => {
    addKandidat({ data: value, id_divisi: id })
      .unwrap()
      .then((payload) => {
        if (payload.status) {
          toast.success(payload.message)

          setTimeout(() => {
            router.push(`/divisi/${id}/kandidat`)
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
        {/* NIK */}
        <div className='mb-4'>
          <label htmlFor='nik' className='mb-2 block text-sm font-medium'>
            NIK
          </label>
          <div className='relative mt-2 rounded-md'>
            <div className='relative'>
              <input
                id='nik'
                name='nik'
                type='text'
                placeholder='Masukkan NIK'
                aria-describedby='nik-error'
                className='peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500'
                {...register('nik', { required: 'NIK harus diisi' })}
              />
              <FingerPrintIcon className='pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900' />
            </div>
            <div id='nik-error' aria-live='polite' aria-atomic='true'>
              {errors.nik && (
                <p className='mt-2 text-sm text-red-500'>
                  {errors.nik.message}
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Nama */}
        <div className='mb-4'>
          <label htmlFor='name' className='mb-2 block text-sm font-medium'>
            Nama
          </label>
          <div className='relative mt-2 rounded-md'>
            <div className='relative'>
              <input
                id='name'
                name='name'
                type='text'
                placeholder='Masukkan nama'
                aria-describedby='name-error'
                className='peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500'
                {...register('nama', { required: 'Nama harus diisi' })}
              />
              <AtSymbolIcon className='pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900' />
            </div>
            <div id='nama-error' aria-live='polite' aria-atomic='true'>
              {errors.nama && (
                <p className='mt-2 text-sm text-red-500'>
                  {errors.nama.message}
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Gender */}
        <fieldset>
          <legend className='mb-2 block text-sm font-medium'>
            Jenis Kelamin
          </legend>
          <div className='rounded-md border border-gray-200 bg-white px-[14px] py-3'>
            <div className='flex gap-4'>
              <div className='flex items-center'>
                <input
                  id='pria'
                  name='gender'
                  type='radio'
                  value='pria'
                  aria-describedby='gender-error'
                  className='h-4 w-4 cursor-pointer border-gray-300 bg-gray-100 text-gray-600 focus:ring-2'
                  {...register('gender', {
                    required: 'Jenis Kelamin harus diisi',
                  })}
                />
                <label
                  htmlFor='pria'
                  className='ml-2 flex cursor-pointer items-center gap-1.5 rounded-full bg-blue-500 px-3 py-1.5 text-xs font-medium text-white'
                >
                  Laki-laki <UserIcon className='h-4 w-4' />
                </label>
              </div>
              <div className='flex items-center'>
                <input
                  id='wanita'
                  name='gender'
                  type='radio'
                  value='wanita'
                  aria-describedby='gender-error'
                  className='h-4 w-4 cursor-pointer border-gray-300 bg-gray-100 text-gray-600 focus:ring-2'
                  {...register('gender', {
                    required: 'Jenis Kelamin harus diisi',
                  })}
                />
                <label
                  htmlFor='wanita'
                  className='ml-2 flex cursor-pointer items-center gap-1.5 rounded-full bg-pink-500 px-3 py-1.5 text-xs font-medium text-white'
                >
                  Perempuan <UserIcon className='h-4 w-4' />
                </label>
              </div>
            </div>
            <div id='gender-error' aria-live='polite' aria-atomic='true'>
              {errors.gender && (
                <p className='mt-2 text-sm text-red-500'>
                  {errors.gender.message}
                </p>
              )}
            </div>
          </div>
        </fieldset>

        {/* Kode */}
        <div className='mb-4'>
          <label htmlFor='alamat' className='mb-2 block text-sm font-medium'>
            Alamat
          </label>
          <div className='relative mt-2 rounded-md'>
            <div className='relative'>
              <input
                id='alamat'
                name='alamat'
                type='text'
                placeholder='Masukkan alamt'
                aria-describedby='alamat-error'
                className='peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500'
                {...register('alamat', { required: 'Alamat harus diisi' })}
              />
              <HomeIcon className='pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900' />
            </div>
            <div id='alamat-error' aria-live='polite' aria-atomic='true'>
              {errors.alamat && (
                <p className='mt-2 text-sm text-red-500'>
                  {errors.alamat.message}
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Kode */}
        <div className='mb-4'>
          <label
            htmlFor='no_telepon'
            className='mb-2 block text-sm font-medium'
          >
            No. Telepon
          </label>
          <div className='relative mt-2 rounded-md'>
            <div className='relative'>
              <input
                id='no_telepon'
                name='no_telepon'
                type='text'
                placeholder='Masukkan no telepon'
                aria-describedby='no_telepon-error'
                className='peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500'
                {...register('no_telepon', {
                  required: 'No telepon harus diisi',
                })}
              />
              <PhoneIcon className='pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900' />
            </div>
            <div id='no_telepon-error' aria-live='polite' aria-atomic='true'>
              {errors.no_telepon && (
                <p className='mt-2 text-sm text-red-500'>
                  {errors.no_telepon.message}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className='mt-6 flex justify-end gap-4'>
        <button
          onClick={() => router.push(`/divisi/${id}/kandidat`)}
          className='flex h-10 cursor-pointer items-center rounded-lg bg-white px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200'
        >
          Batal
        </button>
        <Button type='submit'>Tambah Kandidat</Button>
      </div>
    </form>
  )
}
