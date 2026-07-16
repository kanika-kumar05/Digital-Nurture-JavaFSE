import React from "react";

function ListofPlayers() {

  const players = [
    { name: "Virat", score: 95 },
    { name: "Rohit", score: 85 },
    { name: "Gill", score: 68 },
    { name: "Rahul", score: 72 },
    { name: "Pant", score: 55 },
    { name: "Hardik", score: 88 },
    { name: "Jadeja", score: 65 },
    { name: "Ashwin", score: 78 },
    { name: "Bumrah", score: 45 },
    { name: "Shami", score: 81 },
    { name: "Siraj", score: 60 }
  ];

  const below70 = players.filter(player => player.score < 70);

  return (
    <div>
      <h2>List of Players</h2>

      <h3>All Players</h3>

      {players.map((player, index) => (
        <p key={index}>
          {player.name} - {player.score}
        </p>
      ))}

      <h3>Players with Score Below 70</h3>

      {below70.map((player, index) => (
        <p key={index}>
          {player.name} - {player.score}
        </p>
      ))}
    </div>
  );
}

export default ListofPlayers;