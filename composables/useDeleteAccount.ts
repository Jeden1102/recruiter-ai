export default async function ({ password }: { password: string }) {
  try {
    const res = await $fetch("/api/user/delete", {
      method: "POST",
      body: { password },
    });

    return res.success;
  } catch (err: any) {
    throw createError({
      statusCode: err?.statusCode,
      statusMessage: err?.statusMessage,
    });
  }
}
