import React from "react";
import { Container } from "react-bootstrap";

const Talk = () => {
  return (
    <div className="talk">
      <Container>
        <div className="talk-detail">
          <p className="talk-detail-query">Have any projects in your minds?</p>
          <p className="talk-detail-project">Lets talk about it.</p>
          <a href="" className="talk-detail-register">REGISTER NOW</a>
        </div>
      </Container>
    </div>
  );
};

export default Talk;
