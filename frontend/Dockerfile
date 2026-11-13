FROM node:26-slim

ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN npm install --global pnpm@12.18.0

WORKDIR /app
COPY . .

RUN pnpm install --frozen-lockfile
RUN pnpm build

CMD ["node", "node_modules/next/dist/bin/next", "start"]

