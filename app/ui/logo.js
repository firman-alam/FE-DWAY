import { BuildingLibraryIcon } from "@heroicons/react/24/outline"
import { lato } from "./fonts"
import Image from "next/image"

export default function Logo() {
  return (
    <div
      className={`${lato.className} flex flex-col w-full items-start leading-none text-white`}
    >
      <BuildingLibraryIcon className="h-10 w-10" />
      <p className="text-[20px]">PT. Bank Jasa Jakarta</p>
    </div>
  )
}
