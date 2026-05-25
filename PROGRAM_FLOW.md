# 🔄 Program Flow – CinemaCorn

## 📌 Application Lifecycle Overview

CinemaCorn follows a component-driven SPA architecture using React Router and lazy-loaded routes.

## 🚀 Initial Application Flow

```mermaid
flowchart TD
	A[Application Start] --> B[Load Root App]
	B --> C[Initialize Router]
	C --> D[Show Global Loader]
	D --> E[Resolve Requested Route]
	E --> F[Render Page Component]
```

## 🔍 Movie Search Flow

```mermaid
flowchart TD
	A[User Types Query] --> B[Debounce Input Value]
	B --> C[Update URL Search Params]
	C --> D[Send Request to TMDB API]
	D --> E[Receive Response]
	E --> F[Map and Slice Results]
	F --> G[Render Movie Cards]
```

## ❤️ Watchlist Flow

```mermaid
flowchart TD
	A[User Clicks Watchlist Control] --> B[Check Existing State]
	B --> C{Exists in Watchlist?}
	C -- Yes --> D[Remove Movie ID]
	C -- No --> E[Add Movie ID]
	D --> F[Update localStorage.watchlist]
	E --> F
	F --> G[Sync Across Components and Tabs]
	G --> H[Display Toast Feedback]
	H --> I[Re-render Watchlist State]
```

## ⭐ Rating System Flow

```mermaid
flowchart TD
	A[User Selects Rating] --> B[Store Rating in localStorage.moviesRating]
	B --> C[Update Stars UI]
	C --> D[Allow Reset Rating]
```

## 🛣️ Route Navigation Flow

```mermaid
flowchart TD
	A[Navigate to Route] --> B[Lazy Load Route Component]
	B --> C[Show Suspense Fallback]
	C --> D[Fetch Required Data]
	D --> E[Render Route UI]
```

## ⚠️ Error Handling Flow

```mermaid
flowchart TD
	A[Start API Request] --> B{Request Success?}
	B -- Yes --> C[Render Data UI]
	B -- No --> D[Render Error State]
	D --> E[Show Recovery Message]
```
