import React from "react";
import ClientFeedback from "./ClientFeed";

const ClientFeedbackDetail = ({ detail, src, clientname }) => {
    return (
        <div className="clientfeedback">
        <ClientFeedback
          detail="There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration."
          src="https://media.istockphoto.com/id/1344688156/photo/portrait-of-a-man-using-a-computer-in-a-modern-office.jpg?b=1&s=170667a&w=0&k=20&c=AAVVOvN9uY1Rd_0QsWb8WvBN-4VSUdCORiZx51s5OLc="
          clientname="James Rods"
        />
        <ClientFeedback
          detail="There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration."
          src="https://assets.toptal.io/images?url=https://bs-uploads.toptal.io/blackfish-uploads/talent/profile/picture_file/picture/1049383/huge_8ab29ffef1ef6fafd63dcf6381965f7e-ef4494e9c3ff99b9c93217209a52db14.jpg"
          clientname="Flavio"
        />
        <ClientFeedback
          detail="There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration."
          src="https://developer.android.com/static/events/dev-summit/images/speakers/ian-lake.jpg"
          clientname="Johnson"
        />
      </div>
    );
  };
  
  export default ClientFeedbackDetail;
  