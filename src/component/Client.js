import { Container } from "react-bootstrap";
import ClientFeedbackDetail from "./ClientFeedDetail";



const Client = () => {
  return (
    <Container>
      <div className="client">
        <h1 className="client-h1">Our Awesome Clients</h1>
        <p className="client-p">
          On the other hand, we denounce with righteous indignation and dislike
          men who are so beguiled.
        </p>
      </div>
      <ClientFeedbackDetail/>
      
    </Container>
  );
};

export default Client;
