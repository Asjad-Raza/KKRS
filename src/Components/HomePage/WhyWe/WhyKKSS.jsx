import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import "./WhyKKSS.scss";

export default function WhyKKSS() {
  const Reasons = [
    {
      // Count: "01.",
      Title: "Reputation and Track Record",
      Desc: "A strong and positive reputation is a compelling reason to choose a security company.",
    },
    {
      // Count: "02.",
      Title: "Experience and Expertise ",
      Desc: "Choose a company with experienced security professionals who have the knowledge and skills to handle various security challenges.",
    },
    {
      // Count: "03.",
      Title: "Customized Security Solutions",
      Desc: "A company that offers customized security solutions tailored to your specific requirements can be a valuable partner.",
    },
    {
      // Count: "04.",
      Title: "State-of-the-Art Technology",
      Desc: "A company that invests in the latest security technologies and tools can provide more effective protection.",
    },
    {
      // Count: "05.",
      Title: "Well-Trained Personnel",
      Desc: "Ensure that the company's security staff undergo thorough training and are equipped to handle various security scenarios.",
    },
    {
      // Count: "06.",
      Title: "Reliability",
      Desc: "Security is a 24/7 concern. Ensuring availability when you need them most.",
    },
  ];
  return (
    <div className="WhyKKSS">
      <Container>
        <h1>Why Choose Us ?</h1>
        <Row className="KKSSRow">
          {Reasons.map((Reason) => {
            return (
              <Col>
                <Card className="KKSSCard">
                  <div style={{ display: "flex" }}>
                    <Card.Title style={{color:'blue'}} className="KKSSCardTitle">
                      {Reason.Count}
                    </Card.Title>
                    <Card.Title className="KKSSCardTitle">
                      {Reason.Title}
                    </Card.Title>
                  </div>
                  <Card.Body className="KKSSCardBody">{Reason.Desc}</Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
}
