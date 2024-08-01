import Logo from "./ui/logo"
import { lato } from "./ui/fonts"
import Link from "next/link"
import { ArrowRightIcon } from "@heroicons/react/24/outline"
import Image from "next/image"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col p-6">
      {/* <div className="flex h-20 shrink-0 items-end rounded-lg bg-gray-100 p-4 md:h-32">
        <Image
          src="/logo.png"
          alt="logo pt. bank jasa jakarta"
          width={100}
          height={100}
        />
      </div> */}
      <div className="mt-2 flex grow flex-col gap-4 md:flex-row">
        {/* <div className="flex items-center justify-center rounded-lg bg-jasa-red p-6 md:w-2/5 md:px-28 md:py-12">
          <Logo />
        </div> */}
        <div className="flex flex-col justify-center gap-6 rounded-lg bg-gray-100 px-6 py-10 md:w-full md:px-20">
          <p
            className={`${lato.className} text-xl text-gray-800 md:text-3xl md:leading-normal`}
          >
            <strong>Selamat Datang!</strong> <br />
            Aplikasi Sistem Penunjang Keputusan Menggunakan Metode SAW <br />
            <strong>PT. Bank Jasa Jakarta</strong>
          </p>
          <Link
            href="/login"
            className="flex items-center gap-5 self-start rounded-lg bg-jasa-red px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-red-400 md:text-base"
          >
            <span>Log in</span> <ArrowRightIcon className="w-5 md:w-6" />
          </Link>
        </div>
      </div>
    </main>
  )
}
