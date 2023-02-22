import React from "react";

const ClientFeedback = ({ detail, src, clientname }) => {
    return (
      <div className="client-feedback">
        <div className="client-feedback-head">
          <i class="fa fa-quote-left" aria-hidden="true"></i>
          <p className="client-feedback-detail">{detail}</p>
          <div className="client-feedback-icon">
            <i class="fa fa-star" aria-hidden="true"></i>
            <i class="fa fa-star" aria-hidden="true"></i>
            <i class="fa fa-star" aria-hidden="true"></i>
            <i class="fa fa-star" aria-hidden="true"></i>
            <i class="fa fa-star" aria-hidden="true"></i>
          </div>
        </div>
        <div className="client-deatil-feedback">
          <div>
            <img className="client-image" src={src} alt="Hello" />
            <p className="client-name">{clientname}</p>
          </div>
        </div>
      </div>
    );
  };
  
  export default ClientFeedback;
  