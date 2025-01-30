<template>
  <div>
    <Button @click="redirectToCheckout">Pay Now!</Button>
  </div>
</template>

<script setup lang="ts">
const redirectToCheckout = async () => {
  try {
    const { url, error } = await $fetch("/api/create-checkout-session", {
      method: "POST",
      body: {
        priceId: "price_1QjhGGIf933VdjBVnT5iU7xc",
      },
    });

    if (error) {
      console.error("Error creating checkout session:", error);
      return;
    }

    if (url) {
      window.location.href = url;
    }
  } catch (e) {
    console.error("Error redirecting to checkout:", e);
  }
};
</script>
