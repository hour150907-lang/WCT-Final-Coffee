// src/components/Footer.jsx

export default function Footer() {
  return (
    <footer className="bg-espresso text-oat mt-24">
      <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="font-display text-xl">Coffee House</p>
        <p className="text-sm text-oat/70">
          &copy; {new Date().getFullYear()} Coffee House. Made while learning
          React + Tailwind.
        </p>
      </div>
    </footer>
  );
}
