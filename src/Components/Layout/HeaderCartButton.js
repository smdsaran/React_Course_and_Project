import { useContext, useEffect, useState } from "react";
import Classes from "./HeaderCartButton.module.css";
import CartIcon from "../Cart/CartIcon";
import CartContext from "../../Store/cart-context";

const HeaderCartButton = (props) => {
  const [highlighted, setHighlighted] = useState(false);
  const cartCtx = useContext(CartContext);
  const noOfItemsInCart = cartCtx.items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  const btnClasses = `${Classes.button} ${highlighted ? Classes.bump : ""}`;
  const { items } = cartCtx;

  useEffect(() => {
    if (items === 0) {
      return;
    }

    setHighlighted(true);

    const timer = setTimeout(() => {
      setHighlighted(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [items]);

  return (
    <button className={btnClasses} onClick={props.onShow}>
      <span className={Classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={Classes.badge}>{noOfItemsInCart}</span>
    </button>
  );
};

export default HeaderCartButton;
