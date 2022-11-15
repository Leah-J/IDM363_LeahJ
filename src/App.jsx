import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Shop from "./components/pages/Shop";
import Cart from "./components/pages/Cart";
import Admin from "./components/pages/Admin";
import { StateContextProvider } from "./store.jsx";

function App() {
  //const state = useContext(StateContext);

  // useEffect(() => {
  //   console.log(state);
  //   console.log(state.decks);
  // }, [state]);

  return (
    <StateContextProvider>
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
                  <p>Your cart is empty</p>
                </div>
              </Cart>
            }
          />
          <Route
            path="/admin"
            element={
              <Admin>
                <div>
                  <p>Haihaihaihaihai</p>
                </div>
              </Admin>
            }
          />
          <Route
            path="*"
            element={
              <Cart>
                <div>
                  <p>Error: This page doesn't exist!</p>
                </div>
              </Cart>
            }
          />
        </Routes>
      </div>
    </StateContextProvider>
  );
}

export default App;
