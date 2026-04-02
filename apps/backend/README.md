# Track Services Backend

Sprint 1 here is the backend foundation for the portal.

## Target

- Latest stable .NET available at the time of implementation
- Modular monolith structure under `apps/backend/src`
- Initial health endpoint and API bootstrap

## Current focus

- API shell
- Layered project structure
- CORS and environment setup
- Ready to grow into auth, portal and persistence

## Development note

- Development currently uses the in-memory provider in this workspace because LocalDB is not installed.
- Switch `Persistence:Provider` to `SqlServer` when you want to point the API at LocalDB or Azure SQL.
- Swagger UI is available in development at `/swagger`.

## Scripts

- `npm run dev:backend`
- `npm run build:backend`
- `npm run start:backend`