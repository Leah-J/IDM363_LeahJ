import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Shop from "./components/pages/Shop";

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
      </Routes>
    </div>
  );
}

export default App;
