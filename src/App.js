import React, { useEffect, useState } from "react";

function App() {
  const [position, setPosition] = useState({});
  useEffect(_ => {
    navigator.geolocation.getCurrentPosition(
      ({ coords }) => {
        setPosition(coords);
      },
      error => console.log(error),
      {
        enableHighAccuracy: true,
        timeout: 5000
      }
    );
  }, []);
  return (
    <div className="App">
      <p style={{ textAlign: "center", fontWeight: "bold", fontSize: 20 }}>
        getCurrentPosition - O coisa
      </p>

      <p style={{ textAlign: "center", fontWeight: "bold", fontSize: 20 }}>
        {" "}
        Latitude: {position.latitude}{" "}
      </p>
      <p style={{ textAlign: "center", fontWeight: "bold", fontSize: 20 }}>
        {" "}
        Longitude: {position.longitude}{" "}
      </p>
    </div>
  );
}

export default App;
