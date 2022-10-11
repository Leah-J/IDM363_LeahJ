import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Shop from "./components/pages/Shop";
import Cart from "./components/pages/Cart";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/about"
          element={
            <About>
              <div>
                <p>This is the about page</p>
              </div>
            </About>
          }
        />
        <Route
          path="/shop"
          element={
            <Shop>
              <div>
                <p>This is the shop page</p>
              </div>
            </Shop>
          }
        />
        <Route
          path="/cart"
          element={
            <Cart>
              <div>
                <p>This is the cart page</p>
              </div>
            </Cart>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
