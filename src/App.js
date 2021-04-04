import React from "react";

const foodILike = [
  {
    id: 1,
    name: "Charvel",
    image:
      "https://upload.wikimedia.org/wikipedia/en/3/30/Charvel_guitars_logo.png",
    rating: 3,
  },
  {
    id: 2,
    name: "Fender",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Fender_guitars_logo.svg/1280px-Fender_guitars_logo.svg.png",
    rating: 5,
  },
  {
    id: 3,
    name: "Gibson",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Gibson_Guitar_logo.svg/1280px-Gibson_Guitar_logo.svg.png",
    rating: 2,
  },
  {
    id: 4,
    name: "Gretsch",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/4/4f/Gretsch_company_logo.png",
    rating: 2,
  },
  {
    id: 5,
    name: "Ibanez",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Ibanez_logo.svg/1280px-Ibanez_logo.svg.png",
    rating: 5,
  },
  {
    id: 6,
    name: "Squier",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/c/c6/Squier_guitars_logo.png",
    rating: 4,
  },
];

function Food({ name, picture }) {
  return (
    <div>
      <h2>I like {name}</h2>
      <img src={picture} alt={name} />
    </div>
  );
}

function renderFood(dish) {
  return <Food key={dish.id} name={dish.name} picture={dish.image} />;
}

function App() {
  return <div className="App">{foodILike.map(renderFood)}</div>;
}

export default App;
