'use server'

import prisma from "@/lib/db";
import { revalidatePath } from "next/cache";

export async function saveConfig(configData: {
  title: string;
  description: string;
  author: string;
  avatar: string;
  categories: string[];
  [key: string]: any;
}) {
  try {
    await prisma.config.create({
      data: {
        title: configData.title,
        description: configData.description,
        author: configData.author,
        avatar: configData.avatar,
        categories: configData.categories,
        config: configData,
      },
    });
    revalidatePath("/configs")
    return true;
  } catch (error) {
    return false;
  }
}
