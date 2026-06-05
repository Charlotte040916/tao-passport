# Contributing to TAO Passport

Thanks for helping build TAO Passport. This project values clear technical contributions that improve trust, transparency, and usefulness for the Bittensor ecosystem.

## Contribution Areas

- Bittensor chain query integrations
- GitTensor contribution indexing
- Reputation scoring models
- Achievement definitions
- Wallet profile UI and accessibility
- PostgreSQL schema and migration improvements
- Tests, docs, deployment automation, and developer tooling

## Local Development

```bash
cp .env.example .env
npm install
docker compose up -d postgres
npm run dev
```

Run checks before opening a pull request:

```bash
npm run build
npm run lint
npm run test
```

## Pull Request Guidelines

1. Keep changes focused and explain the problem being solved.
2. Add or update tests when changing scoring, data mapping, or API behavior.
3. Update docs when changing architecture, setup, or public APIs.
4. Avoid unrelated formatting churn.
5. Never commit secrets, private keys, seed phrases, or production database URLs.

## Reputation Model Standards

Reputation changes must be explainable. Any new score should document:

- signal source
- weight
- update frequency
- abuse resistance assumptions
- reason the signal improves wallet trust

## Code of Conduct

Be direct, respectful, and evidence-driven. Challenge weak assumptions with technical reasoning and keep discussions focused on improving the project.
