import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";
import { Button, Modal, Typography } from "antd";
import { Spring, animated } from 'react-spring';
import "./navbar.css";
import GoldMembership from "./GoldMembership"; // Update the path accordingly

const { Title, Paragraph } = Typography;

export const Navbar = () => {
  const [isEventModalVisible, setIsEventModalVisible] = useState(false);
  const [isMembershipModalVisible, setIsMembershipModalVisible] = useState(false);
  const [selectedTier, setSelectedTier] = useState(null);
  
  const showEventModal = () => {
    setIsEventModalVisible(true);
  };

  const hideEventModal = () => {
    setIsEventModalVisible(false);
  };

  const showMembershipModal = () => {
    setIsMembershipModalVisible(true);
  };

  const hideMembershipModal = () => {
    setIsMembershipModalVisible(false);
  };

  const selectTier = (tier) => {
    setSelectedTier(tier);
    // Add redirection logic here if needed
  };

  return (
    <>
      <div className="navbar">
        <div className="logo">
          <Link to="/">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXoLTeoO3dvjcxZP2VgVDj1VHycbpFAQ2ZIKy0Et9Aksi63KYn4cIBHxnKAi23Jhp0zLM&usqp=CAU"
              alt="Logo"
            />
          </Link>
        </div>
        <div className="links">
          <Link to="/">SHOP</Link>
          <Link to="/contact">CONTACT US</Link>
          <Link to="/body-shape">BODY SHAPE</Link>
          <Link to="/match-maker">MATCH MAKER</Link>
          <Link to="/cart">
            <ShoppingCart size={32} />
          </Link>
          <Button type="link" onClick={showEventModal}>
            SHOPPING EVENT
          </Button>
          <Button type="link" onClick={showMembershipModal}>
            ELITE MEMBERSHIPS
          </Button>
          <Link to="/fashion-battle">
            <Button type="link">
              FASHION BATTLES
            </Button>
          </Link>
        </div>
      </div>

      {/* Shopping Event Modal */}
      <Modal
        title="Weekly 2-Hour Shopping Event"
        visible={isEventModalVisible}
        onCancel={hideEventModal}
        footer={null}
      >
        <Title level={3}>Join Our Weekly 2-Hour Shopping Event!</Title>
        <Paragraph>
          Every Saturday, enjoy steep discounts during our exclusive 2-hour shopping event. 
          New arrivals will be unveiled the day before to build excitement and engagement. 
          Don't miss out on great deals and the latest fashion trends!
        </Paragraph>
      </Modal>

      {/* Elite Membership Modal */}
      <Modal
        title="Myntra Elite Memberships"
        visible={isMembershipModalVisible}
        onCancel={hideMembershipModal}
        footer={null}
      >
        <Title level={3}>Choose Your Membership Tier</Title>
        <Spring
          from={{ opacity: 0 }}
          to={{ opacity: 1 }}
        >
          {props => (
            <animated.div style={props}>
              <ul>
                {['Platinum', 'Gold', 'Silver'].map((tier, index) => (
                  <li key={index}>
                    {/* Use Link to redirect to respective membership pages */}
                    <Link to={`/${tier.toLowerCase()}-membership`}>
                      <Button type={selectedTier === tier ? "primary" : "default"} onClick={() => selectTier(tier)}>
                        {tier}
                      </Button>
                    </Link>
                  </li>
                ))}
              </ul>
              {selectedTier && (
                <Paragraph>
                  You have selected <b>{selectedTier}</b>. Enjoy the benefits of exclusive discounts and offers.
                </Paragraph>
              )}
            </animated.div>
          )}
        </Spring>
      </Modal>
    </>
  );
};
