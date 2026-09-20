# Blue Forests MIS concept prototype

A static, illustrative UI prototype for a consulting proposal. All program, project, site, indicator, achievement, and evidence information is fictional demonstration data. This is not a production MIS and does not claim to show Blue Forests operational data.

## Run locally

```bash
npm install
npm run dev
```

Open the local URL printed by Vite (normally `http://localhost:5173`). A production build can be checked with `npm run build`.

## Screens

| Route | Screen |
| --- | --- |
| `/dashboard` | Management overview |
| `/programs/coastal-resilience` | Program and project detail |
| `/indicators/mangrove-rehabilitation` | Indicator and evidence review |
| `/landscapes` | Spatial explorer |
| `/field/evidence` | Responsive field submission |

The interconnected fictional dataset lives in [`src/data.ts`](src/data.ts). UI views and local interactions live in [`src/main.tsx`](src/main.tsx), with styles in [`src/styles.css`](src/styles.css).

Navigation, tabs, map site selection, review decisions, and field submission states are local demonstration interactions. The map is a CSS illustration; no GIS service, file upload service, backend, or authentication is connected.

## Suggested proposal captures

1. Management dashboard at 1440 px wide as a full-page capture, so the map, attention panel, and review queue are visible.
2. Program detail at 1440 × 900, showing the results framework and project snapshot.
3. Indicator review at 1440 × 900, showing achievement, trend, evidence, and KMEL actions.
4. Landscape explorer at 1440 × 900, with Site A selected.
5. Field evidence page at 390 × 844, ideally as a full-page capture to include the evidence upload and submit controls.
