// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: false },
  runtimeConfig: {
    authSecret: process.env.AUTH_SECRET,
    auth: {
      github: {
        clientId: process.env.GITHUB_CLIENT_ID,
        clientSecret: process.env.GITHUB_CLIENT_SECRET,
      },
      linkedin: {
        clientId: process.env.LINKEDIN_CLIENT_ID,
        clientSecret: process.env.LINKEDIN_CLIENT_SECRET,
      },
    },
    public: {
      APP_BASE_URI: process.env.NUXT_PUBLIC_APP_BASE_URI,
    },
  },
  modules: [
    "nuxt-chatgpt",
    "@nuxtjs/tailwindcss",
    "shadcn-nuxt",
    "@nuxt/icon",
    "@nuxt/image",
    "@nuxtjs/google-fonts",
    "@nuxtjs/i18n",
    "@sidebase/nuxt-auth",
    "@stefanobartoletti/nuxt-social-share",
    "@vite-pwa/nuxt",
  ],
  pwa: {
    manifest: {
      name: "Recruiter AI",
      short_name: "Recruiter AI",
      description: "Recruiter AI",
      icons: [
        {
          src: "icons/icon_64x64.png",
          sizes: "64x64",
          type: "image/png",
        },
        {
          src: "icons/icon_144x144.png",
          sizes: "144x144",
          type: "image/png",
        },
        {
          src: "icons/icon_192x192.png",
          sizes: "192x192",
          type: "image/png",
        },
        {
          src: "icons/icon_512x512.png",
          sizes: "512x512",
          type: "image/png",
        },
      ],
    },
    workbox: {
      navigateFallback: "/",
    },
    devOptions: {
      enabled: true,
      type: "module",
    },
  },
  auth: {
    isEnabled: true,
    disableServerSideAuth: false,
    originEnvKey: "AUTH_ORIGIN",
    baseURL: process.env.BASE_URL,
    provider: {
      type: "authjs",
      trustHost: false,
      defaultProvider: "github",
      addDefaultCallbackUrl: true,
    },
    sessionRefresh: {
      enablePeriodically: true,
      enableOnWindowFocus: true,
    },
  },
  i18n: {
    vueI18n: "./i18n.config.ts",
    locales: [
      {
        code: "en",
        name: "English",
      },
      {
        code: "pl",
        name: "Polski",
      },
    ],
    defaultLocale: "en",
  },
  chatgpt: {
    apiKey: process.env.OPENAI_API_KEY,
  },
  shadcn: {
    /**
     * Prefix for all the imported component
     */
    prefix: "",
    /**
     * Directory that the component lives in.
     * @default "./components/ui"
     */
    componentDir: "./components/ui",
  },

  googleFonts: {
    families: {
      Urbanist: "100..700",
      Lato: [100, 300, 400, 700],
      Ubuntu: [300, 400, 500, 700],
    },
  },
});
