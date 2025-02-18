import React from "react";
import { Link } from "react-router-dom";
import FeaturedProducts from "./FeaturedProducts";
import "./css/Home.css";

const Home = () => {
  return (
    <main className="home-container">
      <section className="hero-section">
        <div className="hero-text">
          <h1>We are changing the way people shop</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tempore
            repellat explicabo.
          </p>
          <Link to="/products" className="btn">
            OUR PRODUCTS
          </Link>
        </div>
        <div className="hero-images">
          <img
            src="https://iconx-studios.com/cdn/shop/files/Dark-beige-VELVET_Bloom_L_view06_e8fec63a-eddb-4a8d-9286-a59485d7ac84.jpg?v=1702675157"
            alt="sofa"
            className="image-1"
          />
          <img
            src="https://tomschneider.co.uk/cdn/shop/products/Crest_dining_table_clr00100_walnut_tom_schneider_a5689a14-fe9a-4724-b221-3d78ea61a092_800x.jpg?v=1678900173"
            alt="table"
            className="image-2"
          />
        </div>
      </section>
      <FeaturedProducts />
    </main>
  );
};

export default Home;
