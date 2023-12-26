import data from "./data.json" // Make sure to include the correct file extension, e.g., ".js"

// Add the 'function' keyword and fix the component definition
export default function Restaurant() {
  return (
    <div>
      {data.map((obj) => (
        <div
          key={obj._id.$oid}
          style={{
            border: "1px solid red"
          }}
        >
          {" "}
        
          <h1>{obj.name}</h1>
          <h2>{obj.address}</h2>
        </div>
      ))}
    </div>
  );
}