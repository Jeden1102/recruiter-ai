export default async function useGetUserChats() {
  try {
    const { data, error } = await useFetch("/api/chats/user");

    if (error.value) {
      throw new Error(error.value.message || "Failed to fetch chats");
    }

    return data.value;
  } catch (err) {
    console.error("Error fetching chat:", err);
    throw new Error(err instanceof Error ? err.message : "Unknown error");
  }
}
