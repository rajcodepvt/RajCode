import { useState } from "react";
import styled from "styled-components";

const ContactSection = styled.section`
  width: 100vw;
  padding: calc(2.5rem + 2.5vw) 0;
  background-color: #0a0b10;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
  color: var(--white);
  display: inline-block;
  font-size: 2rem;
  margin-bottom: 3rem;
  position: relative;
  @media only Screen and (max-width: 40em) {
    font-size: 1.5rem;
  }
  &::before {
    content: "";
    height: 1px;
    width: 50%;
    position: absolute;
    left: 50%;
    bottom: 0;
    transform: translate(-50%, 0.5rem);
    border-bottom: 2px solid var(--pink);
  }
`;

const StepLabel = styled.p`
  color: var(--pink);
  font-size: 0.9rem;
  margin-bottom: 1.5rem;
  font-weight: 500;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 40vw;
  min-height: 12rem;
  @media only Screen and (max-width: 48em) {
    width: 80vw;
  }
  @media only Screen and (max-width: 40em) {
    width: 90vw;
  }
  input,
  textarea {
    width: 100%;
    padding: 1rem calc(0.5rem + 1vw);
    background-color: var(--nav2);
    border: none;
    border-radius: 4px;
    color: #eff7f8;
    font-size: 1rem;
    font-family: "Poppins", sans-serif;
    &:active,
    &:focus {
      border: none;
      outline: none;
      background-color: var(--nav);
    }
    &::placeholder {
      color: #eff7f8;
      opacity: 0.6;
    }
  }
  textarea {
    min-height: 8rem;
    resize: vertical;
  }
`;

const Buttons = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1.5rem;
  width: 100%;
  justify-content: center;
`;

const Button = styled.button`
  padding: 0.8rem 2rem;
  background-color: var(--white);
  border-radius: 20px;
  font-size: 1.1rem;
  color: #0a0b10;
  cursor: pointer;
  transition: transform 0.3s;
  font-weight: 600;
  font-family: "Poppins", sans-serif;
  &:hover {
    transform: scale(1.1);
  }
  &:active {
    transform: scale(0.9);
  }
  @media only Screen and (max-width: 40em) {
    font-size: 1rem;
    padding: 0.6rem 1.5rem;
  }
`;

const BackBtn = styled(Button)`
  background-color: transparent;
  color: var(--white);
  border: 2px solid var(--white);
`;

const ErrorMsg = styled.p`
  color: #ff6b6b;
  font-size: 0.85rem;
  margin-top: 0.5rem;
`;

const Contact = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const [emailError, setEmailError] = useState("");
  const [phoneError, setPhoneError] = useState("");

  const handleNext = () => {
    if (step === 2) {
      if (!formData.email.includes("@") || !formData.email.includes(".")) {
        setEmailError("Please enter a valid email with @ and .");
        return;
      }
      setEmailError("");
    }
    if (step === 3) {
      if (!formData.phone) {
        setPhoneError("Phone number is required");
        return;
      }
      setPhoneError("");
    }
    setStep((prev) => prev + 1);
  };

  const handleBack = () => {
    setEmailError("");
    setPhoneError("");
    setStep((prev) => prev - 1);
  };

  const handlePhoneChange = (e) => {
    const value = e.target.value.replace(/[^0-9+]/g, "");
    setFormData((prev) => ({ ...prev, phone: value }));
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
    }
  };

  const handleSubmit = () => {
    console.log("Form submitted:", formData);
    alert("Thank you for your message! I will get back to you soon.");
    setFormData({ name: "", email: "", phone: "", message: "" });
    setStep(1);
  };

  return (
    <ContactSection id="contact">
      <Title>Get in touch</Title>
      <StepLabel>Step {step} of 4</StepLabel>
      <Form onKeyDown={handleKeyDown}>
        {step === 1 && (
          <>
            <input
              name="name"
              type="text"
              placeholder="Your name"
              value={formData.name}
              onChange={handleChange}
              required
              autoFocus
            />
            <Buttons>
              <Button type="button" onClick={handleNext}>
                Next
              </Button>
            </Buttons>
          </>
        )}

        {step === 2 && (
          <>
            <input
              name="email"
              type="email"
              placeholder="Enter your email address"
              value={formData.email}
              onChange={handleChange}
              required
              autoFocus
            />
            {emailError && <ErrorMsg>{emailError}</ErrorMsg>}
            <Buttons>
              <BackBtn type="button" onClick={handleBack}>
                Back
              </BackBtn>
              <Button type="button" onClick={handleNext}>
                Next
              </Button>
            </Buttons>
          </>
        )}

        {step === 3 && (
          <>
            <input
              name="phone"
              type="tel"
              placeholder="Enter your phone number"
              value={formData.phone}
              onChange={handlePhoneChange}
              required
              autoFocus
            />
            {phoneError && <ErrorMsg>{phoneError}</ErrorMsg>}
            <Buttons>
              <BackBtn type="button" onClick={handleBack}>
                Back
              </BackBtn>
              <Button type="button" onClick={handleNext}>
                Next
              </Button>
            </Buttons>
          </>
        )}

        {step === 4 && (
          <>
            <textarea
              name="message"
              placeholder="Your message"
              value={formData.message}
              onChange={handleChange}
              required
              autoFocus
            ></textarea>
            <Buttons>
              <BackBtn type="button" onClick={handleBack}>
                Back
              </BackBtn>
              <Button type="button" onClick={handleSubmit}>
                Send
              </Button>
            </Buttons>
          </>
        )}
      </Form>
    </ContactSection>
  );
};

export default Contact;
