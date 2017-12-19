# babel-typescript-starter

This is an example app for using Babel 7 and the [TypeScript preset](https://www.npmjs.com/package/@babel/preset-typescript) to run a server-side app.

## how to use

First, install dependencies with `yarn`.

Using TypeScript in Babel means your builds will pass even with type failures, so it's important to run `tsc` in the background to keep track of failures.

As an example of one way to do this, this project uses [concurrently](https://github.com/kimmobrunfeldt/concurrently) to run `tsc` (in typecheck mode) and `babel-node` (via `nodemon`) side by side when you run `yarn start`.

## production

A production build can be produced with `yarn build`. This will first run `tsc` to typecheck and then transpile into `./dist`. The resulting build can be served with `yarn serve`, or:

```
node --require source-map-support/register dist/index.js
```
