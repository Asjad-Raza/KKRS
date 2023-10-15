import React from "react";
import { Container } from "react-bootstrap";

export default function UtilityStaff() {
  const KeyPoints = [
    {
      Title: "Maintenance Technicians:",
      Desc: " Our skilled maintenance technicians are trained in a wide range of trades, from plumbing and electrical work to HVAC maintenance and general repairs. They are the first responders to facility issues, swiftly addressing any challenges to minimize disruptions.",
    },
    {
      Title: "Custodial and Janitorial Staff:",
      Desc: "Our custodial and janitorial team takes pride in maintaining the cleanliness and hygiene of your spaces. They ensure that your premises are not only spotless but also safe and welcoming for everyone.",
    },
    {
      Title: "Groundskeepers and Landscapers:",
      Desc: "Our groundskeepers and landscapers are the stewards of your outdoor spaces. They create and maintain landscapes that are not only aesthetically pleasing but also functional and sustainable.",
    },
    {
      Title: "Security Personnel:",
      Desc: "Our security staff is responsible for safeguarding your premises, employees, and visitors. They provide a visible presence that deters unauthorized access and ensures a secure environment.",
    },
    {
      Title: "Waste Management and Recycling Teams:",
      Desc: "Our waste management and recycling teams are dedicated to responsible disposal and sustainability. They manage waste efficiently while promoting eco-friendly practices.",
    },
  ];

  const SubKeyPoints = [
    {
      SubTitle: "Professionalism:",
      SubDesc:
        "Our utility staff members are professionals who take their responsibilities seriously. They are punctual, reliable, and dedicated to their roles.",
    },
    {
      SubTitle: "Professionalism:",
      SubDesc:
        "They are versatile and can handle a variety of tasks and challenges, ensuring that your facilities remain operational.",
    },
    {
      SubTitle: "Safety Consciousness:",
      SubDesc:
        "Safety is a top priority for our utility staff. They adhere to strict safety protocols to protect themselves and others.",
    },
    {
      SubTitle: "Customer-Centric Approach:",
      SubDesc:
        "Our utility personnel are committed to meeting your specific needs and delivering service with a customer-centric mindset.",
    },
    {
      SubTitle: "Continuous Improvement:",
      SubDesc:
        "They stay updated with industry best practices and technologies to provide efficient and effective utility services.",
    },
  ];
  return (
    <div className="ServiceContainer">
      <Container>
        <img src="Images/Services/UtilityStaff.jpg" alt="" className="Image" />
        <h3>Efficiency, Reliability, and Excellence: Meet Our Utility Staff</h3>
        <p>
          At <b>Knight Riders Security Services</b>, we recognize that the backbone of any
          well-functioning organization is a team of dedicated utility staff.
          Our utility personnel play a crucial role in ensuring the smooth
          operation of essential services and maintaining the functionality of
          your facilities. They are the unsung heroes who work diligently behind
          the scenes to keep your operations running seamlessly.
        </p>
        <h4>Our Utility Staff:</h4>
        {KeyPoints.map((KeyPoint) => {
          return (
            <div className="ServiceItems">
              <ul>
                <li>
                  <p>
                    <h5>{KeyPoint.Title}</h5> {KeyPoint.Desc}
                  </p>
                </li>
              </ul>
            </div>
          );
        })}
        <h4>Key Qualities of Our Utility Staff:</h4>
        {SubKeyPoints.map((SubKeyPoint) => {
          return (
            <div className="ServiceItems">
              <ul>
                <li>
                  <p>
                    <h5>{SubKeyPoint.SubTitle}</h5> {SubKeyPoint.SubDesc}
                  </p>
                </li>
              </ul>
            </div>
          );
        })}
        <p>
          At <b>Knight Riders Security Services</b>, we believe that a well-maintained and
          efficiently operated facility is essential for your success. Our
          utility staff plays a pivotal role in achieving that goal. Whether
          it's a routine maintenance task, a cleaning operation, or security
          measures, our utility personnel are here to support your operations
          and ensure your facilities are operating at their best. Experience the
          difference our dedicated utility staff can make. Contact us today to
          discuss your utility needs and how we can contribute to the seamless
          functioning of your organization.
        </p>
      </Container>
    </div>
  );
}
