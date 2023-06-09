import React from "react";
import "./Checkout.css";
import CheckoutProduct from "./CheckoutProduct";
import Subtotal from "./Subtotal";

function Checkout() {
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt=""
          className="checkout__ad"
        />
        <h2 className="checkout__title">Your Shopping Basket</h2>
        <CheckoutProduct
          title="Bennett Mystic 15.6 inch Laptop Shoulder Messenger Sling Office Bag,
            Water Repellent Fabric for Men and Women (Blue)"
          price="30"
          image="https://images-na.ssl-images-amazon.com/images/I/71mEsHyzSCL._SL1000_.jpg"
          rating={3}
        />
        <CheckoutProduct
          title="Bennett Mystic 15.6 inch Laptop Shoulder Messenger Sling Office Bag,
            Water Repellent Fabric for Men and Women (Blue)"
          price="30"
          image="https://images-na.ssl-images-amazon.com/images/I/71mEsHyzSCL._SL1000_.jpg"
          rating={3}
        />
      </div>
      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
