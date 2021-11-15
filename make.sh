#!/bin/sh

INSTALL_TRIGGER_FILE=node_modules/react/index.js
BUILD_TRIGGER_FILE=build/index.html

if [ ! -f "$INSTALL_TRIGGER_FILE" ]; then
  npm install || exit 255
  npm audit fix || exit 255
fi

if [ ! -f "$BUILD_TRIGGER_FILE" ]; then
  npm run build || exit 255
fi

#SOURCES=$(find src -name '*.js' -o -name '*.css' -o -name '*.jsx' -o -name '*.ttf')

