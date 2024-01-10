"use server";

import { PrismaClient } from "@prisma/client";
import { revalidatePath } from "next/cache";

const prisma = new PrismaClient();

export const updateHelloWorld = async (e: FormData) => {
  const title = e.get("title")?.toString();
  const description = e.get("description")?.toString();
  const address = e.get("address")?.toString();
  const city = e.get("city")?.toString();

  // use z to validate
  if (!title || !description || !city || !address) return;

  await prisma.main.create({
    data: {
      title,
      description,
      city,
      address,
    },
  });

  revalidatePath("/about");
};
