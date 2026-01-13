import { NextServer } from "./api";
import type { User, UpdateUserPayload } from "@/types/user";

export async function getCurrentUser(): Promise<User> {
  const { data } = await NextServer.get<User>("/users/current");
  return data;
}

export async function updateUser(userData: UpdateUserPayload): Promise<User> {
  const { data } = await NextServer.patch<User>("/users/current", userData);
  return data;
}

export async function uploadAvatar(file: File): Promise<{ avatarURL: string }> {
  const formData = new FormData();
  formData.append("avatar", file);

  const { data } = await NextServer.patch<{ avatarURL: string }>(
    "/users/avatar",
    formData,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
  );

  return data;
}
