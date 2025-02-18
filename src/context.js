import React, { useState, useEffect, useContext, createContext } from "react";
import products from "./data";
const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [data, setData] = useState(products);
  const [SFprice, setSFPrice] = useState(1000);
  const [SFCategory, setSFCategory] = useState("All");
  const [SFStore, setSFStore] = useState("All");
  const [SFSort, setSFSort] = useState("a-z");
  const [SFSearchQuery, setSFSearchQuery] = useState("");

  const [SPcolor, setSPcolor] = useState("");
  const [SPamount, setSPamount] = useState(0);

  const [cart, setCart] = useState(() => {
    // 🟢 Proveravamo da li postoji sačuvan cart u localStorage
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : []; // Ako postoji, parsiramo ga
  });

  const [itemsAmount, setItemsAmount] = useState(0);
  const [itemPrice, setItemPrice] = useState(0);

  const addToCart = (product) => {
    // Ako nije izabrana boja ili količina, postavljamo default vrednosti
    // if (!SPcolor) setSPcolor(product.colors[0]); // Default boja
    // if (!SPamount) setSPamount(1); // Default količina

    // Kopija trenutnog cart-a
    let updatedCart = [...cart];

    // Proveravamo da li već postoji isti proizvod u korpi
    let existingItemIndex = updatedCart.findIndex(
      (item) =>
        item.stari_produkt.id === product.id && // Isti proizvod
        item.color === SPcolor // Ista boja
    );

    if (existingItemIndex !== -1) {
      // Ako proizvod već postoji, samo povećamo količinu
      updatedCart[existingItemIndex].amount += parseInt(SPamount);
    } else {
      // Ako proizvod ne postoji, dodajemo ga u korpu
      let novi_produkt = {
        stari_produkt: product,
        color: SPcolor || product.colors[0],
        amount: parseInt(SPamount) || 1,
      };
      updatedCart = [novi_produkt, ...updatedCart];
    }

    // Ažuriramo stanje korpe
    setCart(updatedCart);
    setSPamount(1);
  };

  useEffect(() => {
    let amnt = cart.reduce(
      (total, produkt) => total + parseInt(produkt.amount),
      0
    );
    console.log("Cart:", cart);
    let price = cart.reduce(
      (total, produkt) => total + produkt.stari_produkt.price * produkt.amount,
      0
    );
    //console.log(price);
    setItemsAmount(amnt); // Osiguraj da je broj
    setItemPrice(price.toFixed(2));
  }, [cart]);

  const removeProduct = (id, color, amount) => {
    let updatedCart = [...cart]; // Kopiramo trenutni cart
    const index = updatedCart.findIndex(
      (item) =>
        item.stari_produkt.id === id &&
        item.color === color &&
        item.amount === amount
    );

    if (index !== -1) {
      updatedCart.splice(index, 1); // Brišemo samo taj jedan
      setCart(updatedCart); // Ažuriramo cart
    }
  };

  // 🔹 Čuvamo `cart` u `localStorage` svaki put kad se promeni
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  return (
    <AppContext.Provider
      value={{
        data,
        setData,
        SFprice,
        setSFPrice,
        SFCategory,
        setSFCategory,
        SFStore,
        setSFStore,
        SFSort,
        setSFSort,
        setSFSearchQuery,
        SFSearchQuery,
        SPcolor,
        setSPcolor,
        SPamount,
        setSPamount,
        addToCart,
        cart,
        itemsAmount,
        itemPrice,
        removeProduct,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
