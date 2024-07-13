import React from "react";
import "./FashionBattles.css";

const battles = [
  {
    id: 1,
    title: "Summer Style Showdown",
    description: "Top influencers battle it out with their best summer outfits.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWkbCEUov_GZUIVTX38BndbkAzVpOUXyKKhg&s",
  },
  {
    id: 2,
    title: "Winter Wardrobe Wars",
    description: "Who has the coziest and most stylish winter look?",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnDjjDbTU0gG-0WwebluKJMZRUyUZwi0VZ7w&s",
  },
  {
    id: 3,
    title: "Streetwear Faceoff",
    description: "Influencers compete with their most eye-catching streetwear.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgQHiCr4GfbS7V_fzvf_Uvq8AZYjHJgaw97Q&s",
  },
  {
    id: 4,
    title: "Formal Fashion Frenzy",
    description: "The best formal looks go head-to-head in this battle.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZ6b1cEV65YcHsuzFZqzQgHCa7RQ7d2vGRAi9DKR_G7Z6WXLePieJsrSgVTr_Gwx_jobI&usqp=CAU",
  },
];

const FashionBattle = () => {
  return (
    <div className="fashion-battle-container">
      <div className="hero-section">
        <h1>Fashion Battles</h1>
        <p>Witness the ultimate face-off between top fashion influencers!</p>
      </div>
      <div className="battle-cards">
        {battles.map((battle) => (
          <div className="battle-card" key={battle.id}>
            <img src={battle.image} alt={battle.title} />
            <div className="battle-card-content">
              <h2>{battle.title}</h2>
              <p>{battle.description}</p>
              <button className="vote-button">Vote Now</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FashionBattle