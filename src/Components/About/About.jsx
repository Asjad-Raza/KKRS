import React from "react";
import "./About.scss";
import { Card } from "react-bootstrap";
let infos = [
  {
    Exceptional: "Introducing ",
    MainHeading: "Knight Riders Security Services ",
    Exceptional2: "Your Trusted Partner In Security",
    MainParagrapgh:
      "In an ever-evolving world filled with dynamic challenges, ensuring the safety and security of your assets, personnel, and operations has never been more critical. At Knight Riders Security Services, we understand the paramount importance of security in today's complex landscape, and we are here to be your unwavering shield against threats.In a world where safety and security have become paramount concerns, Knight Riders Security Services stands as a beacon of protection, ready to shield your interests from potential threats. We understand that security is not merely a service but a critical foundation upon which you build your life, your business, and your peace of mind. That's why we take our role as your trusted security partner with the utmost seriousness. With a rich legacy of excellence and a relentless commitment to our clients, Knight Riders Security Services has earned its reputation as a leading provider of comprehensive security services. We've honed our expertise over the years, understanding that security is not a one-size-fits-all endeavor. Whether you're an individual seeking personal protection, a business safeguarding your assets, or an organization securing your operations, we have the knowledge, experience, and resources to tailor our solutions to your unique needs. Our team comprises highly trained and certified security professionals who are not just experts in their field but also deeply committed to your safety. They stand as vigilant sentinels, utilizing the latest advancements in security technology and methodologies to keep you, your loved ones, and your assets out of harm's way. At Knight Riders Security Services, we offer a comprehensive suite of security services, ranging from physical security and electronic surveillance to executive protection and cybersecurity. We understand that security is not a static concept; it evolves as threats do. Therefore, we constantly adapt and innovate, ensuring that our clients are always one step ahead of potential risks. Our mission is simple yet profound: to provide you with the peace of mind that comes from knowing you are protected by the best in the industry. When you choose Knight Riders Security Services, you choose a partner who shares your commitment to security excellence. We're here to serve, to protect, and to empower you to live, work, and operate with confidence in a world that is safer because of us.Welcome to Knight Riders Security Services, where security meets sophistication, and where your safety is our unwavering priority.",
  },
];

export default function About() {
  return (
    <div className="About">
      {infos.map((info) => {
        return (
          <>
            <Card
              className=""
              style={{
                textAlign: "center",
                background: "none",
              }}
            >
              <img
                style={{
                  opacity: "0.4",
                  position: "absolute",
                  width: "100%",
                  left: "0",
                  top: "0",
                  height: "100%",
                }}
                src="Images/Chairman Image/AboutBackground.jpg"
                alt=""
              />
              <div>
                <div>
                  <Card.Img
                    className="CardImage"
                    style={{
                      marginBottom: "10px",
                      width: "18rem",
                      height: "18rem",
                      margin: "20px",
                      float: "left",
                      opacity: "1",
                    }}
                    src="Images/Chairman Image/Chairman.jpg"
                  />
                </div>

                <Card.Title
                  style={{
                    textAlign: "center",
                    width: "100%",
                    fontSize: "30px",
                  }}
                >
                  About Us
                </Card.Title>
                <Card.Body
                  style={{
                    fontSize: "25px",
                    textAlign: "justify",
                  }}
                >
                  {info.Exceptional}
                  <b>{info.MainHeading}</b>
                  {info.Exceptional2} {info.MainParagrapgh}
                </Card.Body>
              </div>
            </Card>
          </>
        );
      })}
    </div>
  );
}
