import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./components/pages/Home";
import About from "./components/pages/About";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="about"
          element={
            <About>
              <div>
                <p>This is the about page</p>
              </div>
            </About>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
