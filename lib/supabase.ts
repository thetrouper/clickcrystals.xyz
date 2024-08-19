'use server'

import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://uqivuaypwdteeyyuxans.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVxaXZ1YXlwd2R0ZWV5eXV4YW5zIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjQwNTE5NTEsImV4cCI6MjAzOTYyNzk1MX0.wSX_PJftG5IPqvWZye00k3Earw2n1RfyGfES-T83ZAY";
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
