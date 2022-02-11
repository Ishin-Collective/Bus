ARG ALPINE_VERSION=3.14

FROM mcr.microsoft.com/vscode/devcontainers/base:0-alpine-${ALPINE_VERSION}

ARG NODE_VERSION=latest
ARG PNPM_VERSION=latest

COPY setup.sh /

RUN apk upgrade --no-cache -U
RUN apk add --no-cache xz

RUN chmod 755 ./setup.sh
RUN sh -c ./setup.sh $PNPM_VERSION $NODE_VERSION

RUN rm ./setup.sh