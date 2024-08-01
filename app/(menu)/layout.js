import SideNav from '@/app/ui/sidenav'

export default function Layout({ children }) {
  return (
    <div className='flex h-screen flex-col md:flex-row md:overflow-hidden'>
      <div className='w-full flex-none md:w-72'>
        <SideNav />
      </div>
      <div className='flex-grow p-6 md:overflow-y-auto md:p-4'>{children}</div>
    </div>
  )
}
