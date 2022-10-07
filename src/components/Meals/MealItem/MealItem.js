import classes from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";

const MealItem = (props) => {
  const price = `$${props.price.toFixed(2)}`
  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        {/* Render a simple form to accept the # of meals the User wants to add to cart */}
        <MealItemForm id={props.id}/>
      </div>
    </li>
  );
};

export default MealItem;
