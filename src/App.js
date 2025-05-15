import Home from "./component/home/Home.jsx";
import ProductDetail from "./component/productDetail/ProductDetail.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products/:slug" element={<ProductDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
