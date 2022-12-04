import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Shop from "./components/pages/Shop";
import Cart from "./components/pages/Cart";
import Admin from "./components/pages/Admin";
import Layout from "./components/layouts/Layout";
import { StateContextProvider } from "./store.jsx";
import ItemPage from "./components/pages/ItemPage";

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
          <Route path="/about" element={<About />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/admin" element={<Admin />} />
          <Route
            path="*"
            element={
              <Layout>
                <div>
                  <p>Error: This page doesn't exist!</p>
                </div>
              </Layout>
            }
          />
          <Route path="/shop/:id" element={<ItemPage />} />
        </Routes>
      </div>
    </StateContextProvider>
  );
}

export default App;
