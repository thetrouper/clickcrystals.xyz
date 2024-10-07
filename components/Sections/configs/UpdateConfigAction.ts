'use server';

import prisma from '@/lib/db';
import { revalidatePath } from 'next/cache';
import { Config } from './ConfigCard';

type ConfigID = number;

type UpdatedConfig = Omit<Config, 'user' | 'id'> & { userId: number };

export async function updateConfig(
  configId: ConfigID,
  updatedData: UpdatedConfig,
) {
  const { title, description, categories, config, userId } = updatedData;
  if (!configId) {
    throw new Error('Config ID is required');
  }

  try {
    const existingConfig = await prisma.config.findUnique({
      where: { id: configId },
    });

    if (!existingConfig) {
      throw new Error('Config not found');
    }

    await prisma.config.update({
      where: {
        id: configId,
      },
      data: {
        title: title,
        description: description,
        categories: categories,
        config: {
          ...(typeof config === 'object' && config !== null ? config : {}),
        },
        user: {
          connect: {
            id: userId,
          },
        },
      },
    });

    revalidatePath('/configs');

    return true;
  } catch (error) {
    console.error('Error updating config:', error);
    return false;
  }
}
