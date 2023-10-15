import React from "react";
import { Container } from "react-bootstrap";
import "./Services.scss";

export default function Housekeeping() {
  let KeyPoints = [
    {
      Title: "Customized Cleaning Solutions: ",
      Desc: "We understand that every space is unique, and so are your cleaning needs. Our team works closely with you to create a customized cleaning plan that addresses your specific requirements, ensuring exceptional results.",
    },
    {
      Title: "Experienced Cleaning Professionals:",
      Desc: "Our housekeeping team comprises skilled and experienced professionals who are passionate about cleanliness and dedicated to providing a superior cleaning experience.",
    },
    {
      Title: "Comprehensive Cleaning:",
      Desc: "From routine cleaning and deep cleaning to specialized services such as carpet cleaning, window washing, and post-construction cleanup, we offer a wide range of services to cater to your diverse needs.",
    },
    {
      Title: "Environmentally Friendly Practices:",
      Desc: "We prioritize eco-friendly cleaning practices, using non-toxic and biodegradable cleaning products that are safe for your family, employees, and the environment.",
    },
    {
      Title: "Reliability:",
      Desc: "You can count on us for punctuality and consistency. Our team is committed to delivering cleaning services that meet or exceed your expectations every time.",
    },
    {
      Title: "Affordable Pricing:",
      Desc: " We offer competitive pricing without compromising on the quality of our services. Our goal is to provide value-driven cleaning solutions.",
    },
  ];

  const SubKeyPoints = [
    {
      SubTitle: "Residential Cleaning:",
      SubDesc:
        "Transform your home into a haven of cleanliness and comfort with our residential housekeeping services. We'll take care of your living spaces, kitchens, bathrooms, and more, leaving your home spotless.",
    },
    {
      SubTitle: "Commercial Cleaning:",
      SubDesc:
        "Create a clean and inviting workspace for your employees and clients with our commercial housekeeping services. We cater to offices, retail spaces, healthcare facilities, and more.",
    },
    {
      SubTitle: "Specialized Cleaning:",
      SubDesc:
        "From event cleanups to move-in/move-out cleaning, we offer specialized services that cater to unique cleaning needs.",
    },
  ];
  return (
    <div className="ServiceContainer">
      <Container>
        <img src="Images/Services/Housekeeping.jpg" alt="" className="Image" />
        <h3>
          Elevate Your Living and Working Spaces with Our Housekeeping Services
        </h3>
        <p>
          At <b>Knight Riders Security Services</b>, we believe that a clean and well-maintained
          environment is the cornerstone of comfort, productivity, and
          well-being. Our housekeeping services are dedicated to ensuring that
          your homes, offices, and commercial spaces are not just clean but also
          inviting, organized, and conducive to a higher quality of life and
          work.
        </p>
        <h4>What Sets Our Housekeeping Services Apart:</h4>
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
        <h4>Residential and Commercial Housekeeping Services:</h4>
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
          At <b>Knight Riders Security Services</b>, we believe that cleanliness is not just a
          service but a commitment to enhancing your quality of life and work.
          We take pride in transforming spaces into clean, organized, and
          refreshing environments that you can enjoy and be proud of. Experience
          the difference our housekeeping services can make in your space.
          Contact us today to discuss your cleaning needs, and let us help you
          create a cleaner, healthier, and more comfortable living and working
          environment.
        </p>
      </Container>
    </div>
  );
}
