'use server'

import prisma from "@/lib/db";
import { revalidatePath } from "next/cache";

export async function saveConfig(configData: {
  title: string;
  description: string;
  author: string;
  avatar: string;
  categories: string[];
  userId: number;
  [key: string]: any;
}) {
  try {
    const { title, description, author, avatar, categories, userId, ...rest } = configData;
    await prisma.config.create({
      data: {
        title: title,
        description: description,
        author: author,
        avatar: avatar,
        categories: categories,
        userId: parseInt(userId.toString()),
        config: {
          ...rest
        }
      },
    });
    revalidatePath("/configs");
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
}
