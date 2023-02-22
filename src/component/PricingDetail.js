import React from 'react'
import Container from 'react-bootstrap/esm/Container'

function PricingDetail({plan,money,pricelevel}) {
  return (
    <Container>
        <div className="pricing-card">
          <div className="pricing-card-detail">
            <div className="pricing-card-plan">
              <a className="pricing-plan">{plan}</a>
            </div>
            <div class="price-details">
              <div className="price-symbol">
                <span className="price-currency">&#36;</span>
              </div>
              <span class="price">
                <span className="price-money">{money}</span>
                <small className="price-small">/mon</small>
              </span>
              <p className="price-list">{pricelevel}</p>
            </div>
            <ul class="features">
              <li>
                <i class="fa fa-check"></i>
                <span className="features-detail">
                  100 GB Premium Bandwidth
                </span>
              </li>
              <li>
                <i class="fa fa-check"></i>
                <span className="features-detail">
                  FREE 50+ Installation Scripts WordPress Supported
                </span>
              </li>
              <li>
                <i class="fa fa-check"></i>
                <span className="features-detail">
                  One FREE Domain Registration .com and .np extensions only
                </span>
              </li>
              <li>
                <i class="fa fa-check"></i>
                <span className="features-detail">
                  Unlimited Email Accounts & Databases
                </span>
              </li>
            </ul>
          </div>
        </div>
    </Container>
  )
}

export default PricingDetail