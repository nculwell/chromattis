#!/bin/sh

INSTALL_TRIGGER_FILE=node_modules/react/index.js
BUILT_MARKER_FILE=build/.built
BUILD_TRIGGER_FILE=build/index.html

if [ ! -f "$INSTALL_TRIGGER_FILE" ]; then
  echo INSTALLING
  npm install || exit 255
  npm audit fix || exit 255
fi

RUN_BUILD=0

# Build if we've never built before
if [ ! -f "$BUILD_TRIGGER_FILE" ]; then
  RUN_BUILD=1
fi

# Build if sources have been updated since last build
if [ "$RUN_BUILD" != 1 ]; then
  #SOURCES=$(find src -name '*.js' -o -name '*.css' -o -name '*.jsx' -o -name '*.ttf')
  SRC_LAST_MOD=$(find src -type f | xargs -n1 stat -c '%Y' | sort -n | tail -n1)
  BUILT_LAST_MOD=$(stat -c %Y "$BUILT_MARKER_FILE")
  if [ "$SRC_LAST_MOD" '>' "$BUILT_LAST_MOD" ]; then
    RUN_BUILD=1
  fi
fi


if [ "$RUN_BUILD" = 1 ]; then
  echo RUNNING THE BUILD
  npm run build || exit 255
  touch build/.built
fi

#SOURCES=$(find src -name '*.js' -o -name '*.css' -o -name '*.jsx' -o -name '*.ttf')

if [ "$1" = "serve" ]; then
  echo STARTING TEST SERVER
  lighttpd/lighttpd-serve
fi

