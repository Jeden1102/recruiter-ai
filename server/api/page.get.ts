import * as cheerio from "cheerio";

export default defineEventHandler(async (event) => {
  const query = getQuery(event);

  if (!query.uri) {
    throw createError({
      statusCode: 400,
      statusMessage: "Missing uri parameter",
    });
  }

  try {
    const pageContent = await $fetch(query.uri as string);
    const $ = cheerio.load(pageContent as string);
    return {
      content: $("body")
        .find("*")
        .not("nav, footer, script, style, link, meta")
        .contents()
        .filter(function () {
          return this.nodeType === 3 && $(this).text().trim().length > 0;
        })
        .text(),
    };
  } catch (error) {
    throw createError({
      statusCode: 400,
      statusMessage: "There was an issue fetching the page",
    });
  }
});
