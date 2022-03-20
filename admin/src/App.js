import { BrowserRouter, Route } from "react-router-dom"
import Navbar from "./components/Navbar";
import Product from './pages/Product';
import Cart from './pages/Cart';
import Checkout from "./pages/Checkout";
import Products from "./pages/Products";
import Footer from "./components/Footer";
import { Home } from "./components/Home";
import Payment from "./pages/Payment";
import TestProcuts from "./pages/TestProducts"

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Route path="/" exact component={Home} />
      <Route path='/products' component = {Products}/>
      <Route path="/product/:id?" component={Product} />
      <Route path="/cart/:id?" component={Cart} />
      <Route path="/checkout/:id?" component={Checkout} />
      <Route path="/payment" component={Payment} />
      <Route path="/test" component={TestProcuts} />

      <Footer/>
    </BrowserRouter>
  );
}

export default App;
