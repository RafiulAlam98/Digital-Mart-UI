import { faDollarSign } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Cart from "../Cart/Cart";

const CartModal = ({ cart, children, handleRemove }) => {
  const dollarSign = <FontAwesomeIcon icon={faDollarSign} />;
  let total = 0;
  let totalQuantity = 0;
  for (const product of cart) {
    if (!product.quantity) {
      product.quantity = 1;
    }
    total = total + product.price * product.quantity;
    totalQuantity = totalQuantity + product.quantity;
  }
  const shipping = total > 0 ? 15 : 0;
  const tax = (total + shipping) * 0.1;
  const grandTotal = total + shipping + tax;

  return (
    <React.Fragment>
      <input type="checkbox" id="cart-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="cart-modal"
            className="btn btn-sm btn-circle border-none hover:bg-white bg-white text-red-500 absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className=" text-amber-600 font-semibold text-2xl mb-4 ">
            Shopping Cart
          </h3>
          {cart.map((p) => (
            <Cart cartProduct={p} handleRemove={handleRemove} key={p._id} />
          ))}

          <h2 className="text-sm font-semibold">Sub Total</h2>
          <h2 className="text-sm mb-5 font-semibold text-blue-500">
            {grandTotal.toFixed(2)} {dollarSign} [USD]
          </h2>
          {children}
        </div>
      </div>
    </React.Fragment>
  );
};

export default CartModal;

