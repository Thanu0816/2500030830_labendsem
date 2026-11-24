import Postercard from "./Postercard";

function App() {
  return (
    <div>
      <h1>Product Catalog</h1>

      <Postercard name="Laptop" price={50000} />
      <Postercard name="Smartphone" price={25000} />
      <Postercard name="Headphones" price={3000} />
      <Postercard name="Smart Watch" price={5000} />
    </div>
  );
}

export default App;
