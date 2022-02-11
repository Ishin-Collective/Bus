#!/bin/bash

if [ "${PNPM_VERSION}" != "latest" ]; then \
    PNPM_INSTALL_URL="https://github.com/pnpm/pnpm/releases/download/v${PNPM_VERSION}/pnpm-linuxstatic-x64"; else \
    PNPM_INSTALL_URL=`curl -s https://api.github.com/repos/pnpm/pnpm/releases/latest | grep "pnpm-linuxstatic-x64" | grep "browser_download_url" | cut -d : -f 2,3 | tr -d '"'`; fi

curl -fsSL $PNPM_INSTALL_URL -o /bin/pnpm && chmod +x /bin/pnpm

if [ "${NODE_VERSION}" == "latest" ]; then \
    export NODE_VERSION=`curl -s https://unofficial-builds.nodejs.org/download/release/index.json | jq --compact-output '[.[0].version]' | sed 's/"//g' | sed s/[[v]//g | sed s/[]]//g`; fi

curl -fsSLO --compressed "https://unofficial-builds.nodejs.org/download/release/v${NODE_VERSION}/node-v${NODE_VERSION}-linux-x64-musl.tar.xz"
tar -xJf "node-v${NODE_VERSION}-linux-x64-musl.tar.xz" -C /usr/local --strip-components=1 --no-same-owner && ln -s /usr/local/bin/node /usr/local/bin/nodejs

rm /usr/local/bin/npm && rm /usr/local/bin/npx && rm /node-v${NODE_VERSION}-linux-x64-musl.tar.xz