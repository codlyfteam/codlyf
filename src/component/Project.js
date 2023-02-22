import React from "react";
import Container from "react-bootstrap/Container";

const Project = () => {
  return (
    <Container>
      <div className="project">
        <h1 className="project-h1">We Completed Project</h1>
        <p className="project-p">
          On the other hand, we denounce with righteous indignation and dislike
          men who are so beguiled.
        </p>
      </div>
      <div className="project-done">
        <div>
          <i class="fa fa-trophy" aria-hidden="true"></i>
          <p className="project-done-value">189+</p>
          <p className="project-done-detail">Award</p>
        </div>
        <div>
          <i class="fa fa-rocket" aria-hidden="true"></i>
          <p className="project-done-value">300+</p>
          <p className="project-done-detail">Projects</p>
        </div>
        <div>
          <i class="fa fa-users" aria-hidden="true"></i>
          <p className="project-done-value">1200+</p>
          <p className="project-done-detail">Happy Clients</p>
        </div>
        <div>
          <i class="fa fa-certificate" aria-hidden="true"></i>
          <p className="project-done-value">30+</p>
          <p className="project-done-detail">Year of Succes</p>
        </div>
      </div>
    </Container>
  );
};

export default Project;