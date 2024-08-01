"use client";

import { useForm } from "react-hook-form";
import { Button } from "./button";
import { lato } from "./fonts";
import {
  ArrowRightEndOnRectangleIcon,
  AtSymbolIcon,
  KeyIcon,
} from "@heroicons/react/24/outline";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSignInMutation } from "@/store/api/authApi";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";

export default function LoginForm() {
  const [login] = useSignInMutation();
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (value) => {
    login(value)
      .unwrap()
      .then((payload) => {
        if (payload.status) {
          toast.success(payload.message);
          Cookies.set("token", payload.token);
          setTimeout(() => {
            router.push("/divisi");
          }, 2000);
        } else {
          toast.error(payload.message);
        }
      })
      .catch((err) => {
        toast.error(err.data.message);
        console.log(err);
      });
  };

  return (
    <form className="space-y-3">
      <ToastContainer />
      <div className="flex-1 rounded-lg bg-gray-200 px-6 pb-4 pt-8">
        <h1 className={`${lato.className} mb-3 text-xl`}>Selamat datang!</h1>
        <div className="w-full">
          <div>
            <label
              className="mb-3 mt-5 block text-xs font-medium text-gray-900"
              htmlFor="username"
            >
              Username
            </label>
            <div className="relative">
              <input
                className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                id="username"
                type="text"
                placeholder="Masukkan username"
                {...register("username", {
                  required: "Username must be filled",
                })}
              />
              <AtSymbolIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
            </div>
            <div id="username-error" aria-live="polite" aria-atomic="true">
              {errors.username && (
                <p className="mt-2 text-sm text-red-500">
                  {errors.username.message}
                </p>
              )}
            </div>
          </div>
          <div className="mt-4">
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
        </div>
        <Button
          className="mt-4 w-full bg-jasa-red"
          onClick={handleSubmit(onSubmit)}
        >
          Masuk
          <ArrowRightEndOnRectangleIcon className="ml-auto h-5 w-5 text-gray-50" />
        </Button>
        <div
          className="flex h-8 items-end space-x-1"
          aria-live="polite"
          aria-atomic="true"
        ></div>
      </div>
    </form>
  );
}
