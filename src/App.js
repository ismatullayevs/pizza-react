import "./App.scss";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ProductList from "./components/ProductList";
import ProductPage from "./components/ProductPage";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <div id="app__root">
        <div className="container top">
          <div className="app__top">
            <div className="app__top__chunks left">
              <div className="app__top__chunks__location">
                <i className="fa-solid fa-location-dot"></i>
                <p>Tashkent</p>
              </div>
              <p className="app__top__chunks__check">Check location</p>
              <p>Average Shipping Time: 14 minutes</p>
            </div>
            <div className="app__top__chunks right">
              <a href="." className="app__top__chunks__signup">
                <i className="fas fa-user"></i>
                <p>Sign up</p>
              </a>
            </div>
          </div>
        </div>
        <div className="hr"></div>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />}>
            <Route path="products/:productId" element={<ProductPage />} />
          </Route>
        </Routes>

        <Footer />
      </div>
    </div>
  );
}

export default App;
