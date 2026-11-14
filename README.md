# MeTTa Chess Tutorial 

To run the MeTTa Chess Tutorial on your machine follow these steps:

1) Install Docker if not yet installed
2) `git clone https://github.com/trueagi-io/MeTTaChessTutorial.git`
3) `cd MeTTaChessTutorial`
4) `docker compose up -d`
5) Start tutorial by opening your browser and enter `http://localhost:3000/`
6) When you are done, `docker compose stop` 

## Frontend development

Use Node.js 26 LTS and pnpm 12.18.0 (also recorded in `frontend/package.json`).

```sh
cd frontend
pnpm install --frozen-lockfile
pnpm dev
```

Run `pnpm typecheck`, `pnpm build`, and `pnpm lint` to validate changes.
`pnpm dev` and `pnpm build` copy the pinned MathJax browser components and fonts
into the generated `frontend/public/mathjax` directory for local serving.
TypeScript 7 runs the standalone type check; the TypeScript 6 compatibility API
is installed alongside it for ESLint and other compiler API consumers.
