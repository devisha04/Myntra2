import React, { useContext, useState } from "react";
import { ShopContext } from "../../context/shop-context";
import "./cart-item.css";

export const CartItem = (props) => {
  const { id, productName, price, productImage, isEcoFriendly } = props.data;
  const { cartItems, addToCart, removeFromCart, updateCartItemCount } =
    useContext(ShopContext);

  const [matchHovered, setMatchHovered] = useState(false);
  const [wishlist, setWishlist] = useState(false);

  const handleMatchHover = () => {
    setMatchHovered(!matchHovered);
  };

  const handleWishlistClick = () => {
    setWishlist(!wishlist);
  };

  return (
    <div className="cartItem">
      <img src={productImage} alt={productName} />
      <div className="description">
        <p>
          <b>{productName}</b>
        </p>
        <p> Price: ${price}</p>
        <div className="countHandler">
          <button onClick={() => removeFromCart(id)}> - </button>
          <input
            value={cartItems[id]}
            onChange={(e) => updateCartItemCount(Number(e.target.value), id)}
          />
          <button onClick={() => addToCart(id)}> + </button>
        </div>
        <button
          className="matchButton"
          style={{ backgroundColor: matchHovered ? "lightcoral" : "red" }}
          onMouseEnter={handleMatchHover}
          onMouseLeave={handleMatchHover}
        >
          Match
        </button>
        <button className="wishlistHeart" onClick={handleWishlistClick}>
          {wishlist ? "💖" : "♡"}
        </button>
        {isEcoFriendly && (
          <button className="ecoFriendlyButton">
            Eco
          </button>
        )}
      </div>
    </div>
  );
};

export default CartItem;
