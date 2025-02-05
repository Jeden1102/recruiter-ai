export default async function useGetUserChats() {
  try {
    const { data, error } = await useFetch("/api/chats/user");

    if (error.value) {
      throw new Error(error.value.message || "Failed to fetch chats");
    }

    return data.value;
  } catch (error: any) {
    throw createError({
      statusCode: error?.statusCode,
      statusMessage: error?.statusMessage,
    });
  }
}
