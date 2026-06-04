# TAO Passport

TAO Passport is a universal reputation and achievement system for the Bittensor TAO ecosystem. It turns a plain wallet address into a readable profile that combines on-chain history, validator and miner activity, subnet participation, governance, GitTensor contributions, and community signals.

## Why It Exists

A wallet address alone does not explain whether the holder is an experienced validator, a long-term miner, a respected developer, or a governance participant. TAO Passport gives every wallet a portable reputation profile so users can discover trusted contributors and reduce unknown-counterparty risk.

## Core Features

- **Wallet Passport**: level, trust score, years active, and short wallet summary.
- **Achievement System**: validator, miner, governance, GitTensor, subnet, and community badges.
- **Reputation Model**: weighted transparent signals from chain data and ecosystem activity.
- **Timeline**: historical events that show how a wallet earned reputation.
- **Leaderboard**: discovery surface for high-signal TAO ecosystem contributors.

## Tech Stack

- **Frontend**: React, TypeScript, TailwindCSS, Vite
- **Backend**: Node.js, Express, TypeScript
- **Database**: PostgreSQL
- **Blockchain Data**: Bittensor API adapters and chain query service layer
- **Hosting Targets**: Vercel for frontend, Railway or Render for backend

## Repository Structure

```text
tao-passport/
├── README.md
├── CONTRIBUTING.md
├── contributing.md
├── docker-compose.yml
├── docs/
├── frontend/
├── backend/
├── packages/
├── scripts/
├── database/
└── .github/
```

## Quick Start

```bash
cp .env.example .env
npm install
npm run build
npm run dev
```

Start PostgreSQL locally when database-backed development is needed:

```bash
docker compose up -d postgres
```

Frontend: `http://localhost:5173`
Backend: `http://localhost:4000`
Health check: `http://localhost:4000/health`

## API Endpoints

- `GET /health`
- `GET /api/passport/sample`
- `GET /api/passport/:walletAddress`
- `GET /api/achievements`
- `GET /api/reputation/signals`
- `GET /api/reputation/leaderboard`

## Development Status

This is an initial GitTensor submission scaffold. The current implementation includes a working full-stack shell, demo passport data, database schema, service boundaries, and documentation. Production work should replace demo chain data with live Bittensor queries and persistent repository implementations.

## License

MIT
