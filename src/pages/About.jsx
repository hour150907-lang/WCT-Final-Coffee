// src/pages/About.jsx

import aboutImage from "../assets/coffee/AboutStory.jfif";

export default function About() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12 items-center">
      <img
        src={aboutImage}
        alt="Inside the coffee shop"
        className="w-full h-96 object-cover rounded-2xl"
      />
      <div>
        <p className="font-mono text-copper text-sm tracking-widest mb-2">
          OUR STORY
        </p>
        <h1 className="font-display text-4xl mb-6">
          Small shop, big obsession with coffee.
        </h1>
        <p className="text-espresso-light leading-relaxed mb-4">
          Coffee House started as a single roaster and a handful of chairs. We
          source beans directly from small farms, roast in small batches, and
          pull every shot to order.
        </p>
        <p className="text-espresso-light leading-relaxed">
          No shortcuts, no syrup bottles lined up for show — just coffee we'd
          want to drink ourselves.
        </p>
      </div>
    </div>
  );
}
