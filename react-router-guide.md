# React Router Guide - Study Notes

## What is React Router?

In a traditional website, each page is a **separate `.html` file**. Clicking a link makes the browser **load a new file** from the server.

React Router lets you have **multiple pages inside one React app**. When you click a link, it **swaps the component instantly** — no page reload. This is called a **Single Page Application (SPA)**.

---

## Core Concepts

### 1. BrowserRouter
Wraps your entire app to enable routing. Without it, nothing works.

```jsx
import { BrowserRouter } from 'react-router-dom';

<BrowserRouter>
  <App />   {/* Everything inside can use routing */}
</BrowserRouter>
```

**Where we used it:** `src/main.jsx` — wraps the entire app.

---

### 2. Routes and Route
`Routes` is a container. Each `Route` inside maps a **URL path** to a **component**.

```jsx
import { Routes, Route } from 'react-router-dom';

<Routes>
  <Route path="/"      element={<App />} />        {/* homepage */}
  <Route path="/buddy" element={<BuddyPage />} />  {/* project page */}
</Routes>
```

**How it works:**
- User visits `localhost:5173/` → React renders `<App />`
- User visits `localhost:5173/buddy` → React renders `<BuddyPage />`

**Where we used it:** `src/main.jsx`

---

### 3. Link (instead of `<a>`)
`Link` is like an `<a>` tag, but it **doesn't reload the page**. It just swaps the component.

```jsx
import { Link } from 'react-router-dom';

{/* Internal navigation — no reload */}
<Link to="/buddy">View Project</Link>

{/* vs. regular <a> tag — full page reload */}
<a href="/buddy">View Project</a>
```

**When to use which:**
- `<Link to="/buddy">` — for pages **inside** your React app (internal routes)
- `<a href="https://external-site.com">` — for pages **outside** your app (external URLs)

**Where we used it:**
- `src/App.tsx` — BUDDY project card uses `<Link to="/buddy">`
- `src/pages/BuddyPage.tsx` — "Back" button uses `<Link to="/">`

---

## What We Changed (File by File)

### File 1: `src/main.jsx` — The Router Setup

**Before:**
```jsx
import App from './App.tsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
```

**After:**
```jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App.tsx'
import BuddyPage from './pages/BuddyPage.tsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/buddy" element={<BuddyPage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
```

**What changed:**
- Imported `BrowserRouter`, `Routes`, `Route` from react-router-dom
- Imported the new `BuddyPage` component
- Wrapped everything in `<BrowserRouter>`
- Defined two routes: `/` for the portfolio and `/buddy` for the project page

---

### File 2: `src/App.tsx` — Updated Project Cards

**What changed:**
- Imported `Link` from react-router-dom
- Changed BUDDY's link from `"Buddy.html"` to `"/buddy"` (a route, not a file)
- Project cards now check if the link starts with `/`:
  - If yes → use `<Link>` (internal, no reload)
  - If no → use `<a>` (external, opens in new tab)

**The logic:**
```jsx
// Internal route → Link component
project.link?.startsWith('/') ? (
  <Link to={project.link}>
    {cardContent}
  </Link>
) : (
  // External URL → regular <a> tag
  <a href={project.link} target="_blank">
    {cardContent}
  </a>
)
```

---

### File 3: `src/pages/BuddyPage.tsx` — New Page Component

A regular React component that renders the BUDDY project detail page. It uses `<Link to="/">` for the back button to navigate home without reloading.

---

## How to Add More Project Pages

1. **Create the component** in `src/pages/`:
   ```
   src/pages/TherapyPage.tsx
   ```

2. **Add the route** in `src/main.jsx`:
   ```jsx
   import TherapyPage from './pages/TherapyPage.tsx'

   <Route path="/therapy" element={<TherapyPage />} />
   ```

3. **Update the project link** in `src/App.tsx`:
   ```js
   {
     title: "123Therapy",
     desc: "An AI platform for mental health care",
     tech: ["Python", "Flask", "Tailwind"],
     color: "from-purple-500 to-pink-500",
     link: "/therapy"    // ← add this
   }
   ```

That's it — clicking the card will navigate to your new page.

---

## Quick Reference

| Concept | What it does | Import from |
|---------|-------------|-------------|
| `BrowserRouter` | Enables routing for the app | `react-router-dom` |
| `Routes` | Container for Route definitions | `react-router-dom` |
| `Route` | Maps a URL path → component | `react-router-dom` |
| `Link` | Navigate without page reload | `react-router-dom` |

---

## Common Mistakes to Avoid

1. **Forgetting `<BrowserRouter>`** — Routes won't work without it wrapping your app
2. **Using `<a>` for internal links** — This causes a full page reload, losing React state
3. **Using `<Link>` for external URLs** — Link only works for routes inside your app
4. **Forgetting to add `<Route>`** — Creating a page component isn't enough; you must also register the route in `main.jsx`
