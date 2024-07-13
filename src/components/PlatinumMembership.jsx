import React from "react";
import "./PlatinumMembership.css";

export const PlatinumMembership = () => {
  return (
    <div className="platinum-membership-container">
      <h1>PLATINUM MEMBERSHIP</h1>
      <div className="platinum-features">
        <div className="feature">
          <h2>Platinum Exclusive <br /> Concierge Service</h2>
          <p>Personalized shopping assistance and style advice.</p>
          <img src={process.env.PUBLIC_URL + "/M4.jpeg"} alt="Platinum Concierge Service" />
        </div>
        <div className="feature">
          <h2>Early Access to <br /> Limited Edition Collections</h2>
          <p>Be the first to explore and shop exclusive designer collections.</p>
          <img src={process.env.PUBLIC_URL + "/M5.jpeg"} alt="Early Access to Collections" />
        </div>
        <div className="feature">
          <h2>Premium Fashion <br /> Events</h2>
          <p>VIP access to fashion shows, exclusive brand launches, and private events.</p>
          <img src={process.env.PUBLIC_URL + "/M6.jpeg"} alt="Premium Fashion Events" />
        </div>
      </div>
    </div>
  );
};

export default PlatinumMembership;
