import HomeCarousel from "./Carousel/HomeCarousel";
import { Button, Card } from "react-bootstrap";
import "./Homepage.scss";
import HomeServices from "./HomeServices/HomeServices";
import WhyKKSS from "./WhyWe/WhyKKSS";


export default function HomePage() {
  const data =
    "In an ever-evolving world filled with dynamic challenges, ensuring the safety and security of your assets, personnel, and operations has never been more critical. At Knight Riders Security Services, we understand the paramount importance of security in today's complex landscape, and we are here to be your unwavering shield against threats.";

  return (
    <div>
      <HomeCarousel />
      <Card className="HomePageAbout">
        <Card.Body>
          <Card.Title className="Title">Who Are We ?</Card.Title>
          <Card.Text className="Text">{data}</Card.Text>
          <Button variant="primary" href="/About">
            Let Me Know More
          </Button>
        </Card.Body>
      </Card>
      <HomeServices/>
      <WhyKKSS/>
    </div>
  );
}
