import React from "react";
import "./SilverMembership.css";

export const SilverMembership = () => {
  return (
    <div className="silver-membership-container">
      <h1>SILVER MEMBERSHIP</h1>
      <div className="silver-features">
        <div className="feature">
          <h2>Myntra Silver <br /> Exclusive Deals</h2>
          <p>Discover limited-time offers tailored for Silver members.</p>
          <img src={process.env.PUBLIC_URL + "/M1.jpeg"} alt="Silver Deals" />
        </div>
        <div className="feature">
          <h2>Myntra Silver <br /> Early Access</h2>
          <p>Be the first to shop new arrivals with early access perks.</p>
          <img src={process.env.PUBLIC_URL + "/M2.jpeg"} alt="Early Access" />
        </div>
        <div className="feature">
          <h2>Myntra Silver <br /> Style Tips</h2>
          <p>Receive personalized style advice and fashion tips.</p>
          <img src={process.env.PUBLIC_URL + "/M3.jpeg"} alt="Style Tips" />
        </div>
      </div>
    </div>
  );
};

export default SilverMembership;
