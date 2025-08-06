import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/Home";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductDetails from "./pages/ProductDetails";

function App() {
  return (
    <div>
      <Router>
        <div>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/search" element={<Home />} />
            <Route path="/product/:id" element={<ProductDetails />} />
          </Routes>
        </div>
      </Router>
      <Footer />
    </div>
  );
}
export default App;
