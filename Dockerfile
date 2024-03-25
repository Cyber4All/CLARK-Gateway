# syntax=docker/dockerfile:1

# ----------------------------------------------------------------
# Base Stage
#
# Prepares production layer
# ----------------------------------------------------------------
FROM node:16-alpine3.16@sha256:15dd66f723aab8b367abc7ac6ed25594ca4653f2ce49ad1505bfbe740ad5190e as base

WORKDIR /opt/app

RUN apk --no-cache add dumb-init>1.2.5-r2

ENV NODE_ENV=production

COPY package*.json /opt/app/

RUN npm cache clean --force \
    && npm ci --ignore-scripts --omit=dev

# ----------------------------------------------------------------
# Dev Stage
#
# Target for docker-compose development environments
# ----------------------------------------------------------------
FROM base as dev

ENV NODE_ENV=development

COPY nodemon.json tsconfig.json ./

RUN npm i -g nodemon \
    && npm i --ignore-scripts --only=development

HEALTHCHECK --start-period=10s --retries=5 --timeout=10s \
    CMD curl --fail http://localhost:3001 || exit 1  

CMD ["dumb-init", "nodemon"]

# ----------------------------------------------------------------
# Source Stage
#
# Builds the dist directory
# ----------------------------------------------------------------
FROM dev as source

COPY . /opt/app/

RUN npm run build

# ----------------------------------------------------------------
# Prod Stage
#
# Default stage
# ----------------------------------------------------------------
FROM base as prod

LABEL org.opencontainers.image.authors="chirstopher.wagner@secured.team"
LABEL org.opencontainers.image.title="CLARK-Gateway"

COPY --from=source --chown=node:node /opt/app/dist /opt/app/dist

USER node

ENTRYPOINT [ "dumb-init" ]
CMD ["node", "-r", "/opt/app/dist/app.js"]

EXPOSE 3001
