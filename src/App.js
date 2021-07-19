import { useState } from "react";
import Header from "./Components/Layout/Header";
import Meals from "./Components/Meals/Meals";
import Cart from "./Components/Cart/Cart";
import CartProvider from "./Store/CartProvider";

function App() {
  const [cartShown, setCartShown] = useState(false);

  const showCart = () => {
    setCartShown(true);
  };

  const hideCart = () => {
    setCartShown(false);
  };
  return (
    <CartProvider>
      {cartShown === true && <Cart onClose={hideCart} />}
      <Header onShow={showCart} />
      <Meals />
    </CartProvider>
  );
}

export default App;
