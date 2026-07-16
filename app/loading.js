import styled, { keyframes } from "styled-components";

const pulse = keyframes`
  0%, 100% { opacity: 0.4; transform: scale(0.8); }
  50% { opacity: 1; transform: scale(1); }
`;

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const LoaderWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: #0a0b10;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 9999;
  animation: ${fadeIn} 0.3s ease;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  margin-bottom: 2rem;
  img {
    width: 3rem;
    height: 3rem;
  }
  h2 {
    color: var(--white);
    font-size: 1.8rem;
    font-weight: 700;
  }
`;

const Dots = styled.div`
  display: flex;
  gap: 0.5rem;
`;

const Dot = styled.span`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  animation: ${pulse} 1.4s ease-in-out infinite;
  animation-delay: ${(props) => props.delay};
`;

export default function Loading() {
  return (
    <LoaderWrapper>
      <Logo>
        <img src="/assets/logo.svg" alt="RajCode" />
        <h2>RajCode</h2>
      </Logo>
      <Dots>
        <Dot color="var(--purple)" delay="0s" />
        <Dot color="var(--pink)" delay="0.2s" />
        <Dot color="var(--white)" delay="0.4s" />
      </Dots>
    </LoaderWrapper>
  );
}
