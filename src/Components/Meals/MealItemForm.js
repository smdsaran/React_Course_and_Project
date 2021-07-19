import { useRef, useState } from "react";
import Classes from "./MealItemForm.module.css";
import Input from "../UI/Input";

const MealItemForm = (props) => {
  const [isValidAmount, setIsValidAmount] = useState(true);
  const EnterAmountRef = useRef();

  const enteredAmountHandler = (event) => {
    event.preventDefault();

    const enteredAmount = EnterAmountRef.current.value;
    console.log(enteredAmount);
    const enteredAmountNumber = +enteredAmount;

    if (enteredAmountNumber < 1 || enteredAmountNumber > 5) {
      setIsValidAmount(false);
      return;
    }
    props.amountSend(enteredAmountNumber);
  };

  return (
    <form className={Classes.form} onSubmit={enteredAmountHandler}>
      <Input
        ref={EnterAmountRef}
        label="Amount"
        input={{
          id: "amount",
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>Add</button>
      {!isValidAmount && <p>Enter Valid Amount 1-5 .</p>}
    </form>
  );
};

export default MealItemForm;
