import React from "react";

function CartItem() {
  return (
    <div>
      <h1>Shopping Cart</h1>

      <p>Total Items: 0</p>
      <p>Total Cost: $0</p>

      <button>+</button>
      <button>-</button>
      <button>Remove</button>

      <br />
      <br />

      <button>Coming Soon</button>

      <br />
      <br />

      <a href="/plants">Continue Shopping</a>
    </div>
  );
}

export default CartItem;