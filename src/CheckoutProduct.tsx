import React from "react";
import "./CheckoutProduct.css";

interface Props {
  title: String;
  price: String;
  image: String;
  rating: number;
}

function CheckoutProduct({ title, price, image, rating }: Props) {
  return (
    <div className="checkoutProduct">
      <img src={`${image}`} alt="" className="checkoutProduct__image" />
      <div className="product__info">
        <div className="checkoutProduct__title">
          <p>{title}</p>
        </div>
        <p className="checkoutProduct__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="checkoutProduct__rating">
          {Array(rating)
            .fill("")
            .map((_, i) => (
              <p>⭐</p>
            ))}
        </div>

        <button>Remove from Basket</button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
