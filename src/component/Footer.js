import React from "react";
import { Container } from "react-bootstrap";

const Footer = () => {
  return (
    <div className="footer">
      <Container>
        <div className="footer-file">
          <div className="footer-detail">
            <h1 className="footer-p">My Site</h1>
            <p className="footer-p-detail">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look even
              slightly believable.
            </p>
            <div className="footer-social-icon">
              <i class="fa fa-facebook" aria-hidden="true"></i>
              <i class="fa fa-instagram" aria-hidden="true"></i>
              <i class="fa fa-linkedin" aria-hidden="true"></i>
              <i class="fa fa-twitter" aria-hidden="true"></i>
            </div>
          </div>
          <div className="footer-service">
            <h1>Services Provided</h1>
            <div className="footer-service-type">
              <div className="service-heading">
                <span className="service-name">
                  <i class="fa fa-angle-right" aria-hidden="true"></i>
                  <p className="service-name-p">SEO Services</p>
                </span>
                <span className="service-name">
                  <i class="fa fa-angle-right" aria-hidden="true"></i>
                  <p className="service-name-p">SEO Services</p>
                </span>
                <span className="service-name">
                  <i class="fa fa-angle-right" aria-hidden="true"></i>
                  <p className="service-name-p">SEO Services</p>
                </span>
                <span className="service-name">
                  <i class="fa fa-angle-right" aria-hidden="true"></i>
                  <p className="service-name-p">SEO Services</p>
                </span>
              </div>
              <div className="service-footer">
                <span className="service-name">
                  <i class="fa fa-angle-right" aria-hidden="true"></i>
                  <p className="service-name-p">SEO Services</p>
                </span>
                <span className="service-name">
                  <i class="fa fa-angle-right" aria-hidden="true"></i>
                  <p className="service-name-p">SEO Services</p>
                </span>
                <span className="service-name">
                  <i class="fa fa-angle-right" aria-hidden="true"></i>
                  <p className="service-name-p">SEO Services</p>
                </span>
                <span className="service-name">
                  <i class="fa fa-angle-right" aria-hidden="true"></i>
                  <p className="service-name-p">SEO Services</p>
                </span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
