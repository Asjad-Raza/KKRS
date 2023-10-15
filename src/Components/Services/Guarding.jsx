import React from "react";
import { Container } from "react-bootstrap";
import "./Services.scss";

export default function Guarding() {
  let KeyPoints = [
    {
      Title: "Highly Trained Guards:",
      Desc: "Our security personnel are not just guards; they are trained professionals who understand the nuances of security in various environments. They are skilled in conflict resolution, emergency response, and customer service, ensuring they can handle any situation with professionalism and poise.",
    },
    {
      Title: "24/7 Vigilance:",
      Desc: "Security threats can arise at any time, which is why our guards are available around the clock, providing continuous protection for your property and assets.",
    },
    {
      Title: "Customized Solutions: ",
      Desc: "We recognize that every client has unique security needs. Our team works closely with you to create a tailored security plan that addresses your specific requirements, ensuring the most effective protection possible.",
    },
    {
      Title: "Advanced Technology:",
      Desc: "Our guards are equipped with the latest security technology, including surveillance systems and communication tools, to enhance their effectiveness and provide real-time reporting.",
    },
    {
      Title: " Proactive Security:",
      Desc: "We believe in proactive security measures. Our guards not only respond to incidents but also work diligently to prevent them, making your environment safer and more secure.",
    },
    {
      Title: " Unwavering Commitment:",
      Desc: "We take our responsibility to protect you and your assets seriously. When you choose <b>Knight Riders Security Services</b>, you choose a partner with a steadfast commitment to your safety and peace of mind.",
    },
  ];

  return (
    <div className="ServiceContainer">
      <Container>
        <div>
          <img className="Image" src="Images/Services/Guarding.jpg" alt="" />
        </div>
        <h3>Comprehensive Guarding Services for Your Peace of Mind</h3>
        <p>
          At <b>Knight Riders Security Services</b>, we take pride in offering
          comprehensive guarding services that go beyond conventional security
          measures. We understand that safety is not just about having a
          physical presence; it's about having a vigilant and highly-trained
          team that stands as a dedicated shield for your property, assets, and
          peace of mind. Our guarding services are designed to meet the diverse
          needs of our clients, whether you are an individual seeking personal
          protection, a business securing your premises, or an organization
          safeguarding critical assets. Our team of professional security
          personnel is meticulously selected, rigorously trained, and equipped
          with the skills and knowledge to handle a wide range of security
          challenges.
        </p>
        <h4>
          With <b>Knight Riders Security Services</b>, you can KeyPoint:
        </h4>
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
        <p>
          With <b>Knight Riders Security Services</b> guarding services, you can
          rest assured that your security concerns are in capable hands. We are
          dedicated to delivering the highest level of protection, allowing you
          to focus on your core activities with confidence, knowing that we've
          got your back. Discover the difference that professional, reliable,
          and comprehensive guarding services can make. Contact us today to
          discuss your security needs, and let us be the safeguarding force you
          can depend on.
        </p>
      </Container>
    </div>
  );
}
