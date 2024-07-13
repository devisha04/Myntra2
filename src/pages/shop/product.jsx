import React, { useContext, useState } from "react";
import { Card, Button, Typography, Badge, Modal } from "antd";
import { ShopContext } from "../../context/shop-context";
import "./product.css";
import { motion } from "framer-motion"; // Import Framer Motion for animations
import { HeartOutlined, HeartFilled, CheckCircleOutlined } from "@ant-design/icons"; // Import CheckCircleOutlined icon for eco-friendly

const { Title, Paragraph } = Typography;

export const Product = (props) => {
  const { id, productName, price, productImage, isEcoFriendly } = props.data; // Include isEcoFriendly
  const { addToCart, cartItems } = useContext(ShopContext);
  
  const [matchHovered, setMatchHovered] = useState(false);
  const [isFavorited, setIsFavorited] = useState(false);
  const [showPopup, setShowPopup] = useState(false); // State for showing pop-up

  const handleMatchHover = () => {
    setMatchHovered(!matchHovered);
  };

  const handleFavoriteToggle = () => {
    setIsFavorited(!isFavorited);
  };

  const handleEcoIconClick = () => {
    setShowPopup(true); // Open the modal on eco icon click
  };

  const handlePopupClose = () => {
    setShowPopup(false);
  };

  const cartItemCount = cartItems[id];

  return (
    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
      <Card
        hoverable
        cover={<img alt={productName} src={productImage} />}
        className="product-card"
        actions={[
          <Button
            type="link"
            onClick={handleFavoriteToggle}
            icon={isFavorited ? <HeartFilled style={{ fontSize: '24px', color: 'red' }} /> : <HeartOutlined style={{ fontSize: '24px' }} />}
          />
        ]}
      >
        <div className="eco-icon-wrapper">
          {isEcoFriendly && (
            <CheckCircleOutlined
              className="eco-icon"
              style={{ fontSize: "24px", color: "green", cursor: "pointer" }}
              onClick={handleEcoIconClick}
            />
          )}
        </div>
        <div className="description">
          <Title level={4}>{productName}</Title>
          <Paragraph>₹ {price}</Paragraph>
        </div>
        <Button
          type="primary"
          onClick={() => addToCart(id)}
          className="addToCartBttn"
        >
          Add To Cart {cartItemCount > 0 && <Badge count={cartItemCount} />}
        </Button>
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}>
          <Button
            className="matchButton"
            style={{ backgroundColor: matchHovered ? "lightcoral" : "red", color: "white" }}
            onMouseEnter={handleMatchHover}
            onMouseLeave={handleMatchHover}
          >
            Pair and Wear
          </Button>
        </div>
        <Modal
          title="Eco-Friendly Product"
          visible={showPopup}
          onCancel={handlePopupClose}
          footer={[
            <Button key="close" onClick={handlePopupClose}>
              Close
            </Button>
          ]}
        >
      <p style={{ color: 'green', fontFamily: 'cursive', fontSize: '18px', fontWeight: 'bold' }}>
  Congratulations on making a sustainable choice! By choosing our eco-friendly product, you're making a positive impact on the planet. Thank you for being a part of our journey towards a greener future!
</p>

        </Modal>
      </Card>
    </motion.div>
  );
};

export default Product;
