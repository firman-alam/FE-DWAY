"use client";

import { ArrowLeftEndOnRectangleIcon } from "@heroicons/react/24/outline";
import Logo from "./logo";
import Link from "next/link";
import NavLinks from "./nav-links";
import Cookies from "js-cookie";

export default function SideNav() {
  const handleLogout = () => {
    Cookies.remove("token");
    Cookies.remove("role");
  };

  return (
    <div className="flex h-full flex-col px-3 py-4 md:px-2">
      <Link
        className="mb-2 flex h-28 items-end justify-start rounded-md bg-jasa-red p-4 md:h-40"
        href="/"
      >
        <div className="w-full text-white md:w-full">
          <Logo />
        </div>
      </Link>
      <div className="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">
        <NavLinks />
        <div className="hidden h-auto w-full grow rounded-md bg-gray-100 md:block"></div>
        <form>
          <button
            onClick={handleLogout}
            className="flex h-[48px] w-full grow items-center justify-center gap-2 rounded-md bg-gray-100 p-3 text-sm font-medium hover:bg-red-100 hover:text-jasa-red md:flex-none md:justify-start md:p-2 md:px-3"
          >
            <ArrowLeftEndOnRectangleIcon className="w-6" />
            <div className="hidden md:block">Keluar</div>
          </button>
        </form>
      </div>
    </div>
  );
}
