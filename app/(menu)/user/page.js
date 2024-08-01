import { CreateDivisi } from "@/app/ui/divisi/buttons";
import TableDivisi from "@/app/ui/divisi/table";
import { lato } from "@/app/ui/fonts";
import Search from "@/app/ui/search";

export default async function Page({ searchParams }) {
  const query = searchParams?.query || "";

  return (
    <main className="w-full p-4 rounded-md bg-gray-100">
      <div className="flex w-full items-center justify-between">
        <h1 className={`${lato.className} text-xl`}>Users</h1>
      </div>
    </main>
  );
}
