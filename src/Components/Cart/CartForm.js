import { useRef, useState } from "react";
import classes from "./CartForm.module.css";

const notEmpty = (value) => value.trim() !== "";
const postalCrct = (value) => value.length > 5;

const CartForm = (props) => {
  const [formInputValid, setFormInputValid] = useState({
    name: true,
    street: true,
    postal: true,
    city: true,
  });

  const nameRef = useRef();
  const streetRef = useRef();
  const postalcodeRef = useRef();
  const cityRef = useRef();

  const submitHandler = (e) => {
    e.preventDefault();

    const name = nameRef.current.value;
    const street = streetRef.current.value;
    const postal = postalcodeRef.current.value;
    const city = cityRef.current.value;

    const validName = notEmpty(name);
    const validstreet = notEmpty(street);
    const validcity = notEmpty(city);
    const validPostal = postalCrct(postal);

    setFormInputValid({
      name: validName,
      street: validstreet,
      postal: validPostal,
      city: validcity,
    });

    if (validName && validstreet && validcity && validPostal) {
      props.userData({
        name: name,
        street: street,
        postalCode: postal,
        city: city,
      });
    } else {
      return;
    }
  };

  const nameClasses = `${classes.control} ${
    !formInputValid.name ? classes.invalid : ""
  }`;
  const streetClasses = `${classes.control} ${
    !formInputValid.street ? classes.invalid : ""
  }`;
  const postalClasses = `${classes.control} ${
    !formInputValid.postal ? classes.invalid : ""
  }`;
  const cityClasses = `${classes.control} ${
    !formInputValid.city ? classes.invalid : ""
  }`;

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={nameClasses}>
        <label htmlFor="name">Your Name</label>
        <input type="text" id="name" ref={nameRef} />
        {!formInputValid.name && <p>Enter Valid Name .</p>}
      </div>
      <div className={streetClasses}>
        <label htmlFor="street">Street</label>
        <input type="text" id="street" ref={streetRef} />
        {!formInputValid.street && <p>Enter Valid Street .</p>}
      </div>
      <div className={postalClasses}>
        <label htmlFor="postal">Postal Code</label>
        <input type="text" id="postal" ref={postalcodeRef} />
        {!formInputValid.postal && <p>Enter Valid Postal Code .</p>}
      </div>
      <div className={cityClasses}>
        <label htmlFor="city">City</label>
        <input type="text" id="city" ref={cityRef} />
        {!formInputValid.city && <p>Enter Valid City .</p>}
      </div>
      <div className={classes.actions}>
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button className={classes.submit}>Confirm</button>
      </div>
    </form>
  );
};

export default CartForm;
