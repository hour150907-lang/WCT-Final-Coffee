# Coffee House — Setup Instructions

This is a **complete, ready-to-run** Vite + React + Tailwind project.
Nothing to merge — just unzip, install, and run.

Full structure:

```text
coffee-house/
├── public/
│   └── coffee-cup.svg
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   └── CoffeeCard.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Menu.jsx
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   ├── Login.jsx
│   │   └── Register.jsx
│   ├── context/
│   │   └── AuthContext.jsx
│   ├── data/
│   │   └── coffees.js
│   ├── firebase.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── vite.config.js
├── package.json
└── .gitignore
```

## 1. Unzip and open a terminal there

In Git Bash, `cd` into the unzipped `coffee-house` folder.

## 2. Install everything

```bash
npm install
```

This reads `package.json` and installs React, Vite, Tailwind CSS v4,
React Router, and Firebase all at once — you don't need to run separate
install commands.

- **react-router-dom** → lets us switch between pages (Home, Menu, etc.)
  without reloading the browser.
- **firebase** → lets us talk to Firebase for Login/Register.

## 3. Set up Firebase (for Login/Register to actually work)

1. Go to https://console.firebase.google.com and create a project.
2. Click the **`</>`** (web app) icon to register a web app.
3. Copy the config object Firebase shows you.
4. Paste your real values into `src/firebase.js`, replacing the
   `"YOUR_..."` placeholders.
5. In the Firebase console: **Build → Authentication → Get started →
   Sign-in method → enable "Email/Password"**.

Until you do this, the site will run fine, but clicking Login/Register
will show an error (since it can't reach a real Firebase project yet).

## 4. Replace the placeholder images with real photos

`src/assets/coffee/` currently has **placeholder SVGs** (brown boxes with
labels) just so the project runs immediately. To use real photos:

1. Download free coffee photos from a site like:
   - https://unsplash.com (search "coffee", "latte", "espresso"...)
   - https://pexels.com
2. Save each photo into `src/assets/coffee/`, replacing the matching
   placeholder — for example, download an espresso photo and save it as
   `espresso.jpg` (or any name you like).
3. If your file has a different name or extension than the placeholder,
   update the one line that imports it. For example in
   `src/data/coffees.js`:
   ```js
   import espresso from "../assets/coffee/espresso.jpg"; // was .svg
   ```
   Do the same for `hero.svg` in `src/pages/Home.jsx` and `about.svg` in
   `src/pages/About.jsx`.

Because these are `import`ed files (not URL strings), Vite bundles the
actual image into your build. That means **once you deploy, the photos
can never disappear or break** — unlike linking to an external website's
image URL.

## 5. Run it

```bash
npm run dev
```

Then open the local address it gives you (usually `http://localhost:5173/`).

## Notes if you already had an old `coffee-house` project

This zip is a fresh, self-contained project — it doesn't touch your old
one. If you want to keep working in your original folder instead, just
copy `src/`, `index.html`, `vite.config.js`, and `public/` from this zip
over your old ones, then run `npm install` there.

## What's next

Once you've got this running and want to actually understand it, ask and
we'll go through it piece by piece: Navbar → React Router → useState →
props → Firebase auth — in that order.
