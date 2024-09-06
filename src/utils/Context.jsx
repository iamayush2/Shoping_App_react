import axios from "./axios.jsx";
import React, { createContext, useEffect, useState } from "react";

export const ProductContext = createContext();

const Context = (props) => {
  const [product, setProduct] = useState(null);

  const getproduct = async () => {
    try {
      const { data } = await axios("/products");

      setProduct(data);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    getproduct();
  }, []);

  return (
    <ProductContext.Provider value={[product, setProduct]}>
      {props.children}
    </ProductContext.Provider>
  );
};

export default Context;
