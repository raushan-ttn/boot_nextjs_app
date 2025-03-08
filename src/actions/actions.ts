"use server";

import { revalidateTag } from "next/cache";

export async function revalidateTeachers() {
  revalidateTag("teachers"); // Purge cache for "teachers" tag
}
