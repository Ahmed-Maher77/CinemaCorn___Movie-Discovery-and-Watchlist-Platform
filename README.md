# 🎬 CinemaCorn – Movie Discovery & Watchlist Platform

CinemaCorn is a modern movie discovery and watchlist platform built with React and Vite.
It enables users to search movies from TMDB, explore rich movie details, manage a personalized watchlist,
rate movies locally, and share app state through URL-synced navigation.

---

## 🌐 Live Preview

- Live Website: https://cinemacorn-movie-discovery.netlify.app/

---

## 👀 Website Preview:

<a href="https://cinemacorn-movie-discovery.netlify.app/" title="demo">
  <img src="https://github.com/user-attachments/assets/c4575c3e-fbae-4efc-a25b-67d7d99f4f65" alt="website preview - Demo - UI Mockup" width="400">
</a>

---

## 💻 Used Technologies

- **React 19**: Builds a fast, component-driven, reactive user interface.
- **React DOM**: Handles efficient rendering and DOM updates in the browser.
- **React Router DOM**: Manages SPA routing, lazy-loaded pages, and navigation state.
- **Vite**: Provides a fast dev server and optimized production builds.
- **Axios**: Performs HTTP requests to the TMDB API.
- **PropTypes**: Adds runtime validation for component props and contracts.
- **ESLint**: Enforces clean, maintainable, and consistent code quality standards.
- **Babel React Compiler Plugin**: Enables React compile-time optimizations.
- **CSS Variables**: Centralizes theming and design consistency across the app.
- **Local Storage API**: Persists watchlist and movie ratings locally in the browser.
- **TMDB API**: Supplies movie metadata, posters, ratings, and trailer resources.
- **Netlify**: Hosts and deploys the production-ready frontend app.

---

## ✨ Key Features

- **Movie Search**: Search movies with debounced API requests.
- **Shareable URL State**: Synchronize search term, page, and layout mode with URL params.
- **Grid and List Layouts**: Switch browsing mode dynamically.
- **Movie Details Page**: Explore posters, metadata, genres, ratings, and trailers.
- **Watchlist Management**: Add and remove movies with synchronized UI updates.
- **Watchlist Stats**: Show watchlist aggregates such as count, averages, and runtime totals.
- **Toast Notifications**: Show feedback for watchlist actions.
- **Local Movie Ratings**: Rate movies locally with reset support.
- **Persistent Storage**: Preserve watchlist and ratings in local storage.
- **Cross-Tab Synchronization**: Keep watchlist data synchronized across tabs.
- **Optimized Pagination**: Slice TMDB pages into UI-friendly pages.
- **Lazy Loading**: Load routes on demand using Suspense fallbacks.
- **Loading and Error States**: Deliver clear feedback during async operations.
- **Not Found Recovery Page**: Guide users when navigating invalid routes.
- **Reusable Hooks Architecture**: Encapsulate logic into reusable custom hooks.
- **Favorites Page**: Route and page are present, currently a placeholder for future saved favorites workflow.

---

## 🏆 Best Practices and Standards

### ⚡ Performance Optimization

- Debounced movie search to minimize unnecessary API requests.
- Route-level lazy loading using React Suspense.
- Optimized pagination strategy for TMDB response handling.
- Reusable hooks to avoid duplicated logic and improve maintainability.
- Component decomposition into focused page and UI components.

### 🔒 Security

- TMDB key is consumed through Vite environment variables (instead of hardcoding in components).
- Encoded query values before API requests.
- Safe external linking with `noopener` and `noreferrer`.
- Controlled local persistence through scoped storage keys (`watchlist`, `moviesRating`).

### ♿ Accessibility

- Semantic HTML controls such as buttons, links, labels, and inputs.
- `aria-label` and `aria-pressed` support in watchlist interactions.
- Focus and hover feedback in key controls.
- Error/loading feedback messages to keep interaction state clear.

### 🎯 UX and Heuristics

