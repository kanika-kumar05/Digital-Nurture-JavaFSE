import React from "react";
import officeImage from "./images/office.jpg";

function App() {

  const office = {
    name: "Regus Business Center",
    rent: 55000,
    address: "Bangalore, Karnataka"
  };

  const officeList = [
    {
      id: 1,
      name: "Regus Business Center",
      rent: 55000,
      address: "Bangalore"
    },
    {
      id: 2,
      name: "SmartWorks",
      rent: 75000,
      address: "Hyderabad"
    },
    {
      id: 3,
      name: "WeWork",
      rent: 90000,
      address: "Mumbai"
    }
  ];

  return (
    <div style={{ padding: "20px" }}>

      <h1>Office Space Rental App</h1>

      <img
        src={officeImage}
        alt="Office Space"
        width="400"
        height="250"
      />

      <h2>Office Details</h2>

      <p><b>Name:</b> {office.name}</p>

      <p
        style={{
          color: office.rent < 60000 ? "red" : "green"
        }}
      >
        <b>Rent:</b> ₹{office.rent}
      </p>

      <p><b>Address:</b> {office.address}</p>

      <hr />

      <h2>Available Office Spaces</h2>

      {
        officeList.map((item) => (
          <div
            key={item.id}
            style={{
              border: "1px solid black",
              padding: "10px",
              marginBottom: "10px"
            }}
          >
            <h3>{item.name}</h3>

            <p
              style={{
                color: item.rent < 60000 ? "red" : "green"
              }}
            >
              <b>Rent:</b> ₹{item.rent}
            </p>

            <p><b>Address:</b> {item.address}</p>

          </div>
        ))
      }

    </div>
  );
}

export default App;