"use server";

import { cookies } from "next/headers";

export async function storeToken({ token }) {
  cookies().set({
    name: "token",
    value: token,
    httpOnly: true,
    sameSite: "strict",
    secure: true,
  });
}
