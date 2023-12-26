import React, { useState } from "react";
import data from "./data.json";

export default function Restaurantnm() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredData = data.filter((obj) =>
    obj.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div style={{marginTop:"100px"}}>
      <input
        type="text"
        placeholder="Search by restaurant name"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      {filteredData.map((obj) => (
        <div key={obj._id.$oid}>
          <h1>{obj.name}</h1>
          <h2>{obj.address}</h2>
        </div>
      ))}
    </div>
  );
}