import { Fragment, useState } from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";

function App() {
  const [cartShown, setCartShown] = useState(false);

  const showCartHandler = () => {
    setCartShown(true)
  }
  
  const hideCartHandler = () => {
    setCartShown(false)
  }

  return (
    <Fragment>
      {cartShown && <Cart onCloseCart={hideCartHandler}/>}
      <Header onShowCart={showCartHandler}/>
      <main>
        <Meals />
      </main>
    </Fragment>
  );
}

export default App;
