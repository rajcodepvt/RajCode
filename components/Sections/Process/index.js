import styled from "styled-components";

const ProcessSection = styled.section`
  width: 100%;
  padding: calc(5rem + 5vw) calc(2rem + 2vw);
  background-color: var(--white);
  display: flex;
  flex-direction: column;
  align-items: center;
  @media only Screen and (max-width: 40em) {
    padding: 3rem calc(1.5rem + 1vw);
  }
`;

const Title = styled.h1`
  color: #0a0b10;
  display: inline-block;
  font-size: 2rem;
  margin-bottom: 4rem;
  position: relative;
  &::before {
    content: "";
    height: 1px;
    width: 50%;
    position: absolute;
    left: 50%;
    bottom: 0;
    transform: translate(-50%, 0.5rem);
    border-bottom: 2px solid var(--purple);
  }
  @media only Screen and (max-width: 40em) {
    font-size: 1.5rem;
    margin-bottom: 3rem;
  }
`;

const Steps = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 3rem;
  max-width: 1100px;
  width: 100%;
  @media only Screen and (max-width: 64em) {
    gap: 2rem;
  }
  @media only Screen and (max-width: 48em) {
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
  }
  @media only Screen and (max-width: 40em) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

const Step = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 1rem;
`;

const StepNumber = styled.div`
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  background-color: var(--purple);
  color: var(--white);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  font-weight: 700;
  flex-shrink: 0;
`;

const StepTitle = styled.h3`
  font-size: 1.2rem;
  color: #0a0b10;
  font-weight: 600;
  @media only Screen and (max-width: 40em) {
    font-size: 1rem;
  }
`;

const StepText = styled.p`
  font-size: calc(0.5rem + 0.5vw);
  color: var(--nav2);
  line-height: 1.6;
  @media only Screen and (max-width: 40em) {
    font-size: 0.9rem;
  }
`;

const Process = () => {
  return (
    <ProcessSection id="process">
      <Title>How I Work</Title>
      <Steps>
        <Step>
          <StepNumber>1</StepNumber>
          <StepTitle>Discovery</StepTitle>
          <StepText>I learn what you actually need, not just what you asked for.</StepText>
        </Step>
        <Step>
          <StepNumber>2</StepNumber>
          <StepTitle>Design</StepTitle>
          <StepText>I make it look like it means business.</StepText>
        </Step>
        <Step>
          <StepNumber>3</StepNumber>
          <StepTitle>Development</StepTitle>
          <StepText>I build it right, the first time.</StepText>
        </Step>
        <Step>
          <StepNumber>4</StepNumber>
          <StepTitle>Launch</StepTitle>
          <StepText>It goes live. You look good.</StepText>
        </Step>
      </Steps>
    </ProcessSection>
  );
};

export default Process;
