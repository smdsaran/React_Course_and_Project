import React, { useContext, useState } from "react";
import Modal from "../UI/Modal";
import CartContext from "../../Store/cart-context";
import Classes from "./Cart.module.css";
import CartItem from "./CartItem";
import CartForm from "./CartForm";

const Cart = (props) => {
  const [order, setOrder] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const cartCtx = useContext(CartContext);

  const removeItem = (id) => {
    cartCtx.removeItem(id);
  };
  const addItem = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };

  const cartItem = (
    <ul className={Classes["cart-items"]}>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onAdd={addItem.bind(null, item)}
          onRemove={removeItem.bind(null, item.id)}
        />
      ))}
    </ul>
  );

  const totalAmount = cartCtx.totalAmount.toFixed(2);
  const hasItem = cartCtx.items.length > 0;

  const sendDataHandler = async (userdata) => {
    setIsSubmitting(true);

    const response = await fetch(
      "https://react-http-e085c-default-rtdb.firebaseio.com/Orders.json",
      {
        method: "POST",
        body: JSON.stringify({
          ...userdata,
          items: cartCtx.items,
          totalAmount: totalAmount,
        }),
        headers: {
          content_type: "application/json",
        },
      }
    );

    const data = await response.json();
    console.log(data);

    setIsSubmitting(false);
    setSubmitted(true);
    cartCtx.clearItem();
  };

  const orderClickHandler = () => {
    setOrder(true);
  };

  const orderClosebtn = (
    <div className={Classes.actions}>
      <button className={Classes["button--alt"]} onClick={props.onClose}>
        Close
      </button>
      {hasItem && (
        <button className={Classes.button} onClick={orderClickHandler}>
          Order
        </button>
      )}
    </div>
  );

  const orderDetails = (
    <React.Fragment>
      {!order && cartItem}
      <div className={Classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>

      {order && (
        <CartForm onCancel={props.onClose} userData={sendDataHandler} />
      )}

      {!order && orderClosebtn}
    </React.Fragment>
  );

  const submittingView = <p>Submitting Order Details.</p>;

  const submittedView = (
    <React.Fragment>
      <p>Submitted Order Details. Delivery within 8 Days.</p>
      <div className={Classes.actions}>
        <button className={Classes.button} onClick={props.onClose}>
          Close
        </button>
      </div>
    </React.Fragment>
  );

  return (
    <Modal onClose={props.onClose}>
      {!isSubmitting && !submitted && orderDetails}
      {isSubmitting && !submitted && submittingView}
      {submitted && !isSubmitting && submittedView}
    </Modal>
  );
};

export default Cart;
