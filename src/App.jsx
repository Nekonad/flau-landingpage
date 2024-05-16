import Hero from "./components/Hero.jsx";
import Navbar from "./components/Navbar.jsx";
import Product from "./components/Product.jsx";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <div className="max-w-7xl mx-10 md:mx-40">
        <Product />
      </div>
    </>
  );
};

export default App;
