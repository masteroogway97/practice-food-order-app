import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";
import { useContext } from "react";
import Cartcontext from "../../store/cart-context";

const HeaderCartButton = (props) => {
  const cartContext = useContext(Cartcontext);

  const numOfCartItems = cartContext.items.reduce((currValue, item) => {
    return currValue + item.amount;
  }, 0);

  return (
    <button className={classes.button} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;
