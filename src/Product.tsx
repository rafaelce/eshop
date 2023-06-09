import React, { Component } from "react";
import "./Product.css";

interface Props {
  title: String;
  price: String;
  image: String;
  rating: number;
}

function Product({ title, price, image, rating }: Props) {
  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill("")
            .map((_, i) => (
              <p>⭐</p>
            ))}
        </div>
      </div>

      <img src={`${image}`} alt="product-image" />

      <button>Add to Basket</button>
    </div>
  );
}

export default Product;
