'use server'

import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';
import prisma from './db';

function generateRandomString(length: number): string {
  const characters = '0aAbBc1CdDeE2fFgGh3HiIjJ4kKlLm5MnNoO6pPqQr7RsStT8uUvVw9WxXyYz0';
  let result = '';
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
}

export async function saveCode(code: string) {
  if (code.trim() === "") {
    return { id: null, error: "The snippet cannot be empty", success: false };
  }

  const id = generateRandomString(12);

  try {
    const newCode = await prisma.script.create({
      data: {
        id: id,
        script: code,
      },
      select: {
        id: true,
      }
    });

    return { id: newCode.id, error: null, success: true };
  } catch (error) {
    console.log(error);
    return { id: null, error: "There was an error while saving your snippet", success: false };
  }
}

export async function loadCode(id: string) {
  try {
    const codeData = await prisma.script.findUnique({
      where: {
        id: id,
      },
      select: {
        script: true,
      }
    });

    if (!codeData) {
      return {
        code: null,
        error: `The requested snippet ${id} doesn't exist`,
        success: false,
        errorCode: 404,
      };
    }

    return { code: codeData.script, error: null, success: true };

  } catch (error) {
    if ((error as PrismaClientKnownRequestError).code === 'P2025') {
      return {
        code: null,
        error: `The requested snippet ${id} doesn't exist`,
        success: false,
        errorCode: 404,
      };
    }
    return { code: null, error: `There was an error while loading snippet ${id}`, success: false, errorCode: 500 };
  }
}
