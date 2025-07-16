FROM node:22-alpine AS base

FROM base AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app

RUN corepack enable pnpm

COPY package.json pnpm-lock.yaml* ./

RUN pnpm install --frozen-lockfile

FROM base AS builder
WORKDIR /app

RUN corepack enable pnpm

COPY --from=deps /app/node_modules ./node_modules

COPY . .

RUN pnpm build

FROM base AS runner
WORKDIR /app
ENV NODE_ENV=production


COPY --from=builder /app/public ./public

RUN mkdir .next

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

RUN chown nextjs:nodejs .next

COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE $PORT
CMD ["node", "server.js"]