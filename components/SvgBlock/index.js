import styled from "styled-components";

const svgMap = {
  "Design.svg": "/assets/Design.svg",
  "Develope.svg": "/assets/Develope.svg",
  "Support.svg": "/assets/Support.svg",
};

const Rb = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40%;
  position: relative;
  svg {
    width: 100%;
    height: auto;
  }
  @media only Screen and (max-width: 48em) {
    display: none;
  }
`;

const SvgBlock = ({ svg }) => {
  const svgSrc = svgMap[svg] || `/assets/${svg}`;
  return (
    <Rb id="svgBlock">
      <img src={svgSrc} alt="Services" />
    </Rb>
  );
};

export default SvgBlock;
