// src/pages/Menu.jsx

import CoffeeCard from "../components/CoffeeCard";
import coffees from "../data/coffees";

export default function Menu() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <p className="font-mono text-copper text-sm tracking-widest mb-2">
        FULL MENU
      </p>
      <h1 className="font-display text-4xl mb-10">What we're pouring</h1>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {coffees.map((coffee) => (
          <CoffeeCard key={coffee.id} coffee={coffee} />
        ))}
      </div>
    </div>
  );
}
