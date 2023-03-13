import { Fragment } from "react";

import HeaderCartButton from "./HeaderCartButton";
// import mealsImage from "../../assets/Meals-008.jpg";
import "./Header.css";
import image from "../../assets/Meals-008.jpg";

const Header = (props) => {
  return (
    <Fragment>
      <header className="header">
        <h1>ReactMeals</h1>
        <HeaderCartButton />
      </header>
      <div className="main-image">
        <img src={image} alt="A table full of delicious food!" />
      </div>
    </Fragment>
  );
};

export default Header;
