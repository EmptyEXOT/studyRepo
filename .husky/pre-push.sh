#!/usr/bin/env sh
. "$(dirname -- "$0")/_/husky.sh"

npm run lint:ts
npm run lint:scss
npm run test:unit
npm run storybook:build
npm run test:ui:ci
