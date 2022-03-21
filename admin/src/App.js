import { BrowserRouter, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Products from "./pages/Products";
import Footer from "./components/Footer";
import { Home } from "./components/Home";
import Payment from "./pages/Payment";
import TestProducts from "./pages/TestProducts";
import Caribbean_tikki from "./components/caribbean_tikki/caribbean_tikki";
import Belgium_nutty from "./components/belgium_nutty/belgium_nutty";
import Black_rice_payassam from "./components/black_rice_payassam/black_rice_payassam";
import Kajjor_laddu from "./components/kajjor_laddu/kajjor_laddu";
import Bulgar_sugarcane_halwa from "./components/bulgar_sugarcane_halwa/bulgar_sugarcane_halwa";
import Combo1 from "./components/combo1/combo1";

function App() {
  return (
    // <Combo1 />
    // <Bulgar_sugarcane_halwa />
    // <Kajjor_laddu />
    // <Black_rice_payassam />
    // <Belgium_nutty />
    // <Caribbean_tikki />
    <BrowserRouter>
      <Navbar />
      <Route path="/" exact component={Home} />
      <Route path="/products" component={TestProducts} />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
