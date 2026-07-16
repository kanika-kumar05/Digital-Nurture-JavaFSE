import React from "react";

function FlightDetails() {

  const flights = [
    {
      id: 1,
      flight: "IndiGo",
      from: "Delhi",
      to: "Mumbai"
    },
    {
      id: 2,
      flight: "Air India",
      from: "Chennai",
      to: "Bangalore"
    },
    {
      id: 3,
      flight: "Vistara",
      from: "Hyderabad",
      to: "Pune"
    }
  ];

  return (
    <div>

      <h3>Flight Details</h3>

      <table border="1" cellPadding="8">

        <thead>
          <tr>
            <th>Flight</th>
            <th>From</th>
            <th>To</th>
          </tr>
        </thead>

        <tbody>

          {flights.map((item) => (
            <tr key={item.id}>
              <td>{item.flight}</td>
              <td>{item.from}</td>
              <td>{item.to}</td>
            </tr>
          ))}

        </tbody>

      </table>

    </div>
  );
}

export default FlightDetails;