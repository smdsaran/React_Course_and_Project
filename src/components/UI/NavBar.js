import { Fragment } from "react";
import classes from "./NavBar.module.css";
import { useHistory } from "react-router-dom";

const NavBar = () => {
  const history = useHistory();

  const logoutBtnHandler = () => {
    localStorage.removeItem("id");
    localStorage.removeItem("token_id");

    history.push("/login");
  };

  return (
    <Fragment>
      <header className={classes.header}>
        <h1>Dashboard</h1>
        <button onClick={logoutBtnHandler}>Logout</button>
      </header>
    </Fragment>
  );
};

export default NavBar;
