import React, { useContext } from "react";
import { MatchMakerContext } from "../../context/MatchMakerContext";
import { PRODUCTS } from "../../products"; // Import your product data

const ProductSelector = () => {
  const { addToSelection, removeFromSelection, selectedProducts } = useContext(
    MatchMakerContext
  );

  const handleAddToSelection = (product) => {
    addToSelection(product);
  };

  const handleRemoveFromSelection = (productId) => {
    removeFromSelection(productId);
  };

  return (
    <div className="product-list">
      {PRODUCTS.map((product) => (
        <div key={product.id} className="product-item">
          <h3>{product.name}</h3>
          {selectedProducts.some((item) => item.id === product.id) ? (
            <button onClick={() => handleRemoveFromSelection(product.id)}>
              Remove
            </button>
          ) : (
            <button onClick={() => handleAddToSelection(product)}>
              Add
            </button>
          )}
        </div>
      ))}
    </div>
  );
};

export default ProductSelector;
