import React from "react";

function Map() {
  const data = [
    {
      id: 1,
      name: "SAHIL",
      age: 22,
    },
    {
      id: 2,
      name: "ASHU",
      age: 18,
    },
    {
      id: 3,
      name: "CHARU",
      age: 15,
    },
  ];

  return (
    <div>
      <div
        style={{
          textAlign: "center",
          padding: 10,
        }}
      >
        ..MAP..
      </div>
      <div>
        {data.map((item) => (
          <div key={item.id}>
            <div
              style={{
                padding: 10,
              }}
            >
              ID:{item.id}
            </div>
            <div
              style={{
                padding: 10,
              }}
            >
              Name:{item.name}
            </div>
            <div
              style={{
                padding: 10,
              }}
            >
              Age:{item.age}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Map;
