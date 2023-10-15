import React from "react";
import { Container } from "react-bootstrap";
import "./Services.scss";

export default function FB() {
  const KeyPoints = [
    {
      Title: "Culinary Artists:",
      Desc: "Our chefs are masters of their craft, combining creativity and expertise to craft culinary delights that tantalize the taste buds. With a passion for gastronomy, they take pride in sourcing the finest ingredients and creating dishes that cater to diverse palates.",
    },
    {
      Title: "Sommeliers:",
      Desc: "Our wine experts, or sommeliers, are connoisseurs of the vine, dedicated to enhancing your dining experience with carefully selected wines and pairings. They are here to guide you through the perfect wine selection for every occasion.",
    },
    {
      Title: "Servers and Waitstaff:",
      Desc: "Our front-of-house team is comprised of courteous and attentive professionals who understand the art of hospitality. They ensure that your dining experience is seamless, from taking your order to serving your meal with a smile.",
    },
    {
      Title: "Bartenders:",
      Desc: " Our skilled bartenders are mixologists who craft exquisite cocktails and beverages that complement your dining experience. They are experts in their craft, offering a wide array of libations to suit your preferences.",
    },
    {
      Title: "Banquet and Event Staff: ",
      Desc: " For special occasions, corporate events, or celebrations, our banquet and event staff ensure that every detail is meticulously attended to, making your event a success.",
    },
  ];

  const SubKeyPoints = [
    {
      SubTitle: "Passion for Service:",
      SubDesc:
        "Our team is genuinely passionate about creating memorable dining experiences and providing impeccable service.",
    },
    {
      SubTitle: "Attention to Detail",
      SubDesc:
        "We pride ourselves on our meticulous attention to detail, from presentation and flavor to ambiance and customer satisfaction.",
    },
    {
      SubTitle: "Flexibility:",
      SubDesc:
        " Whether it's a fine dining restaurant, a casual eatery, or a large-scale event, our F&B personnel are adaptable and skilled at catering to various settings and requirements.",
    },
    {
      SubTitle: "Diversity and Inclusivity:",
      SubDesc:
        "We celebrate diversity and ensure that our team is inclusive, allowing us to provide a warm and welcoming atmosphere for all guests.",
    },
  ];
  return (
    <div className="ServiceContainer">
      <Container>
        <img src="Images/Services/Labour.jpg" alt="" className="Image" />
        <h3>
          Excellence in Food and Beverage Service: Your Culinary Journey Begins
          with Our Dedicated Team
        </h3>
        <p>
          At <b>Knight Riders Security Services</b>, we take pride in curating
          exceptional dining experiences through the expertise and dedication of
          our Food and Beverage (F&B) personnel. From the kitchen to the dining
          room, our team is committed to delivering the highest standards of
          service, ensuring that every meal is a memorable and delightful
          journey.
        </p>
        <h4>Meet Our F&B Team:</h4>
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
        <h4>What Sets Our F&B Personnel Apart:</h4>
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
          At <b>Knight Riders Security Services</b>, we believe that dining is
          not just about food; it's about the entire experience. Our dedicated
          F&B personnel are here to make your culinary journey exceptional,
          whether you're dining in one of our restaurants, attending a special
          event, or enjoying a private celebration. Discover the world of
          flavors and impeccable service with our F&B team. Contact us today to
          reserve a table, plan an event, or discuss how we can make your dining
          experience extraordinary.
        </p>
      </Container>
    </div>
  );
}
