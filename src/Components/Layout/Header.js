import React from "react";
import HeaderCartButton from "./HeaderCartButton";
import MealImg from "../../assests/meals.jpg";
import Classes from "./Header.module.css";

const Header = (props) => {
  return (
    <React.Fragment>
      <header className={Classes.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton onShow={props.onShow} />
      </header>
      <div className={Classes["main-image"]}>
        <img src={MealImg} alt="Table with Mea" />
      </div>
    </React.Fragment>
  );
};

export default Header;
