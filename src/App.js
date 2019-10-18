import React, { useEffect, useState } from "react";

function App() {
  const [position, setPosition] = useState({});
  useEffect(_ => {
    navigator.geolocation.watchPosition(
      ({ coords }) => {
        setPosition(coords);
      },
      error => console.log(error),
      {
        enableHighAccuracy: true
      }
    );
  }, []);
  return (
    <div className="App">
      <p style={{ textAlign: "center", fontWeight: "bold", fontSize: 20 }}>
        {" "}
        Latitude: {position.latitude}{" "}
      </p>
      <p style={{ textAlign: "center", fontWeight: "bold", fontSize: 20 }}>
        {" "}
        Longitude: {position.longitude}{" "}
      </p>
      <p style={{ textAlign: "center", fontWeight: "bold", fontSize: 20 }}> </p>
    </div>
  );
}

export default App;
