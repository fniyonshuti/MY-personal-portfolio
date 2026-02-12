# Personal Portfolio

A responsive portfolio site built with React, Vite, and Tailwind CSS. It highlights projects, skills, and experience with a clean layout, smooth section navigation, and a dark mode toggle.

## Highlights

- Responsive layout with mobile navigation
- Dark mode toggle and smooth section scrolling
- Project cards and expandable experience entries
- Contact section with a styled (non-functional) form

## Tech Stack

- React 19
- Vite 7
- Tailwind CSS 4
- ESLint 9

## Project Structure

- [src/App.jsx](src/App.jsx) main content, data arrays, and section layout
- [src/App.css](src/App.css) component styling and custom overrides
- [src/index.css](src/index.css) Tailwind import and global styles
- [src/assets](src/assets) images used by the page
- [public](public) static assets

## Getting Started

### Prerequisites

- Node.js 18 or later
- npm

### Install

```bash
npm install
```

### Run Locally

```bash
npm run dev
```

Open `http://localhost:5173` in your browser.

## Customization

Update content and data in [src/App.jsx](src/App.jsx):

- Update the hero text, about section, and contact details
- Replace project details in the `projects` array
- Adjust skill levels in the `skills` array
- Edit roles and responsibilities in the `experience` array
- Swap images in [src/assets](src/assets) and update imports

Styling adjustments live in [src/App.css](src/App.css) and [src/index.css](src/index.css).

## Build and Preview

```bash
npm run build
npm run preview
```

The production build is emitted to [dist](dist).

## Deployment

Deploy the [dist](dist) folder to any static host (Netlify, Vercel, GitHub Pages, or similar).
