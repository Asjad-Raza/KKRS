import React from "react";
import {  Row, Col, Image } from "react-bootstrap";
import "./Gallery.scss";

export default function Gallery() {
  return (
    <Row className="Row">
      <Col  sm >
        <Image className="Image" src="Images/Gallery/Gallery-1.jpg" />
        <Image className="Image" src="Images/Gallery/Gallery-2.jpg" />
        <Image className="Image" src="Images/Gallery/Gallery-3.jpg" />
        <Image className="Image" src="Images/Gallery/Gallery-4.jpg" />
      </Col>
    </Row>
  );
}
