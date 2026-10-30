import { useMemo } from "react";
import { useTheme } from "../context/ThemeContext";

function Cart({ cart, dispatch }) {
  const { theme } = useTheme();

  const total = useMemo(() => {
    return cart.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
  }, [cart]);

  return (
    <section className={`cart-section ${theme}`}>
      <h2>Shopping Cart</h2>

      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {cart.map((item) => (
            <div className="cart-item" key={item.id}>
              <div>
                <h3>{item.name}</h3>
                <p>Rs. {item.price.toLocaleString("en-PK")}</p>
                <p>Quantity: {item.quantity}</p>
              </div>

              <div className="cart-actions">
                <button
                  onClick={() =>
                    dispatch({
                      type: "CHANGE_QUANTITY",
                      payload: { id: item.id, change: -1 },
                    })
                  }
                >
                  −
                </button>

                <button
                  onClick={() =>
                    dispatch({
                      type: "CHANGE_QUANTITY",
                      payload: { id: item.id, change: 1 },
                    })
                  }
                >
                  +
                </button>

                <button
                  onClick={() =>
                    dispatch({
                      type: "REMOVE_ITEM",
                      payload: item.id,
                    })
                  }
                >
                  Remove
                </button>
              </div>
            </div>
          ))}

          <h3>
            Total: Rs. {total.toLocaleString("en-PK")}
          </h3>

          <button
            className="clear-button"
            onClick={() => dispatch({ type: "CLEAR_CART" })}
          >
            Clear Cart
          </button>
        </>
      )}
    </section>
  );
}

export default Cart;