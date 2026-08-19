// src/components/Navbar.jsx
//
// The navigation bar shown on every page. NavLink is like Link, but it
// knows when its own page is the current page (so we can highlight it).
//
// RESPONSIVE NOTE: on small screens we hide the link list and instead
// show a hamburger button. Clicking it toggles a `menuOpen` boolean in
// state, which decides whether the mobile menu is shown. This is a very
// common React pattern: "state controls what's on screen."

import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const links = [
  { to: "/", label: "Home" },
  { to: "/menu", label: "Menu" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const { user, logout } = useAuth();
  const [menuOpen, setMenuOpen] = useState(false);

  const linkStyle = ({ isActive }) =>
    `font-medium transition-colors ${
      isActive ? "text-copper" : "text-oat hover:text-copper"
    }`;

  // Runs every time a link is clicked, so the mobile menu closes
  // automatically after navigating instead of staying open.
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="bg-espresso sticky top-0 z-50">
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        <NavLink to="/" className="font-display text-2xl text-oat" onClick={closeMenu}>
          Coffee House
        </NavLink>

        {/* Desktop links — hidden below md, shown as a row from md up */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <li key={link.to}>
              <NavLink to={link.to} className={linkStyle}>
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Desktop auth buttons — same idea, hidden on mobile */}
        <div className="hidden md:flex items-center gap-4">
          {user ? (
            <>
              <span className="text-oat text-sm">Hi, {user.email}</span>
              <button
                onClick={logout}
                className="text-sm border border-oat text-oat px-4 py-2 rounded-full hover:bg-oat hover:text-espresso transition-colors"
              >
                Log out
              </button>
            </>
          ) : (
            <>
              <NavLink to="/login" className="text-sm text-oat hover:text-copper">
                Log in
              </NavLink>
              <NavLink
                to="/register"
                className="text-sm bg-copper text-ivory px-4 py-2 rounded-full hover:opacity-90 transition-opacity"
              >
                Register
              </NavLink>
            </>
          )}
        </div>

        {/* Hamburger button — only visible below md (md:hidden) */}
        <button
          onClick={() => setMenuOpen((open) => !open)}
          aria-label="Toggle menu"
          className="md:hidden text-oat p-2"
        >
          {menuOpen ? (
            // "X" icon shown when the menu is open
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="4" y1="4" x2="20" y2="20" />
              <line x1="20" y1="4" x2="4" y2="20" />
            </svg>
          ) : (
            // Hamburger icon (3 lines) shown when the menu is closed
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile menu panel — only rendered when menuOpen is true,
          and md:hidden makes sure it never shows on bigger screens */}
      {menuOpen && (
        <div className="md:hidden border-t border-oat/10 px-6 py-4 flex flex-col gap-4">
          {links.map((link) => (
            <NavLink key={link.to} to={link.to} className={linkStyle} onClick={closeMenu}>
              {link.label}
            </NavLink>
          ))}

          <div className="border-t border-oat/10 pt-4 flex flex-col gap-3">
            {user ? (
              <>
                <span className="text-oat text-sm">Hi, {user.email}</span>
                <button
                  onClick={() => {
                    logout();
                    closeMenu();
                  }}
                  className="text-sm border border-oat text-oat px-4 py-2 rounded-full text-center"
                >
                  Log out
                </button>
              </>
            ) : (
              <>
                <NavLink to="/login" className="text-sm text-oat" onClick={closeMenu}>
                  Log in
                </NavLink>
                <NavLink
                  to="/register"
                  className="text-sm bg-copper text-ivory px-4 py-2 rounded-full text-center"
                  onClick={closeMenu}
                >
                  Register
                </NavLink>
              </>
            )}
          </div>
        </div>
      )}
    </header>
  );
}

