# 🎯 UML Diagrams – CinemaCorn

## 📌 Purpose

This document describes the architectural and behavioral UML diagrams used to model the CinemaCorn application.

## 🧩 Use Case Diagram

```mermaid
flowchart LR
	U[User]
	API[(TMDB API)]

	UC1((Search Movies))
	UC2((View Movie Details))
	UC3((Add Movie to Watchlist))
	UC4((Remove Movie from Watchlist))
	UC5((Rate Movies))
	UC6((Browse Paginated Results))
	UC7((Change View Mode))
	UC8((Open Trailer Links))

	U --> UC1
	U --> UC2
	U --> UC3
	U --> UC4
	U --> UC5
	U --> UC6
	U --> UC7
	U --> UC8

	UC1 --> API
	UC2 --> API
	UC6 --> API
```

## 🧱 Component Diagram

```mermaid
flowchart TB
	subgraph UI[UI Layer]
		Header
		SearchBar
		HomeResults
		MoviesContainer
		MovieCard
		MovieDetailsPage[Movie Details Page]
		WatchlistPage[Watchlist Page]
		Pagination
		ToastSystem[Toast System]
	end

	subgraph Hooks[Custom Hooks Layer]
		useFetchMovies
		useMovieSearchControls
		useDebounce
		useWatchlistState
	end

	subgraph Storage[Browser Storage Layer]
		LocalStorage[(localStorage)]
		URLParams[(URL Search Params)]
	end

	subgraph Services[Service Layer]
		Axios[Axios Client]
		TMDB[(TMDB API)]
	end

	SearchBar --> useMovieSearchControls
	HomeResults --> useFetchMovies
	useMovieSearchControls --> URLParams
	useFetchMovies --> Axios
	Axios --> TMDB

	MovieDetailsPage --> useWatchlistState
	WatchlistPage --> useWatchlistState
	useWatchlistState --> LocalStorage

	MovieDetailsPage --> ToastSystem
	WatchlistPage --> ToastSystem
	HomeResults --> Pagination
	MoviesContainer --> MovieCard
```

## 🔄 Sequence Diagram (Search Flow)

```mermaid
sequenceDiagram
	actor User
	participant SearchBar
	participant Debounce as useDebounce
	participant Controls as useMovieSearchControls
	participant Fetcher as useFetchMovies
	participant API as TMDB API
	participant UI as HomeResults

	User->>SearchBar: Type query
	SearchBar->>Controls: handleChange(value)
	Controls->>Debounce: update searchQuery
	Debounce-->>Fetcher: debounced query
	Fetcher->>API: GET /search/movie
	API-->>Fetcher: results + total_results
	Fetcher-->>UI: moviesData + totalPages
	UI-->>User: Render cards and pagination
```

## 🧠 State Diagram (Movie Search)

```mermaid
stateDiagram-v2
	[*] --> Idle
	Idle --> Typing: User starts typing
	Typing --> Loading: Debounced value emitted
	Loading --> Success: API response ok
	Loading --> Error: API request fails
	Success --> Typing: Query changes
	Error --> Typing: User retries
```

## ✅ Activity Diagram (Watchlist Toggle)

```mermaid
flowchart TD
	A[User clicks Add or Heart] --> B[Toggle watchlist state]
	B --> C{Already in watchlist?}
	C -- Yes --> D[Remove movie id]
	C -- No --> E[Add movie id]
	D --> F[Persist localStorage.watchlist]
	E --> F
	F --> G[Dispatch watchlistchange event]
	G --> H[Sync components and tabs]
	H --> I[Show success toast]
	I --> J[Re-render button and watchlist UI]
```
