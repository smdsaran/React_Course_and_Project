import useForm from "../hooks/use-form";

const notEmpty = (value) => value.trim() !== "";
const notEmail = (value) => value.includes("@");

const BasicForm = (props) => {
  const {
    enteredValue: enteredFirstName,
    inputIsValid: inputFirstNameIsValid,
    hasError: FNameerror,
    inputChangeHandler: inputFNameChangeHandler,
    inputBlurHandler: inputFNameBlurHandler,
    reset: resetFName,
  } = useForm(notEmpty);

  const {
    enteredValue: enteredLastName,
    inputIsValid: inputLastNameIsValid,
    hasError: LNameerror,
    inputChangeHandler: inputLNameChangeHandler,
    inputBlurHandler: inputLNameBlurHandler,
    reset: resetLName,
  } = useForm(notEmpty);

  const {
    enteredValue: enteredEmail,
    inputIsValid: inputEmailIsValid,
    hasError: Emailerror,
    inputChangeHandler: inputEmailChangeHandler,
    inputBlurHandler: inputEmailBlurHandler,
    reset: resetEmail,
  } = useForm(notEmail);

  let formValid = false;

  if (inputFirstNameIsValid && inputLastNameIsValid && inputEmailIsValid) {
    formValid = true;
  }

  const formSubmitHandler = (event) => {
    event.preventDefault();

    if (!formValid) {
      return;
    }

    resetFName();
    resetLName();
    resetEmail();
  };

  const fNameClasses = FNameerror ? "form-control invalid" : "form-control";
  const lNameClasses = LNameerror ? "form-control invalid" : "form-control";
  const emailClasses = Emailerror ? "form-control invalid" : "form-control";

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="control-group">
        <div className={fNameClasses}>
          <label htmlFor="name">First Name</label>
          <input
            type="text"
            id="name"
            onChange={inputFNameChangeHandler}
            onBlur={inputFNameBlurHandler}
            value={enteredFirstName}
          />
        </div>
        <div className={lNameClasses}>
          <label htmlFor="name">Last Name</label>
          <input
            type="text"
            id="name"
            value={enteredLastName}
            onChange={inputLNameChangeHandler}
            onBlur={inputLNameBlurHandler}
          />
        </div>
      </div>
      <div className={emailClasses}>
        <label htmlFor="name">E-Mail Address</label>
        <input
          type="text"
          id="name"
          onChange={inputEmailChangeHandler}
          onBlur={inputEmailBlurHandler}
          value={enteredEmail}
        />
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
