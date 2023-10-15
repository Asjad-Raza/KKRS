import React from "react";
import { Link } from "react-router-dom";
import { Card, Container, Row, Col } from "react-bootstrap";
import "./Services.scss";

export default function Services() {
  let Services = [
    {
      Title: "Guarding Services",
      Desc: "we take pride in offering comprehensive guarding services that go beyond conventional security measures. We understand that safety is not just about having a physical presence; it's about having a vigilant and highly-trained team that stands as a dedicated shield for your property, assets, and peace of mind.",
      Image: "Images/Services/Guarding.jpg",
      Route: "/Guarding",
    },
    {
      Title: "Labour Supply",
      Desc: "At [Your Company Name], we specialize in providing top-notch labor supply services that elevate your workforce capabilities and streamline your operations. We understand that a skilled and adaptable workforce is the backbone of any successful organization, and we're here to be your trusted partner in meeting your staffing needs.",
      Image: "Images/Services/Labour.jpg",
      Route: "/LabourSupply",
    },
    {
      Title: "Payroll Management",
      Desc: "At [Your Company Name], we understand that managing payroll can be a complex, time-consuming, and often overwhelming task for businesses of all sizes. That's why we offer comprehensive payroll management services designed to simplify the payroll process, ensure accuracy, and keep your business in compliance with ever-changing tax regulations.",
      Image: "Images/Services/Payroll.jpg",
      Route: "/PayrollManagement",
    },
    {
      Title: "HouseKeeping Services",
      Desc: "At [Your Company Name], we believe that a clean and well-maintained environment is the cornerstone of comfort, productivity, and well-being. Our housekeeping services are dedicated to ensuring that your homes, offices, and commercial spaces are not just clean but also inviting, organized, and conducive to a higher quality of life and work.",
      Image: "Images/Services/HouseKeeping.jpg",
      Route: "/Housekeeping",
    },
    {
      Title: "F & B Personnel",
      Desc: "At [Your Company Name], we take pride in curating exceptional dining experiences through the expertise and dedication of our Food and Beverage (F&B) personnel. From the kitchen to the dining room, our team is committed to delivering the highest standards of service, ensuring that every meal is a memorable and delightful journey.",
      Image: "Images/Services/F & B.jpg",
      Route: "/F&B",
    },
    {
      Title: " Utility Staff",
      Desc: "At [Your Company Name], we recognize that the backbone of any well-functioning organization is a team of dedicated utility staff. Our utility personnel play a crucial role in ensuring the smooth operation of essential services and maintaining the functionality of your facilities. They are the unsung heroes who work diligently behind the scenes to keep your operations running seamlessly.",
      Image: "Images/Services/UtilityStaff.jpg",
      Route: "/UtilityStaff",
    },
    {
      Title: " Office Assintant",
      Desc: "At [Your Company Name], we recognize the invaluable role played by our office assistants in maintaining the smooth and efficient operation of our business. As the unsung heroes behind the scenes, office assistants are the heartbeat of our daily operations, ensuring that everything runs seamlessly.",
      Image: "Images/Services/OfficeAssistant.jpg",
      Route: "/OfficeAssistant",
    },
  ];
  return (
    <div className="ServiceContainer">
      <Container>
        <h2>Our Services</h2>
        <Row className="ServiceRow">
          {Services.map((Service) => {
            return (
              <Col>
                <Card className="ServiceCard">
                  <Link className="ServiceLink" to={Service.Route}>
                    <Card.Img className="ServiceImage" src={Service.Image} />
                    <Card.Title className="ServiceTitle">
                      {Service.Title}
                    </Card.Title>
                    <Card.Body className="ServiceBody">
                      {" "}
                      {Service.Desc}
                    </Card.Body>
                  </Link>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
}
