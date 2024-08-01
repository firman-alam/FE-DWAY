import LoginForm from '../../ui/login-form'
import Logo from '../../ui/logo'

export default function LoginPage() {
  return (
    <main className='flex items-center justify-center md:h-screen '>
      <div className='relative mx-auto flex w-full max-w-[400px] flex-col space-y-2.5 p-4 md:-mt-32'>
        <div className='flex h-24 w-full items-end rounded-lg bg-jasa-red p-3 md:h-36'>
          <div className='w-96 text-white'>
            <Logo />
          </div>
        </div>
        <LoginForm />
      </div>
    </main>
  )
}
