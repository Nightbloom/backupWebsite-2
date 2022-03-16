import { BrowserRouter, Route } from "react-router-dom"
import Navbar from "./components/Navbar";
import Home from './pages/Home';
import Product from './pages/Product';
import Cart from './pages/Cart';
import Checkout from "./pages/Checkout";
import Footer from "./components/Footer";
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Route path="/" exact component={Home} />
      <Route path="/product/:id?" component={Product} />
      <Route path="/cart/:id?" component={Cart} />
      <Route path="/checkout/:id?" component={Checkout} />
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
