function Postcard(props) {
  return (
    <div
      style={{
        border: "2px solid black",
        padding: "15px",
        margin: "10px",
        width: "220px",
        borderRadius: "10px",
      }}
    >
      <h2>{props.name}</h2>
      <p>Price: ₹{props.price}</p>
    </div>
  );
}

export default Postcard;