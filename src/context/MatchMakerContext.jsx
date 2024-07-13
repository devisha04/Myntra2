import React, { createContext, useContext, useState } from "react";

export const MatchMakerContext = createContext();

export const MatchMakerContextProvider = ({ children }) => {
  const [selectedProducts, setSelectedProducts] = useState([]);

  const addToSelection = (product) => {
    setSelectedProducts((prev) => [...prev, product]);
  };

  const removeFromSelection = (productId) => {
    setSelectedProducts((prev) => prev.filter((item) => item.id !== productId));
  };

  const clearSelection = () => {
    setSelectedProducts([]);
  };

  return (
    <MatchMakerContext.Provider
      value={{ selectedProducts, addToSelection, removeFromSelection, clearSelection }}
    >
      {children}
    </MatchMakerContext.Provider>
  );
};
