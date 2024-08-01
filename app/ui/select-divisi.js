'use client'

import { useGetAllDivisiQuery } from '@/store/api/divisiApi'
import { lato } from './fonts'

export default function SelectDivisi() {
  const { data } = useGetAllDivisiQuery({})

  return (
    <div className='relative flex flex-col flex-1 gap-2 flex-shrink-0'>
      <h1 className={`${lato.className} text-lg`}>Divisi</h1>
      <select
        id='customer'
        name='customerId'
        className='peer block w-full cursor-pointer rounded-md border border-gray-200  py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500'
        defaultValue={1}
        aria-describedby='customer-error'
      >
        {data?.map((divisi) => (
          <option key={divisi.id_divisi} value={divisi.id_divisi}>
            {divisi.nama_divisi}
          </option>
        ))}
      </select>
    </div>
  )
}
