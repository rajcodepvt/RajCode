import styled from "styled-components";

const ContactSection = styled.section`
  width: 100%;
  padding: calc(2.5rem + 2.5vw) 0;
  background-color: #0a0b10;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media only Screen and (max-width: 40em) {
    padding: calc(2rem + 2vw) 0;
  }
`;

const Title = styled.h1`
  color: var(--white);
  display: inline-block;
  font-size: 2rem;
  margin-bottom: 1rem;
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

const SubText = styled.p`
  color: var(--nav2);
  font-size: calc(0.5rem + 0.5vw);
  margin-bottom: 3rem;
  text-align: center;
`;

const Links = styled.div`
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
  justify-content: center;
  padding: 0 1.5rem;
  @media only Screen and (max-width: 48em) {
    gap: 1.5rem;
  }
  @media only Screen and (max-width: 40em) {
    gap: 1rem;
  }
`;

const SocialLink = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.8rem;
  padding: 1.5rem 2.5rem;
  background-color: var(--nav);
  border-radius: 20px;
  transition: all 0.3s ease;
  text-decoration: none;
  &:hover {
    transform: translateY(-5px);
    background-color: var(--nav2);
  }
  img {
    width: 3rem;
    height: 3rem;
    filter: invert(100%);
    transition: all 0.3s ease;
  }
  &:hover img {
    filter: invert(50%) sepia(100%) saturate(500%) hue-rotate(216deg)
      brightness(100%) contrast(97%);
  }
  @media only Screen and (max-width: 48em) {
    padding: 1.2rem 2rem;
    img {
      width: 2.8rem;
      height: 2.8rem;
    }
  }
  @media only Screen and (max-width: 40em) {
    padding: 1rem 1.5rem;
    img {
      width: 2.5rem;
      height: 2.5rem;
    }
  }
`;

const Label = styled.span`
  color: var(--white);
  font-size: 0.9rem;
  font-weight: 500;
  @media only Screen and (max-width: 40em) {
    font-size: 0.8rem;
  }
`;

const Contact = () => {
  return (
    <ContactSection id="contact">
      <Title>Get in touch</Title>
      <SubText>Feel free to reach out through any of these platforms</SubText>
      <Links>
        <SocialLink
          href="https://wa.me/918271754978?text=Hi%20Raj%2C%20I%20found%20your%20website"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/assets/whatsapp.svg" alt="WhatsApp" />
          <Label>WhatsApp</Label>
        </SocialLink>

        <SocialLink
          href="https://www.instagram.com/rajcodepvt/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/assets/instagram-square-brands.svg" alt="Instagram" />
          <Label>Instagram</Label>
        </SocialLink>

        <SocialLink href="mailto:rajcodepvt@gmail.com?subject=Email%20From%20Your%20Website">
          <img src="/assets/envelope-open-solid.svg" alt="Email" />
          <Label>Email</Label>
        </SocialLink>
      </Links>
    </ContactSection>
  );
};

export default Contact;
