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
        categories: categories,
        config: {
          ...rest
        },
        user: {
          connectOrCreate: {
            where: {
              id: userId
            },
            create: {
              id: userId,
              name: author,
              avatar: avatar,
            }
          }
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
