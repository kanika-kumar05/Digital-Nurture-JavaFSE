import React from "react";
import FlightDetails from "./FlightDetails";

function Guest() {
  return (
    <div>
      <h2>Welcome Guest</h2>
      <p>You can browse available flights.</p>

      <FlightDetails />
    </div>
  );
}

export default Guest;