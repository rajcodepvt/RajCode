"use client";

import styled, { keyframes } from "styled-components";

const move = keyframes`
0% { transform: translateY(-5px)  }
    50% { transform: translateY(10px) }
    100% { transform: translateY(-5px) }
`;

const HomeSection = styled.section`
  width: 100%;
  height: 45vw;
  background-color: #0a0b10;
  display: flex;
  justify-content: center;
  position: relative;
  overflow: hidden;
  @media only Screen and (max-width: 48em) {
    height: 70vw;
    display: block;
  }
  @media only Screen and (max-width: 420px) {
    height: auto;
    padding-bottom: 2rem;
  }
`;

const Blobs = styled.div`
  width: 100%;
  position: absolute;
  right: 0;
  @media only Screen and (max-width: 48em) {
    opacity: 0.5;
  }
`;

const PinkBlob = styled.div`
  width: calc(15% + 15vw);
  position: absolute;
  right: 0;
  top: calc(5rem + 5vw);
  z-index: 6;
`;
const PurpleBlob = styled.div`
  width: calc(10% + 10vw);
  position: absolute;
  right: 0;
`;
const WhiteBlob = styled.div`
  width: calc(20% + 20vw);
  position: absolute;
  right: calc(3.5rem + 3.5vw);
  top: calc(2rem + 2vw);
  z-index: 5;
`;

const MainContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 70%;
  @media only Screen and (max-width: 48em) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
  }
`;

const MobileSvg = styled.img`
  max-width: 100%;
  width: calc(30% + 20vw);
  height: auto;
  z-index: 7;
  animation: ${move} 2.5s ease infinite;
  @media only Screen and (max-width: 48em) {
    align-self: flex-start;
    position: absolute;
    bottom: 0;
    width: calc(30% + 20vw);
    opacity: 0.5;
  }
  @media only Screen and (max-width: 40em) {
    display: none;
  }
`;

const Lb = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 50%;
  line-height: 1.5;
  color: var(--white);
  position: relative;
  z-index: 15;
  @media only Screen and (max-width: 48em) {
    width: 85%;
    text-align: center;
    align-items: center;
    justify-content: space-around;
    margin-top: calc(2.5rem + 2.5vw);
    filter: drop-shadow(2px 4px 6px black);
  }
  @media only Screen and (max-width: 40em) {
    width: 90%;
    filter: none;
  }
`;

const Topic = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--nav);
  color: var(--white);
  font-weight: 700;
  font-size: calc(0.4rem + 0.4vw);
  padding: 0.5rem 1rem;
  border-radius: 20px;
`;

const Circle = styled.span`
  display: inline-block;
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  background-color: var(--purple);
  margin-right: 0.5rem;
`;

const Title = styled.h1`
  font-size: calc(2rem + 1vw);
  line-height: 1.2;
  padding: 0.5rem 0;
  @media only Screen and (max-width: 48em) {
    font-size: calc(1.5rem + 2vw);
  }
  @media only Screen and (max-width: 40em) {
    font-size: 1.5rem;
  }
`;

const SubText = styled.p`
  font-size: calc(0.5rem + 0.5vw);
  color: var(--nav2);
  @media only Screen and (max-width: 48em) {
    font-size: 0.9rem;
  }
`;

const CTA = styled.button`
  background-color: var(--white);
  color: #0a0b10;
  padding: 0.5rem 1rem;
  margin-top: 1rem;
  border-radius: 20px;
  cursor: pointer;
  font-size: calc(0.5rem + 0.5vw);
  font-weight: 700;
  display: flex;
  align-items: center;
  transition: transform 0.2s;

  img {
    width: 1.5rem;
  }
  @media only Screen and (max-width: 48em) {
    padding: 0.3rem 1rem;
    font-size: calc(0.8rem + 0.4vw);
  }
  @media only Screen and (max-width: 40em) {
    padding: 0.4rem 1.2rem;
    font-size: 0.9rem;
    img {
      width: 1.2rem;
    }
  }
  &:hover {
    transform: scale(1.1);
  }
  &:active {
    transform: scale(0.9);
  }
`;

const HeroSection = () => {
  const scrollToContact = (e) => {
    e.preventDefault();
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "end",
        inline: "nearest",
      });
    }
  };

  return (
    <HomeSection id="home">
      <Blobs>
        <PinkBlob>
          <picture>
            <source media="(min-width: 48em)" srcSet="/assets/blobPink-desktop.webp" />
            <img src="/assets/blobPink.webp" alt="" width="216" height="263" />
          </picture>
        </PinkBlob>
        <WhiteBlob>
          <picture>
            <source media="(min-width: 48em)" srcSet="/assets/blob white-desktop.webp" />
            <img src="/assets/blob white.webp" alt="" width="288" height="233" />
          </picture>
        </WhiteBlob>
        <PurpleBlob>
          <picture>
            <source media="(min-width: 48em)" srcSet="/assets/blob purple-desktop.webp" />
            <img src="/assets/blob purple.webp" alt="" width="214" height="390" />
          </picture>
        </PurpleBlob>
      </Blobs>

      <MainContent>
        <Lb id="leftBlock">
          <Topic>
            <Circle />
            <span>I Build Web</span>
          </Topic>
          <Title>I don&apos;t just build websites.</Title>
          <SubText>
            I build the ones your competitors wish they&apos;d thought of first.
          </SubText>
          <CTA onClick={scrollToContact}>
            Get in touch &nbsp;
            <img src="/assets/Arrow Right.svg" alt="cta" width="100" height="100" />
          </CTA>
        </Lb>

        <MobileSvg
          src="/assets/mobile.svg"
          alt="Mobile Svg"
          width="400"
          height="400"
        />
      </MainContent>
    </HomeSection>
  );
};

export default HeroSection;
