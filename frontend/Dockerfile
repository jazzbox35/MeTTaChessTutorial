FROM node:20-slim

ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable && corepack prepare pnpm@10.23.0 --activate

WORKDIR /app
COPY . .

RUN pnpm install
RUN pnpm build

CMD ["node", "node_modules/next/dist/bin/next", "start"]

