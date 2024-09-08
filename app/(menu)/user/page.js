import { lato } from "@/app/ui/fonts";
import Search from "@/app/ui/search";
import { AddUser } from "@/app/ui/user/buttons";
import TableUser from "@/app/ui/user/table";

export default async function Page({ searchParams }) {
  const query = searchParams?.query || "";

  return (
    <main className="w-full p-4 rounded-md bg-gray-100">
      <div className="flex w-full items-center justify-between">
        <h1 className={`${lato.className} text-xl`}>Users</h1>
      </div>
      <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
        <Search placeholder="Cari user..." />
        <AddUser />
      </div>

      <TableUser search={query} />
    </main>
  );
}
