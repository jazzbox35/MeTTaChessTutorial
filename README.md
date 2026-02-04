# MeTTa Chess Tutorial (Frontend)

This repo hosts a Next.js frontend for a MeTTa-based chess tutorial. The app proxies API calls through Next.js rewrites (see `frontend/next.config.mjs`) to the MettaWamJam Prolog MeTTa backend server PeTTa. This server needs to be started independently.

Required:  Node.js and pnpm

Start Server Development:
1) `cd frontend`
2) `pnpm install`
3) `pnpm dev` (starts front end) — ensure your backend is reachable at the rewrite destination.

Start Server Production:
1) `cd frontend`
2) `pnpm install`
3) `pnpm build`
3) `pnpm start` (starts front end) — ensure your backend is reachable at the rewrite destination.

Notes:
- API base is `/api` (set in `frontend/lib/constants.ts`), with rewrites to the backend MettaWamJam server location defined in `frontend/next.config.mjs`. 
- User's browser retains all atomspace related state information. MettaWamJam is called using the metta_stateless transaction and does not retain state.
