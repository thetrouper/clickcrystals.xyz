'use server'

import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://uqivuaypwdteeyyuxans.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVxaXZ1YXlwd2R0ZWV5eXV4YW5zIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjQwNTE5NTEsImV4cCI6MjAzOTYyNzk1MX0.wSX_PJftG5IPqvWZye00k3Earw2n1RfyGfES-T83ZAY";
const supabase = createClient(supabaseUrl, supabaseKey);

export async function saveCode(code: string) {
  if (code.trim() === "") {
    return { id: null, error: "Code is required", success: false };
  }

  const { data, error } = await supabase
    .from("codes")
    .insert([{ code: code }])
    .select("id")
    .single();

  if (error) {
    console.error("Error saving code:", error.message);
    return { id: null, error: "Error saving code", success: false };
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
    return { code: null, error: "Not found", success: false };
  } else {
    if (error) {
      console.error("Error loading code: ", error.message);
      return { code: null, error: "Error loading code", success: false };
    }
  }

  if (!data) {
    return { code: null, error: "Not found", success: false };
  }

  return { code: data.code, error: null, success: true };
}
