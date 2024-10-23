'use server';

import prisma from '@/lib/db';
import { revalidatePath } from 'next/cache';

type ConfigID = number;

export async function deleteConfig(configId: ConfigID) {
  if (!configId) {
    throw new Error('Config ID is required');
  }

  try {
    await prisma.config.delete({
      where: {
        id: configId,
      },
    });

    revalidatePath('/configs');

    return true;
  } catch (error) {
    console.error('Error deleting config:', error);
    return false;
  }
}
