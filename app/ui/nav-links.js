"use client";

import {
  BuildingOfficeIcon,
  ChartBarIcon,
  DocumentDuplicateIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";
import clsx from "clsx";
import Cookies from "js-cookie";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { name: "Divisi", href: "/divisi", icon: BuildingOfficeIcon },
  {
    name: "Nilai",
    href: "/nilai",
    icon: ChartBarIcon,
  },
  { name: "Laporan", href: "/laporan", icon: DocumentDuplicateIcon },
  { name: "User", href: "/user", icon: UserGroupIcon },
];

export default function NavLinks() {
  const role = Cookies.get("role");
  const pathname = usePathname();

  const filteredLinks =
    role == "admin" ? links : links.filter((link) => link.name !== "User");

  return (
    <>
      {filteredLinks.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              "flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-100 p-3 text-sm font-medium hover:bg-red-100 hover:text-jasa-red md:flex-none md:justify-start md:p-2 md:px-3",
              {
                "bg-red-100 text-jasa-red": pathname === link.href,
              }
            )}
          >
            <LinkIcon className="w-6" />
            <p className="hidden md:block">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}
