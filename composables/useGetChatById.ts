type Params = {
  id: string;
};

export default async function useGetChatById({ id }: Params) {
  try {
    const { data, error } = await useFetch(`/api/chat/${id}`);

    if (error.value) {
      throw createError({
        statusCode: error.value.statusCode || 404,
        statusMessage: error.value.statusMessage || "Chat not found",
      });
    }

    return data.value;
  } catch (err: any) {
    throw createError({
      statusCode: err?.statusCode,
      statusMessage: err?.statusMessage,
    });
  }
}
