import { Fragment } from "react";
import mealsImage from "../../assets/buffet.jpg"
import classes from "./Header.module.css"
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
    return <Fragment>
        <header className={classes.header}>
        <h1>SierraMeals</h1>
        <HeaderCartButton onClick={props.onShowCart}/>
    </header>
      <div className={classes['main-image']}>
          <img src={mealsImage} alt="An table full of delicious food!" />
    </div>
  </Fragment>;
};

export default Header;