import { BrowserRouter, Route } from "react-router-dom"
import Navbar from "./components/Navbar";
import Home from './pages/Home';
import Product from './pages/Product';
import Cart from './pages/Cart';
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Route path="/" exact component={Home} />
      <Route path="/product/:id?" component={Product} />
      <Route path="/cart/:id?" component={Cart} />
    </BrowserRouter>
  );
}

export default App;
