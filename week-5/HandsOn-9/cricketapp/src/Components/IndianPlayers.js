import React from "react";

function IndianPlayers() {

  const players = [
    "Virat",
    "Rohit",
    "Gill",
    "Rahul",
    "Pant",
    "Hardik",
    "Jadeja",
    "Ashwin"
  ];

  const [odd1, even1, odd2, even2, odd3, even3, odd4, even4] = players;

  const T20players = [
    "Virat",
    "Rohit",
    "Hardik"
  ];

  const RanjiPlayers = [
    "Pujara",
    "Rahane",
    "Saha"
  ];

  const mergedPlayers = [...T20players, ...RanjiPlayers];

  return (
    <div>

      <h2>Odd Team Players</h2>

      <p>{odd1}</p>
      <p>{odd2}</p>
      <p>{odd3}</p>
      <p>{odd4}</p>

      <h2>Even Team Players</h2>

      <p>{even1}</p>
      <p>{even2}</p>
      <p>{even3}</p>
      <p>{even4}</p>

      <h2>Merged Players</h2>

      {mergedPlayers.map((player, index) => (
        <p key={index}>{player}</p>
      ))}

    </div>
  );
}

export default IndianPlayers;