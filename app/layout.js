import '@/app/ui/globals.css'
import { lato } from './ui/fonts'
import { Providers } from '@/store/provider'

export const metadata = {
  title: 'Sistem Penunjang Keputusan PT. Bank Jasa Jakarta',
  description: 'Menggunakan metode SAW',
}

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={lato.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
