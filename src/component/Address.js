import { Container } from "react-bootstrap";

const Address = () => {
  return (
    <div className="address">
      <Container>
        <div className="adress-detail">
          <div className="address-location">
            <i className="fa fa-map-marker" aria-hidden="true"></i>
            <div className="address-address">
              <p className="address-location-one">New York,Street</p>
              <p className="address-location-two">New York Street</p>
            </div>
          </div>
          <div className="address-gmail">
            <i class="fa fa-envelope" aria-hidden="true"></i>
            <div className="address-gmail-address">
              <p className="address-gmail-one">contact@domain.com</p>
              <p className="address-gmail-two">Online Support</p>
            </div>
          </div>
          <div className="address-working">
            <i class="fa fa-headphones" aria-hidden="true"></i>
            <div className="address-working-address">
              <p className="address-working-one">Working Days</p>
              <p className="address-working-two">Mon-Fri 9am-6pm</p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Address;
