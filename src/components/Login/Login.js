import { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import LoadingSpinner from "../UI/LoadingSpinner";

import classes from "./Login.module.css";
import styles from "../UI/LoadingSpinner.module.css";

const Login = (props) => {
  const [isLogin, setIsLogin] = useState(true);
  const [userId, setUserId] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const history = useHistory();

  const userIdOnChangeHandler = (event) => {
    const enteredUserId = event.target.value;

    setUserId(enteredUserId);
  };

  const emailOnChangeHandler = (event) => {
    const enteredEmail = event.target.value;

    setEmail(enteredEmail);
  };

  const passwordOnChangeHandler = (event) => {
    const enteredPassword = event.target.value;
    setPassword(enteredPassword);
  };

  const switchAuthHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();

    setIsLoading(true);
    if (isLogin) {
      axios
        .post("http://localhost:3001/login", {
          userId: userId,
          email: email,
          password: password,
        })
        .then((response) => {
          console.log(response);
          if (response) {
            console.log(response.data.accessToken);
            localStorage.setItem("token_id", response.data.accessToken);
            localStorage.setItem("id", response.data.user_id);

            history.push("/dashboard");
          }
        })
        .catch(function (error) {
          console.log(error);
          setError(true);
        });
    } else {
      axios
        .post("http://localhost:3001/register", {
          userId: userId,
          email: email,
          password: password,
        })
        .then((response) => {
          console.log(response);
          if (response) {
            setIsLogin(true);
          }
        })
        .catch(function (error) {
          console.log(error);
          setError(true);
        });
    }

    setIsLoading(false);
  };

  let signal;
  if (error) {
    signal = <p>Something Went Wrong ...</p>;
  }

  return (
    <main>
      <form className={classes.auth} onSubmit={formSubmitHandler}>
        <h1>{isLogin ? "Login" : "Sign Up"}</h1>

        {isLoading && (
          <div className={styles.loading}>
            <LoadingSpinner />
          </div>
        )}

        <div className={classes.control}>
          <label htmlFor="userId_input">User ID</label>
          <input
            type="text"
            id="userId_input"
            required
            onChange={userIdOnChangeHandler}
            value={userId}
          />
        </div>

        <div className={classes.control}>
          <label htmlFor="email_input">Email</label>
          <input
            type="email"
            id="email_input"
            required
            onChange={emailOnChangeHandler}
            value={email}
          />
        </div>

        <div className={classes.control}>
          <label htmlFor="password_input">Password</label>
          <input
            type="password"
            id="password_input"
            required
            onChange={passwordOnChangeHandler}
            value={password}
          />
        </div>

        <div className={classes.actions}>
          <button type="submit">{isLogin ? "Login" : "Sign Up"}</button>

          <button
            type="button"
            onClick={switchAuthHandler}
            className={classes.toggle}
          >
            {isLogin ? "Create New Account" : "Login with Existing Account"}
          </button>
        </div>
        {signal}
      </form>
    </main>
  );
};

export default Login;
