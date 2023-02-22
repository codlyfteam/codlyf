import React from "react";
import Container from "react-bootstrap/Container";
import PricingCard1 from "./PricingCard";

const Pricing = () => {
  return (
    <div className="pricing-header">
      <Container>
        <div className="pricing">
          <h1 className="pricing-h1">Our Pricing</h1>
          <p className="pricing-p">
            On the other hand, we denounce with righteous indignation and
            dislike men who are so beguiled.
          </p>
        </div>

        <PricingCard1/>
        
      </Container>
    </div>
  );
};

export default Pricing;
