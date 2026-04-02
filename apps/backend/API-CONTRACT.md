# Track Services API Contract

Initial API contract for Sprint 1.

## Base

- API versioning uses path prefixes under `/api/v1`
- Health check remains unversioned at `/health`

## Current endpoints

- `GET /` returns a high-level API overview
- `GET /api` returns the same overview for API clients
- `GET /api/v1/info` returns version and environment metadata
- `POST /api/v1/contact-leads` creates a commercial lead
- `GET /api/v1/tenants` lists tenants
- `GET /api/v1/tenants/{id}` returns a single tenant by id
- `POST /api/v1/tenants` creates a tenant
- `GET /health` returns application health

## Planned next endpoints

- `GET /api/v1/tickets`
- `POST /api/v1/tickets`
- `POST /api/v1/auth/login`