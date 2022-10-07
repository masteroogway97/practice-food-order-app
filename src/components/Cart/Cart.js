import styles from "./Cart.module.css";

const Cart = (props) => {
  const cartItems = (
    <ul className={styles['cart-items']}>
      {[
        {
          id: "c1",
          name: "Sushi",
          amount: 2,
          price: 12.99,
        },
      ].map((item) => (
        <li>{item.name}</li>
      ))}
    </ul>
  );

  return (
    <div>
      {/* cart items */}
      {cartItems}
      {/* div for totalAmount */}
      <div className={styles.total}>
        <span>Total Amount</span>
        <span>35.62</span>
      </div>
      {/* div for action for the cart */}
      <div className={styles.actions}>
        <button className={styles['button--alt']}>Close</button>
        <button className={styles.button}>Order now!</button>
      </div>
    </div>
  );
};

export default Cart;
