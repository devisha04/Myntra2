import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./MatchMaker.css";

const MatchMaker = () => {
  // Dummy data for carousel images (replace with your actual images or components)
  const carouselImages = [
    "/F1a.jpeg",
    "/F1b.jpeg",
    "/F1c.jpeg",
  ];

  // Responsive configuration for the carousel
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <div className="matchmaker-container">
      <div className="background-image">
        <div className="content">
          <h2 className="matchmaker-heading">
            <span style={{ color: "purple" }}>MatchMaker</span>: <span style={{ color: "yellow" }}>Your Personal Stylist for Effortless Outfit Pairing</span>
          </h2>

          {/* Carousel */}
          <div className="carousel-container">
            <Carousel
              additionalTransfrom={0}
              arrows
              autoPlaySpeed={3000}
              centerMode={false}
              containerClass="container-with-dots"
              draggable
              focusOnSelect={false}
              infinite
              keyBoardControl
              minimumTouchDrag={80}
              renderButtonGroupOutside={false}
              renderDotsOutside={false}
              responsive={responsive}  // Added responsive configuration
              showDots={false}
              slidesToSlide={1}
              swipeable
            >
              {carouselImages.map((image, index) => (
                <div key={index}>
                  <img src={process.env.PUBLIC_URL + image} alt={`Outfit ${index + 1}`} />
                </div>
              ))}
            </Carousel>
          </div>

          {/* User preference and related products */}
          <div className="user-preference">
            <p>This outfit is liked by 70% of users.</p>
            <p>This outfit was most bought with a black bag.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MatchMaker;
