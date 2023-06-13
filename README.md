# Sentry bug:

1. `yarn`
2. `yarn dev`
3. Load http://localhost:3000
4. Modify Test.tsx and observe that it doesn't hot reload
5. Comment out withSentryConfig from `next.config.js`
6. Observe that hot reloading now works
