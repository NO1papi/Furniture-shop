import React, { useState } from "react";
import "./css/SearchFilters.css";
import { useGlobalContext } from "../context";

const SearchFilters = () => {
  const {
    data,
    SFprice,
    setSFPrice,
    SFCategory,
    SFStore,
    SFSort,
    setSFCategory,
    setSFStore,
    setSFSort,

    setSFSearchQuery,
    SFSearchQuery,
  } = useGlobalContext();

  const uniqueCategories = [
    "All",
    ...new Set(data.map((item) => item.category)),
  ];
  const uniqueStore = [
    "All",
    ...new Set(
      data.map((item) => {
        return item.store;
      })
    ),
  ];
  return (
    <div className="filters-container">
      <div className="filters">
        <input
          type="text"
          placeholder="Search Product"
          className="search-input"
          value={SFSearchQuery}
          onChange={(e) => setSFSearchQuery(e.target.value.toLowerCase())}
        />
        <select
          className="filter-dropdown"
          value={SFCategory}
          onChange={(e) => {
            setSFCategory(e.target.value);
          }}
        >
          {uniqueCategories.map((kategorija, index) => {
            return (
              <option key={index} value={kategorija}>
                {kategorija}
              </option>
            );
          })}
        </select>
        <select
          className="filter-dropdown"
          value={SFStore}
          onChange={(e) => {
            setSFStore(e.target.value);
          }}
        >
          {uniqueStore.map((radnja, index) => {
            return (
              <option key={index} value={radnja}>
                {radnja}
              </option>
            );
          })}
        </select>
        <select
          className="filter-dropdown"
          value={SFSort}
          onChange={(e) => {
            setSFSort(e.target.value);
          }}
        >
          <option value="a-z">A-Z</option>
          <option value="z-a">Z-A</option>
          <option value="Price inc">Price inc</option>
          <option value="Price dec">Price dec</option>
        </select>
      </div>

      <div className="filter-options">
        <div className="price-filter">
          <label>Select Price</label>
          <div className="price-display">
            <span>${parseFloat(SFprice.toFixed(2))}</span>
          </div>
          <input
            type="range"
            min="0"
            max="1000"
            value={SFprice}
            onChange={(e) => setSFPrice(parseFloat(e.target.value))}
            className="price-slider"
          />
          <div className="price-range">
            <span>0</span>
            <span>Max : $1000</span>
          </div>
        </div>
      </div>

      <div className="buttons">
        <button
          className="btn reset-btn"
          onClick={() => {
            setSFCategory("All");
            setSFPrice(1000);
            setSFSort("A-Z");
            setSFStore("All");
            setSFSearchQuery("");
          }}
        >
          RESET
        </button>
      </div>
    </div>
  );
};

export default SearchFilters;
