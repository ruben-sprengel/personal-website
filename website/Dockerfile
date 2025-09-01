FROM node:22-alpine AS builder

WORKDIR /app

COPY package*.json ./

RUN npm ci

COPY . .

RUN npm run check
RUN npm run build

FROM node:22-alpine

WORKDIR /app

ENV NODE_ENV=production

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 sveltekit

COPY --from=builder /app/package*.json ./

RUN npm ci --omit=dev

COPY --from=builder --chown=sveltekit:nodejs /app/build ./build

RUN chown -R sveltekit:nodejs /app
USER sveltekit

ENV HOST=0.0.0.0
EXPOSE 3000
CMD [ "node", "build" ]