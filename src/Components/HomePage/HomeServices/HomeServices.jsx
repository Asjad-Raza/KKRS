import React from "react";
import { Link } from "react-router-dom";
import { Card, Container, Row, Col, Button } from "react-bootstrap";
import "./HomeServices.scss";

export default function HomeServices() {
  let Services = [
    {
      Title: "Guarding Services",
      Desc: "we take pride in offering comprehensive guarding services that go beyond conventional security measures. We understand that safety is not just about having a physical presence; it's about having a vigilant and highly-trained team that stands as a dedicated shield for your property, assets, and peace of mind.",
      Image: "Images/Services/Guarding.jpg",
      Route: "/Guarding",
    },
    {
      Title: "Labour Supply",
      Desc: "we take pride in offering comprehensive guarding services that go beyond conventional security measures. We understand that safety is not just about having a physical presence; it's about having a vigilant and highly-trained team that stands as a dedicated shield for your property, assets, and peace of mind.",
      Image: "Images/Services/Labour.jpg",
      Route: "/LabourSupply",
    },
    {
      Title: "Payroll Management",
      Desc: "we take pride in offering comprehensive guarding services that go beyond conventional security measures. We understand that safety is not just about having a physical presence; it's about having a vigilant and highly-trained team that stands as a dedicated shield for your property, assets, and peace of mind.",
      Image: "Images/Services/Payroll.jpg",
      Route: "/PayrollManagement",
    },
  ];
  return (
    <div className="Container">
      <Container>
      <h2 style={{textAlign:"center"}}>Our Services</h2>
        <Row>
          {Services.map((Service) => {
            return (
              <Col sm>
                <Link className="Link" to={Service.Route}>
                  <Card className="Card">
                    <Card.Img src={Service.Image} />
                    <Card.Title className="Title">{Service.Title}</Card.Title>
                    <Card.Body className="Desc">{Service.Desc}</Card.Body>
                  </Card>
                </Link>
              </Col>
            );
          })}
        </Row>
        <Button className="Button" href="/Services" size="lg">See Our All Services</Button>
      </Container>
      </div>
    
  );
}
