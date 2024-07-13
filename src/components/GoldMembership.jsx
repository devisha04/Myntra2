import React from "react";
import "./GoldMembership.css";

const GoldMembership = () => {
  return (
    <div className="gold-membership-container">
      <h1>GOLD MEMBERSHIP</h1>
      <div className="gold-features">
        <div className="feature">
          <h2>Myntra Gold <br /> Meet with Influencers!</h2>
          <p>Clash of Style Titans: Witness the Ultimate Fashion Face-Off!</p>
          <img src={process.env.PUBLIC_URL + "/M4.jpeg"} alt="Meet with Influencers" />
        </div>
        <div className="feature">
          <h2>Myntra Gold <br /> Special Offers & Discounts </h2>
          <p>Unlock Exclusive Savings: Elevate Your Style with Myntra Gold Deals!</p>
          <img src={process.env.PUBLIC_URL + "/M2.jpeg"} alt="Special Offers & Discounts" />
        </div>
        <div className="feature">
          <h2>Myntra Gold <br /> Fashion Exclusive</h2>
          <p>Stay Ahead in Style: Discover Exclusive Trends with Myntra Gold!</p>
          <img src={process.env.PUBLIC_URL + "/M6.jpeg"} alt="Fashion Exclusive" />
        </div>
      </div>
    </div>
  );
};

export default GoldMembership;
