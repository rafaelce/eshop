import React from "react";
import "./Home.css";
import Product from "./Product.js";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          src="https://www.x-cart.com/wp-content/uploads/2019/01/ecommerce-768x278.jpg"
          alt=""
          className="home__image"
        />
        <div className="home__row">
          <Product
            title="Bennett Mystic 15.6 inch Laptop Shoulder Messenger Sling Office Bag,
            Water Repellent Fabric for Men and Women (Blue)"
            price="30"
            image="https://images-na.ssl-images-amazon.com/images/I/71mEsHyzSCL._SL1000_.jpg"
            rating={5}
          />
          <Product
            title="Bennett Mystic 15.6 inch Laptop Shoulder Messenger Sling Office Bag,
            Water Repellent Fabric for Men and Women (Blue)"
            price="30"
            image="https://images-na.ssl-images-amazon.com/images/I/71mEsHyzSCL._SL1000_.jpg"
            rating={5}
          />
        </div>
        <div className="home__row">
          <Product
            title="Bennett Mystic 15.6 inch Laptop Shoulder Messenger Sling Office Bag,
            Water Repellent Fabric for Men and Women (Blue)"
            price="30"
            image="https://images-na.ssl-images-amazon.com/images/I/71mEsHyzSCL._SL1000_.jpg"
            rating={5}
          />
          <Product
            title="Bennett Mystic 15.6 inch Laptop Shoulder Messenger Sling Office Bag,
            Water Repellent Fabric for Men and Women (Blue)"
            price="30"
            image="https://images-na.ssl-images-amazon.com/images/I/71mEsHyzSCL._SL1000_.jpg"
            rating={5}
          />
          <Product
            title="Bennett Mystic 15.6 inch Laptop Shoulder Messenger Sling Office Bag,
            Water Repellent Fabric for Men and Women (Blue)"
            price="30"
            image="https://images-na.ssl-images-amazon.com/images/I/71mEsHyzSCL._SL1000_.jpg"
            rating={5}
          />
        </div>
        <div className="home__row">
          <Product
            title="Bennett Mystic 15.6 inch Laptop Shoulder Messenger Sling Office Bag,
            Water Repellent Fabric for Men and Women (Blue)"
            price="30"
            image="https://images-na.ssl-images-amazon.com/images/I/71mEsHyzSCL._SL1000_.jpg"
            rating={5}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
