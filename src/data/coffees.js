// src/data/coffees.js
//
// Sample menu data. Later, this could come from a real database —
// for now it's a plain array of objects that our pages will map() over.
//
// NOTICE: images are imported from src/assets/coffee/ instead of being
// a URL string. When you `import` an image file, Vite copies it into
// the final build and gives you back a safe, permanent path — so the
// picture will NEVER disappear after you deploy, unlike an external
// website link that could break or get rate-limited.

import espresso from "../assets/coffee/Espresso.jfif";
import latte from "../assets/coffee/Latte.jfif";
import cappuccino from "../assets/coffee/Cappuccino.jfif";
import coldBrew from "../assets/coffee/Cold Brew.jfif";
import mocha from "../assets/coffee/Mocha.jfif";
import americano from "../assets/coffee/Americano.jfif";

const coffees = [
  {
    id: 1,
    name: "Espresso",
    description: "A concentrated shot pulled from freshly roasted beans.",
    price: 3.0,
    image: espresso,
  },
  {
    id: 2,
    name: "Latte",
    description: "Espresso with steamed milk and a thin layer of foam.",
    price: 4.5,
    image: latte,
  },
  {
    id: 3,
    name: "Cappuccino",
    description: "Equal parts espresso, steamed milk, and milk foam.",
    price: 4.25,
    image: cappuccino,
  },
  {
    id: 4,
    name: "Cold Brew",
    description: "Slow-steeped for 18 hours, served over ice.",
    price: 4.75,
    image: coldBrew,
  },
  {
    id: 5,
    name: "Mocha",
    description: "Espresso, steamed milk, and rich chocolate.",
    price: 5.0,
    image: mocha,
  },
  {
    id: 6,
    name: "Americano",
    description: "Espresso topped with hot water for a lighter body.",
    price: 3.5,
    image: americano,
  },
];

export default coffees;
