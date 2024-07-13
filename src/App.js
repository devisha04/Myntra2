import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/navbar";
import { Shop } from "./pages/shop/shop";
import { Contact } from "./pages/contact";
import { Cart } from "./pages/cart/cart";
import { ShopContextProvider } from "./context/shop-context";
import { BodyShape } from "./components/BodyShape";
import MatchMaker from "./components/MatchMaker"; // Correct import without {}
import GoldMembership from './components/GoldMembership';
import SilverMembership from "./components/SilverMembership";
import  PlatinumMembership  from "./components/PlatinumMembership";
import FashionBattle from "./components/FashionBattles";

function App() {
  return (
    <div className="App">
      <ShopContextProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Shop />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/body-shape" element={<BodyShape />} />
            <Route path="/match-maker" element={<MatchMaker />} />
            <Route path="/gold-membership" element={<GoldMembership />} /> {/* Use element prop */}
            <Route path="/silver-membership" element={<SilverMembership />} /> {/* Use element prop */}
            <Route path="/platinum-membership" element={<PlatinumMembership />} /> {/* Use element prop */}
            <Route path="/fashion-battle" element={<FashionBattle />} /> {/* Use element prop */}
          </Routes>
        </Router>
      </ShopContextProvider>
    </div>
  );
}

export default App;