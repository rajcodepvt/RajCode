import styled from "styled-components";

const FOOTER = styled.footer`
  padding: 1.2rem calc(2.5rem + 2.5vw);
  font-size: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media only Screen and (max-width: 48em) {
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    padding: 1.5rem calc(2rem + 2vw);
    text-align: center;
  }
`;

const RightText = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  img {
    width: 1.5rem;
    height: 1.5rem;
    filter: invert(100%);
    transition: all 0.2s ease-in-out;
  }
  a {
    display: flex;
    align-items: center;
    &:hover {
      img {
        transform: scale(1.5);
        filter: invert(50%) sepia(100%) saturate(500%) hue-rotate(216deg)
          brightness(100%) contrast(97%);
      }
    }
  }
  @media only Screen and (max-width: 40em) {
    font-size: 0.85rem;
    gap: 0.4rem;
    img {
      width: 1.3rem;
      height: 1.3rem;
    }
  }
`;

const LeftText = styled.div`
  text-align: left;
  @media only Screen and (max-width: 48em) {
    text-align: center;
    font-size: 0.9rem;
  }
`;

const Footer = () => {
  return (
    <FOOTER>
      <LeftText>
        &copy; 2026 Built and Designed by{" "}
        <a href="https://www.youtube.com/channel/UCeYt6blRBKuNrEg_-282fSA">
          @rajcodepvt
        </a>
      </LeftText>
      <RightText>
        Reach out to me via 😉
        <a href="https://twitter.com/rajcodepvt">
          <img src="/assets/twitter-square-brands.svg" alt="Twitter" />
        </a>
        <a href="https://www.instagram.com/rajcodepvt/">
          <img src="/assets/instagram-square-brands.svg" alt="Instagram" />
        </a>
        <a href="mailto:rajcodepvt@gmail.com?subject=Email From Your Website">
          <img src="/assets/envelope-open-solid.svg" alt="Gmail" />
        </a>
      </RightText>
    </FOOTER>
  );
};

export default Footer;
