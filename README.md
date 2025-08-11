## Kudwa Dashboard — Frontend Assignment

Live demo: https://kudwadashboardjoao.netlify.app/main-dashboard

This is a frontend assignment built to apply for a Frontend Engineer position at Kudwa. It’s a Next.js + TypeScript app with two main pages: a Main Dashboard and a Report page. Both pages load data from JSON files via a small fake API that simulates network requests. The UI follows Kudwa’s brand colors and emphasizes clarity, responsiveness (≥ 600px), and clean state management with Redux Toolkit.

---

## Project Overview

The app implements the assignment requirements:

- Sidebar navigation between two pages:
  1.  Main Dashboard — visualizes monthly/quarterly/yearly datasets with charts and KPIs
  2.  Report — expandable Profit & Loss report reading from a provided report.json
- Users can toggle the period, which refetches and renders the corresponding time series.
- Data comes from local JSON files but is accessed via a fake API layer to mimic real HTTP calls.
- Collapsible UI for nested fields
- Responsive down to small screens (≥ 600px)

---

## Tech Stack

- Next.js (App Router) + React 19
- TypeScript
- Redux Toolkit + React Redux
- Tailwind CSS v4 (styling + brand colors)
- Recharts (charts)
- Zod (schema validation for API responses)
- Prettier + ESLint (formatting and linting)

## Data Flow and Fake API

The app uses a small API module that imports the JSON files and returns typed responses after a simulated delay:

- File: `src/data/api.ts`
  - `getDashboardData(period)` returns the proper dataset among `monthly.json`, `quarterly.json`, `yearly.json`
  - `getReportData()` returns `report.json`
  - `simulateDelay(ms)` mimics network latency

All responses are validated with Zod before entering the app state:

- Dashboard: `src/schemas/dashboardSchemas.ts`
- Report: `src/schemas/reportSchemas.ts`

If validation fails, the Redux thunk dispatch is rejected with a clear error.

---

## State Management (Redux Toolkit)

Store: `src/store/index.ts`

Slices:

- `sideBarSlice` — controls sidebar open/close UI state
- `dashboardSlice` — holds current dashboard period, loading/error flags, and parsed dashboard dataset; exposes `fetchDashboardData(period)` and `changePeriod`
- `reportSlice` — holds current report period, loading/error flags, and parsed report dataset; exposes `fetchReportData()` and `changePeriod`

These slices coordinate period changes and async fetches from the fake API. Zod parsing ensures only valid shapes are stored.

---

## UI/UX

- Collapsible UI: Nested report sections can be expanded/collapsed for drill-down. Components: `src/components/Collapsible.tsx`, plus report-specific components under `src/components/Report/`.
- Responsiveness: The layout is designed to work well on small screens (≥ 600px). Below that, see the TODO section for planned improvements to the mobile/smartphone experience.
- Charts: Recharts is used for line/bar/pie/donut charts in the dashboard and report; tables are used for detailed numeric views.
- Branding: Tailwind classes follow Kudwa palette (e.g., brown/yellow/blue variants and light/dark neutrals) to align with the specification.

---

## Folder Structure

Key folders and files:

```
src/
	app/
		(pages)/
			main-dashboard/        # Main Dashboard route
			report/                # Report route
	components/
		Charts/                  # Recharts wrappers (Line, Bar, Pie/Donut, etc.)
		Dashboard/               # Dashboard widgets and layout
		Report/                  # Report field components (tables, collapsible, etc.)
		Navigation/              # Sidebar + Topbar
	data/
		api.ts                   # Fake API with delay + typed responses
		staticData/
			dashboardData/
				monthly.json
				quarterly.json
				yearly.json
			reportData/
				report.json
	schemas/
		dashboardSchemas.ts      # Zod schemas for dashboard
		reportSchemas.ts         # Zod schemas for report
	store/
		index.ts                 # Redux store setup
		slices/
			dashboardSlice.ts
			reportSlice.ts
			sideBarSlice.ts
	styles/
		globals.css              # Tailwind + global styles
	types/
		*.d.ts                   # TypeScript types for data models
	utils/                     # Formatting helpers (currency, dates, numbers)
```

---

## How to Run Locally

Requirements: Node 18+

1. Install dependencies

```
npm install
```

2. Start the dev server (runs on port 3001)

```
npm run dev
```

3. Open the app

```
http://localhost:3001
```

Useful scripts:

```
npm run lint         # ESLint
npm run check        # TypeScript type check
npm run format       # Check formatting
npm run format:fix   # Write formatting changes
```

---

## Styling (Tailwind)

Tailwind CSS is used for layout, spacing, typography, and brand colors. The palette aligns with Kudwa’s provided colors:

- `#B09280`
- `#EAE62F`
- `#698AC5`
- `#262626`
- `#FBFAFA`

Custom utility classes are used throughout the components to keep styles consistent and maintainable.

---

## Live Demo

https://kudwadashboardjoao.netlify.app/main-dashboard

---

## TODO / Next Steps

- Improve full mobile/smartphone responsiveness (< 600px)
- Fix overlapping labels on donut and pie charts (consider leader lines, minimum slice thresholds, legends, or external labels)

---
