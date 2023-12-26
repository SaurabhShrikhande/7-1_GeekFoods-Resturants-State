import React, { useState } from "react";
import data from "./data.json";

export default function Restaurantrating() {
  const [searchTerm, setSearchTerm] = useState("");
  const [minRating, setMinRating] = useState(0);

  const filteredData = data.filter(
    (obj) =>
      obj.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      obj.rating >= minRating
  );

  return (
    <div style={{marginTop:"100px", maxWidth:"98vw"}}>

    <div style={{display:"flex" , justifyContent:"space-between", margin:"20px"}}>
        <div>
      <input
        type="text"
        placeholder="Search by restaurant name"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
            </div>

      <div>
      <label>
        Minimum Rating:
        <input
          type="number"
          min={0}
          max={5}
          step={0.5}
          value={minRating}
          onChange={(e) => setMinRating(parseFloat(e.target.value))}
        /> </label>
        </div>
      

      </div>
      {filteredData.map((obj) => (
        <div key={obj._id.$oid} style={{border:"1px solid black", margin:"20px", padding:"0px 20px"}}>
          <h1>{obj.name}</h1>
          <h2>{obj.address}</h2>
          <p>Rating: {obj.rating}</p>
        </div>
      ))}
    </div>
  );
}