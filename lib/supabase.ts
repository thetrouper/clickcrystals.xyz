'use server'

import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.SUPABASE_URL || ""; // required
const supabaseKey = process.env.SUPABASE_KEY || ""; // required
const supabase = createClient(supabaseUrl, supabaseKey);

export async function saveCode(code: string) {
  if (code.trim() === "") {
    return { id: null, error: "The snippet cannot be empty is required", success: false };
  }

  const { data, error } = await supabase
    .from("codes")
    .insert([{ code: code }])
    .select("id")
    .single();

  if (error) {
    return  { id: null, error: "There was an error while saving your snippet", success: false };
  }

  return { id: data?.id ?? null, error: null, success: data?.id ? true : false };
}

export async function loadCode(id: string) {
  const { data, error } = await supabase
    .from("codes")
    .select("code")
    .eq("id", id)
    .single();

  if (error?.code === "PGRST116") {
    return {
      code: null,
      error: `The requested snippet ${id} doesn't exist`,
      success: false,
    };
  } else {
    if (error) {
      return { code: null, error: `There was an error while loading snippet ${id}`, success: false };
    }
  }

  return { code: data.code, error: null, success: true };
}
