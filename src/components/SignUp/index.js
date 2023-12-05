import React, { useState } from "react";
import "./signup.scss";
import { alertData, testimonialData, notificationData } from "../../utilities";
import CarouselComponent from "../ui/Carousel";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setErrorMessage("");
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Simple email validation
    if (!email.includes("@") || !email.includes(".")) {
      setErrorMessage("Please enter a valid email");
      return;
    }
    console.log("Email submitted:", email);
    window.location.href = 'https://app.loch.one/welcome';
  };

  return (
    <section className="container">
      <div className="alert-container">
        {alertData.map((item, id) => {
          return (
            <div className="wrapper" key={id}>
              <div className="left">
                <img src={item?.icon} alt={item?.name} width={32} height={32} />
                <h4>{item?.heading}</h4>
                <p>{item?.content}</p>
              </div>
              <div className="right">
                {item?.cohorts? <img src={item?.cohorts} width={335} height={306} />: <CarouselComponent notificationData={notificationData}/>}
              </div>
            </div>
          );
        })}
        <div className="testimonial-container">
          <h5>Testimonials</h5>
          <div className="testimonial">
            <img src="/assets/brand/loch.svg" />
            <div className="card-controller">
              <CarouselComponent testimonialData={testimonialData}/>
            </div>
          </div>
        </div>
      </div>
      <div className="sign-up-container">
        <div className="sign-up-wrapper">
        <h3>Sign up for exclusive access.</h3>
        <form onSubmit={handleFormSubmit}>
          <input type="email" value={email} onChange={handleEmailChange} className="primary-input" placeholder="Your email address"/>
          {errorMessage && <p className="error-message">{errorMessage}</p>}
          <button type="submit" className="primary-button">Get started</button>
          <label>You’ll receive an email with an invite link to join.</label>
        </form>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
