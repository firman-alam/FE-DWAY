"use client";

import {
  DocumentChartBarIcon,
  DocumentPlusIcon,
  KeyIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import { Button } from "../button";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useAddUserMutation } from "@/store/api/userApi";

export default function Form() {
  const router = useRouter();
  const [addUser] = useAddUserMutation();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();

  const onSubmit = (value) => {
    console.log(value);
    addUser(value)
      .unwrap()
      .then((payload) => {
        if (payload.status) {
          toast.success(payload.message);

          setTimeout(() => {
            router.push("/user");
          }, 1000);
        } else {
          toast.error(payload.message);
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <ToastContainer />
      <div className="rounded-md bg-gray-50 p-4 md:p-6">
        {/* Nama User */}
        <div className="mb-4">
          <label htmlFor="nama_user" className="mb-2 block text-sm font-medium">
            Nama User
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="nama_user"
                type="text"
                placeholder="Masukkan nama user"
                aria-describedby="nama_user-error"
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                {...register("nama_user", {
                  required: "Nama user harus diisi",
                })}
              />
              <DocumentPlusIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
            </div>
            <div id="nama_user-error" aria-live="polite" aria-atomic="true">
              {errors.nama_user && (
                <p className="mt-2 text-sm text-red-500">
                  {errors.nama_user.message}
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Password */}
        <div className="mb-4">
          <label
            className="mb-3 mt-5 block text-xs font-medium text-gray-900"
            htmlFor="password"
          >
            Password
          </label>
          <div className="relative">
            <input
              className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
              id="password"
              type="password"
              placeholder="Masukkan password"
              {...register("password", {
                required: "Password must be filled",
                minLength: 6,
              })}
            />
            <KeyIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
          </div>
          <div id="password-error" aria-live="polite" aria-atomic="true">
            {errors.password && (
              <p className="mt-2 text-sm text-red-500">
                {errors.password.message}
              </p>
            )}
          </div>
        </div>

        {/* Role */}
        <div className="mb-4">
          <label
            className="mb-3 mt-5 block text-xs font-medium text-gray-900"
            htmlFor="role"
          >
            Role
          </label>
          <div className="relative">
            <select
              id="role"
              className="peer block w-full cursor-pointer rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
              defaultValue="admin"
              aria-describedby="role-error"
              {...register("role", {
                required: "Role must be selected",
              })}
            >
              {optionsValue?.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.value}
                </option>
              ))}
            </select>
            <DocumentChartBarIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
          </div>
          <div id="role-error" aria-live="polite" aria-atomic="true">
            {errors.role && (
              <p className="mt-2 text-sm text-red-500">{errors.role.message}</p>
            )}
          </div>
        </div>
      </div>

      <div className="mt-6 flex justify-end gap-4">
        <Link
          href="/user"
          className="flex h-10 items-center rounded-lg bg-gray-50 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
        >
          Batal
        </Link>
        <Button type="submit">Tambah User</Button>
      </div>
    </form>
  );
}

const optionsValue = [
  { value: "admin", label: "admin" },
  { value: "user", label: "user" },
];
