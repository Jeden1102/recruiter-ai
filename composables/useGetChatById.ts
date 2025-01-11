type Params = {
  id: string;
};

export default async function useGetChatById({ id }: Params) {
  try {
    const { data, error } = await useFetch(`/api/chat/${id}`);

    if (error.value) {
      throw new Error(error.value.message || "Failed to fetch chat");
    }

    return data.value;
  } catch (err) {
    console.error("Error fetching chat:", err);
    throw new Error(err instanceof Error ? err.message : "Unknown error");
  }
}
