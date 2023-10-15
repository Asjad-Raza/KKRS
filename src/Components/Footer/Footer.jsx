import React from "react";
import { Row, Col } from "react-bootstrap";
import "./Footer.scss";

export default function Footer(props) {
  return (
    <div className="Footer">
      <Row className="FooterRow">
        <img
          style={{
            position: "absolute",
            width: "100%",
            left: "0",
            top: "0",
            height: "100%",
            opacity: "0.3",
          }}
          src="Images/Chairman Image/AboutBackground.jpg"
          alt=""
        />
        <Col className="FooterCol" id="Footer1">
          <div style={{ display: "flex" }}>
            <img className="FooterImage" src="logo192.png" alt="" />
            <h3 style={{ margin: "auto" }}>{props.title}</h3>
          </div>
          <div style={{ textAlign: "justify" }}>
            We provide a high quality, tailored facility management service.
            We'll take care of building space planning, sustainability,
            compliance and safety, and operations and maintenance requirements.
          </div>
        </Col>
        <Col className="FooterCol" id="Footer2">
          <h3>Our Branches</h3>
          <ol>
            <h4>Kolkata</h4>
            <h4>Hyderabad</h4>
            <h4>Mumbai</h4>
            <h4>Banglore</h4>
          </ol>
        </Col>
        <Col className="FooterCol" id="Footer3">
          <h3>What We Provide</h3>
          <ol>
            <h4>Labour Supply</h4>
            <h4>Guarding Services</h4>
            <h4>Payroll Management</h4>
            <h4>Housekeeping Services</h4>
          </ol>
        </Col>
        <Col id="Footer4" className="FooterCol">
          <h3>Connect Us</h3>
          <Row>
            <h4>
              4/6C, Joy Rampur Jala Road, East Adarsh Nagar, Kolkata, West
              Bengal-700061
            </h4>
            <h4>Mob:-1234567890</h4>
          </Row>
        </Col>
        <h5 style={{ color: "white" }}>Copyrights</h5>
      </Row>
    </div>
  );
}
