import React from "react";
//import "./Dummy.css"; // Style your Dummy component

const Dummy = ({ selectedProducts }) => {
  return (
    <div className="dummy-container">
      <h3>Dummy Display</h3>
      <div className="dummy-body">
        {selectedProducts.map((product) => (
          <div key={product.id} className="dummy-product">
            <img src={product.image} alt={product.name} />
            <p>{product.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dummy;

