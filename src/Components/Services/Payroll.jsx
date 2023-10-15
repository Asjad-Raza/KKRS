import React from "react";
import { Container } from "react-bootstrap";
import "./Services.scss";

export default function Payroll() {
  let KeyPoints = [
    {
      Title: "Streamlined Payroll Processing: ",
      Desc: "We streamline the entire payroll process, from calculating employee wages and deductions to handling tax withholdings and compliance, leaving you with more time to focus on your core business operations.",
    },
    {
      Title: "Accurate and Timely Payments:",
      Desc: "Our meticulous attention to detail ensures that your employees are paid accurately and on time, improving employee satisfaction and reducing payroll-related errors.",
    },
    {
      Title: "Tax Compliance: ",
      Desc: "Staying compliant with tax laws and regulations is critical. Our experts stay up-to-date with tax codes and legislation to ensure your payroll remains in compliance, minimizing the risk of costly penalties.",
    },
    {
      Title: "Direct Deposit and Payment Options:",
      Desc: "We offer flexible payment options, including direct deposit, paper checks, and electronic pay stubs, catering to your employees' preferences.",
    },
    {
      Title: "Custom Reporting:",
      Desc: "Gain insights into your payroll data with custom reporting and analytics, helping you make informed decisions and track labor costs effectively.",
    },
    {
      Title: "Employee Self-Service: ",
      Desc: "Empower your employees with self-service portals, allowing them to access their pay stubs, tax forms, and other payroll-related information at their convenience",
    },
    {
      Title: "Dedicated Support: ",
      Desc: "Our team of payroll experts is always available to answer your questions, resolve issues, and provide personalized support whenever you need it.",
    },
  ];

  const SubKeyPoints = [
    {
      SubTitle: "Experience:",
      SubDesc:
        "With years of experience in payroll management, we have the expertise to handle complex payroll tasks efficiently.",
    },
    {
      SubTitle: "Efficiency:",
      SubDesc:
        "We use advanced payroll software and automation to streamline processes and reduce errors.",
    },
    {
      SubTitle: "Cost Savings:",
      SubDesc:
        "Outsourcing your payroll can save you time and money compared to in-house payroll processing.",
    },
    {
      SubTitle: "Peace of Mind:",
      SubDesc:
        "Focus on your business, knowing that your payroll is being handled accurately and in compliance with allregulations.",
    },
  ];
  return (
    <div className="ServiceContainer">
      <Container>
        <img className="Image" src="Images/Services/Payroll.jpg" alt="" />
        <h3>
          Efficient Payroll Management: Empowering Your Business with Precision
          and Compliance
        </h3>
        <p>
          At <b>Knight Riders Security Services</b>, we understand that managing
          payroll can be a complex, time-consuming, and often overwhelming task
          for businesses of all sizes. That's why we offer comprehensive payroll
          management services designed to simplify the payroll process, ensure
          accuracy, and keep your business in compliance with ever-changing tax
          regulations.
        </p>
        <h4>Key Features of Our Payroll Management Services:</h4>
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
        <h4>
          Why Choose <b>Knight Riders Security Services</b> for Payroll
          Management:
        </h4>
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
          With <b>Knight Riders Security Services</b>, you'll experience the
          benefits of hassle-free payroll management, allowing you to
          concentrate on what you do best growing your business. Let us take the
          burden of payroll off your shoulders while ensuring accuracy,
          compliance, and peace of mind for you and your employees. Contact us
          today to discuss how our payroll management services can transform
          your payroll processes and simplify your business operations.
        </p>
      </Container>
    </div>
  );
}
