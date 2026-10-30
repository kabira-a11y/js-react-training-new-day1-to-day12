import { useReducer } from "react";
import cartReducer from "./reducers/cartReducer";
import { ThemeProvider, useTheme } from "./context/ThemeContext";
import Header from "./components/Header";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import "./App.css";

function ShopContent() {
  const [cart, dispatch] = useReducer(cartReducer, []);
  const { theme } = useTheme();

  return (
    <div className={`app ${theme}`}>
      <Header />

      <main className="shop-layout">
        <ProductList dispatch={dispatch} />
        <Cart cart={cart} dispatch={dispatch} />
      </main>
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <ShopContent />
    </ThemeProvider>
  );
}

export default App;