import React from "react";
import { Link } from "react-router-dom";
import FeaturedProducts from "./FeaturedProducts";
import "./css/Products.css";
import Product from "./Product";
import SearchFilters from "./SearchFilters";
import { useGlobalContext } from "../context";

const Products = () => {
  const { data, SFprice, SFCategory, SFStore, SFSearchQuery, SFSort } =
    useGlobalContext();
  const filteredData = data.filter((produkt) => {
    return (
      (SFprice === 1000 || produkt.price <= SFprice) && // Ako je cena ≤ filtera
      (SFCategory === "All" || produkt.category === SFCategory) &&
      (SFStore === "All" || produkt.store === SFStore) &&
      (SFSearchQuery === "" ||
        produkt.name.toLowerCase().includes(SFSearchQuery))
    );
  });

  const sortedData = [...filteredData].sort((a, b) => {
    if (SFSort === "a-z") return a.name.localeCompare(b.name);
    if (SFSort === "z-a") return b.name.localeCompare(a.name);
    if (SFSort === "Price inc") return a.price - b.price;
    if (SFSort === "Price dec") return b.price - a.price;
    return 0;
  });

  return (
    <section className="products-page">
      <SearchFilters />
      <div className="products-container">
        {sortedData.length > 0 ? (
          sortedData.map((produkt, index) => {
            return <Product key={index} produkt={produkt} />;
          })
        ) : (
          <p>No items found</p>
        )}
      </div>
    </section>
  );
};

export default Products;
