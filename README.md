# Forest Impact MIS

**An independent Ourdo Indonesia portfolio demonstration** for a fictional programme scenario. This repository retains its historical GitHub slug for continuity; the application and publicly presented product are named **Forest Impact MIS**.

> Demo only. Every organization shown inside the application, person, program, date, site, indicator, location, document, and measurement is illustrative. This is not an operational monitoring system or an assertion of work delivered to any real organization. No outside organization commissioned, endorsed, or is affiliated with this demonstration.

## Scope

A front-end concept for **Custom Data & Monitoring Systems**. It uses React 19, TypeScript, and Vite and deliberately has no server, database, GIS engine, authentication, file service, or third-party live-data integration.

- Management dashboard and KPI/attention queue
- Program and project details, indicators, activities, beneficiaries, and sample knowledge notes
- Monitoring and evaluation review **simulation** (local state only)
- Conceptual landscape illustration with interactive fictional site markers (**not georeferenced GIS**)
- Field evidence form **simulation** (local filenames only, no upload or storage)

## Running locally

```bash
npm ci
npm run dev
```

Open the URL printed by Vite (usually http://localhost:5173). To check the production bundle:

```bash
npm run build
npm run preview
```

## Example pages

| Path | Purpose |
| --- | --- |
| `/dashboard` | Management overview and review queue |
| `/programs/coastal-resilience` | Program and project detail |
| `/indicators/mangrove-rehabilitation` | Indicator and evidence review **preview** |
| `/landscapes` | Illustrated landscape/site view |
| `/field/evidence` | Field submission **preview** |

## Demo limitations and data safety

- Source values are in [`src/data.ts`](src/data.ts); no real people, field records, or location datasets are provided.
- Review buttons affect only the current React component state; they do not approve evidence, update dashboards, send notifications, or leave an audit trail.
- Choosing a file displays its filename locally. The file is **not** uploaded, stored, or sent anywhere.
- The map is drawn with CSS. Its geometry, markers, and labels are fictional and **not to scale**. There is no real basemap, spatial analysis, or GIS layers.
- Single-option context fields are disabled rather than presented as working filters. This is a deliberately constrained demonstration, not a production application.
- The repo history retains the original project slug and commits. Rebranding app copy does not rewrite history or certify any earlier material for public distribution.

## Before any public deployment

1. Review all source code, static files, repository history, and preview deployment metadata for potentially confidential or identifying material.
2. Check the build and responsive UI. Verify that controls do not imply real backend operations.
3. Publish only after this review, with the demo disclaimer visible.

Developed by **Ourdo Indonesia**.
