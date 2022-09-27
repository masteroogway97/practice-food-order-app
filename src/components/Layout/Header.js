import { Fragment } from "react";
import mealsImage from "../../assets/buffet.jpg"
import classes from "./Header.module.css"

const Header = (props) => {
    return <Fragment>
        <header className={classes.header}>
        <h1>SierraMeals</h1>
        <button>Cart</button>
    </header>
      <div className={classes['main-image']}>
          <img src={mealsImage} alt="An table full of delicious food!" />
    </div>
  </Fragment>;
};

export default Header;