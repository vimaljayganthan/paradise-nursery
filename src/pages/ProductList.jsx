import React from "react";

const plants = [
  {
    id: 1,
    name: "Snake Plant",
    category: "Air Purifying",
    price: 20,
    image: "https://via.placeholder.com/150"
  },
  {
    id: 2,
    name: "Spider Plant",
    category: "Air Purifying",
    price: 25,
    image: "https://via.placeholder.com/150"
  },
  {
    id: 3,
    name: "Aloe Vera",
    category: "Succulents",
    price: 15,
    image: "https://via.placeholder.com/150"
  },
  {
    id: 4,
    name: "Jade Plant",
    category: "Succulents",
    price: 18,
    image: "https://via.placeholder.com/150"
  },
  {
    id: 5,
    name: "Peace Lily",
    category: "Flowering",
    price: 30,
    image: "https://via.placeholder.com/150"
  },
  {
    id: 6,
    name: "Orchid",
    category: "Flowering",
    price: 35,
    image: "https://via.placeholder.com/150"
  }
];

function ProductList() {
  return (
    <div>
      <h1>Plants</h1>

      <nav>
        <a href="/">Home</a> |
        <a href="/plants"> Plants </a>|
        <a href="/cart"> Cart </a>
      </nav>

      {plants.map((plant) => (
        <div key={plant.id}>
          <img src={plant.image} alt={plant.name} />
          <h3>{plant.name}</h3>
          <p>{plant.category}</p>
          <p>${plant.price}</p>
          <button>Add To Cart</button>
        </div>
      ))}
    </div>
  );
}

export default ProductList;