- Global initial loading screen for smoother app startup.
- Route-specific loading and error states.
- Toast notifications for watchlist action feedback.
- Shareable/bookmarkable URL state for search, page, and view mode.
- Not Found route to recover from invalid navigation.

### 🧠 Code Quality and Architecture

- Separation of concerns via dedicated custom hooks (`useFetchMovies`, `useMovieSearchControls`, `useDebounce`, `useWatchlistState`).
- Reusable component architecture and page-level composition.
- PropTypes validation for component contracts.
- Organized folder structure for maintainability.

### 🌍 Compatibility and Build Standards

- Standards-based modern CSS with centralized variables in `src/index.css`.
- ESM-based frontend tooling.
- Responsive layouts with media-query handling in page/component styles.
- SPA fallback routing support through Netlify redirects.

### 🔍 Maintainability

- Centralized styling system using CSS variables.
- URL-based state patterns for reproducible navigation.
- Supporting project docs in `UML_DIAGRAMS.md` and `PROGRAM_FLOW.md`.

---

## 📥 Installation Instructions for Local Setup

### Prerequisites

- Node.js 18+ (recommended latest LTS)
- npm

### 1. Clone the repository

```bash
git clone https://github.com/Ahmed-Maher77/CinemaCorn___Movie-Discovery-and-Watchlist-Platform.git
cd CinemaCorn___Movie-Discovery-and-Watchlist-Platform
```

### 2. Install dependencies

```bash
npm install
```

### 3. Create environment variables

Create a `.env` file in the project root:

```bash
VITE_TMDB_API_KEY=your_tmdb_api_key
```

### 4. Start development server

```bash
npm run dev
```

### 5. Build for production

```bash
npm run build
```

### 6. Preview production build

```bash
npm run preview
```

### Available Scripts

- `npm run dev`: Start the Vite development server.
- `npm run build`: Build optimized production assets.
- `npm run preview`: Preview the production build locally.
- `npm run lint`: Run ESLint checks.

---

## 📁 Project Structure

```text
CinemaCorn/
├── public/                         # Static public assets
├── src/
│   ├── assets/                     # Images, icons, and static resources
│   ├── components/                 # Reusable UI components
│   ├── hooks/                      # Custom reusable hooks (fetching, controls, debounce, watchlist sync)
│   ├── pages/                      # Route-level pages and subcomponents
│   ├── App.jsx                     # Router and route definitions
│   ├── main.jsx                    # App bootstrap entry
│   └── index.css                   # Global styles and CSS variables
├── netlify.toml                    # Deployment and SPA fallback config
├── package.json                    # Scripts and dependencies
└── README.md
```

---

## 💾 Storage

| Storage Type                | Purpose                                                       |
| --------------------------- | ------------------------------------------------------------- |
| `localStorage.watchlist`    | Stores saved movie IDs for persistent watchlist functionality |
| `localStorage.moviesRating` | Stores locally assigned movie ratings                         |
| URL Search Params           | Stores searchable and shareable app state                     |

---

## 📚 Additional Documentation

This project includes:

- [UML_DIAGRAMS.md](UML_DIAGRAMS.md): System architecture and UML documentation.
- [PROGRAM_FLOW.md](PROGRAM_FLOW.md): Application flow and execution lifecycle.

---

## 📬 Contact

- 🧑‍💻 **Portfolio:** <a href="https://ahmedmaher-portfolio.vercel.app/" title="See My Portfolio">https://ahmedmaher-portfolio.vercel.app/</a>
- 🔗 **LinkedIn:** <a href="https://www.linkedin.com/in/ahmed-maher-algohary" title="Contact via LinkedIn">https://www.linkedin.com/in/ahmed-maher-algohary</a>
- 📧 **Email:** <a href="mailto:ahmedmaher.dev1@gmail.com" title="Contact via Email">ahmedmaher.dev1@gmail.com</a>

---

### ⭐ Support

If you found this project helpful, consider giving it a star on GitHub.
