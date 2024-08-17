'use server';

export const handleSubmit = async (formData: FormData) => {
  const title = (formData.get("title") as string)?.trim();
  const author = (formData.get("author") as string)?.trim();
  const script = (formData.get("script") as string)?.trim();

  if (!title || !author || !script) {
    return {
      status: "error",
      message: "All fields are required and cannot be empty.",
    };
  }

  try {
    const response = await fetch("https://api.tutla.net/cc/scripts/post.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
        author,
        script,
      }),
    });

    const data = await response.json();

    if (data.success) {
      return {
        status: "success",
        message: "Form submitted successfully.",
      };
    } else {
      return {
        status: "error",
        message: data.message || "An error occurred while processing the form.",
      };
    }
  } catch (error) {
    return {
      status: "error",
      message: "An error occurred while processing the form.",
    };
  }
};
