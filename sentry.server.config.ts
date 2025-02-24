import * as Sentry from "@sentry/nuxt";

Sentry.init({
  dsn: "https://e3272b70951c8ebea47e80c08138f3fd@o4507658089267200.ingest.de.sentry.io/4508875653840976",

  // We recommend adjusting this value in production, or using tracesSampler
  // for finer control
  tracesSampleRate: 1.0,

  // Setting this option to true will print useful information to the console while you're setting up Sentry.
  debug: false,
});
