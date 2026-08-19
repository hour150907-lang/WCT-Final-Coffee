// src/pages/Home.jsx

import { Link } from "react-router-dom";
import CoffeeCard from "../components/CoffeeCard";
import coffees from "../data/coffees";
import HomeCover from "../assets/coffee/HomeCover.jfif";

export default function Home() {
  // .slice(0, 3) takes just the first 3 coffees for the "featured" row
  const featured = coffees.slice(0, 3);

  return (
    <div>
      {/* Hero section */}
      <section className="relative">
        <img
          src={HomeCover}
          alt="Coffee being poured"
          className="w-full h-[70vh] object-cover"
        />
        <div className="absolute inset-0 bg-espresso/60 flex items-center">
          <div className="max-w-6xl mx-auto px-6 text-oat">
            <p className="font-mono text-copper tracking-widest text-sm mb-3">
              ROASTED DAILY · SERVED WARM
            </p>
            <h1 className="font-display text-5xl sm:text-6xl leading-tight max-w-xl">
              Coffee, made the way it should be.
            </h1>
            <Link
              to="/menu"
              className="inline-block mt-8 bg-copper text-ivory px-6 py-3 rounded-full hover:opacity-90 transition-opacity"
            >
              View the menu
            </Link>
          </div>
        </div>
      </section>

      {/* Featured coffees */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="font-display text-3xl mb-8">Featured today</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map((coffee) => (
            <CoffeeCard key={coffee.id} coffee={coffee} />
          ))}
        </div>
      </section>
    </div>
  );
}
