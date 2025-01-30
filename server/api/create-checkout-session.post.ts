import { defineEventHandler } from "h3";
import { useServerStripe } from "#stripe/server";

export default defineEventHandler(async (event) => {
  const stripe = await useServerStripe(event);

  try {
    const body = await readBody(event);

    const { priceId } = body;

    if (!priceId) {
      throw new Error("Price ID is required");
    }

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      line_items: [
        {
          price: priceId,
          quantity: 1,
        },
      ],
      success_url: "https://test.com/success",
      cancel_url: "https://test.com/error",
    });

    return { url: session.url };
  } catch (e) {
    return { error: e.message };
  }
});
