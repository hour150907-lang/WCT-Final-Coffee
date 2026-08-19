// src/components/CoffeeCard.jsx
//
// Displays one coffee item. This receives "props" (coffee) from whichever
// page uses it — that's what makes it reusable for both Home and Menu.

export default function CoffeeCard({ coffee }) {
  return (
    <div className="bg-ivory border border-espresso/10 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      <img
        src={coffee.image}
        alt={coffee.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-5">
        <div className="flex items-start justify-between gap-3 border-b border-dashed border-espresso/20 pb-3 mb-3">
          <h3 className="font-display text-xl">{coffee.name}</h3>
          <span className="font-mono text-copper text-lg">
            ${coffee.price.toFixed(2)}
          </span>
        </div>
        <p className="text-sm text-espresso-light">{coffee.description}</p>
      </div>
    </div>
  );
}
