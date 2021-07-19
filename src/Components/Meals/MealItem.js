import { useContext } from "react";
import MealItemForm from "./MealItemForm";
import Classes from "./MealItem.module.css";
import CartContext from "../../Store/cart-context";

const MealItem = (props) => {
  const price = `$${props.price.toFixed(2)}`;

  const ctx = useContext(CartContext);

  const amountHandlerIn = (amount) => {
    ctx.addItem({
      name: props.name,
      price: props.price,
      amount: amount,
      id: props.id,
    });
  };

  return (
    <li className={Classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={Classes.discription}>{props.discription}</div>
        <div className={Classes.price}>{price}</div>
      </div>
      <div>
        <MealItemForm amountSend={amountHandlerIn} />
      </div>
    </li>
  );
};

export default MealItem;
