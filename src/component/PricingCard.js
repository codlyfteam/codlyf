
import React from "react";
import Container from "react-bootstrap/esm/Container";
import PricingDetail from "./PricingDetail";


const PricingCard1 = () => {
  return (
  <div className="pricingcard">
  <PricingDetail plan="Basic" money="20"/>
  <PricingDetail plan="Standard" money="259"/>
  <PricingDetail plan="Advanced" money="502"/>
  </div>
  );
};

export default PricingCard1;
